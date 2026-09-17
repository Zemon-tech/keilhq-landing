/**
 * Pure link-unfurling (edge-safe: no node: APIs).
 * Used by the /api/press/unfurl route and re-exported for build scripts.
 */
export interface UnfurledLink {
  title?: string;
  image?: string;
  description?: string;
  fetchedAt: string;
}

const FETCH_TIMEOUT_MS = 10_000;
const USER_AGENT = 'Mozilla/5.0 (compatible; KeilHQBot/1.0; +https://keilhq.in)';
const MAX_HTML_BYTES = 200_000;
const MAX_REDIRECTS = 3;

export const PRESS_PLATFORMS = ['linkedin', 'instagram', 'x', 'news', 'youtube', 'podcast'] as const;

export const PLATFORM_LABELS: Record<string, string> = {
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  x: 'X',
  news: 'Press',
  youtube: 'YouTube',
  podcast: 'Podcast',
};

/** Host-based platform guess for pasted URLs (editor override always wins). */
export function guessPlatform(url: string): string {
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (host === 'youtu.be' || host.endsWith('youtube.com')) return 'youtube';
    if (host.endsWith('x.com') || host.endsWith('twitter.com')) return 'x';
    if (host.endsWith('linkedin.com')) return 'linkedin';
    if (host.endsWith('instagram.com')) return 'instagram';
  } catch {
    /* fall through */
  }
  return 'news';
}

/** SSRF guard: refuse loopback / private / link-local / internal hosts. */
export function assertPublicUrl(url: string): void {
  let host: string;
  try {
    host = new URL(url).hostname.toLowerCase().replace(/^\[|\]$/g, '');
  } catch {
    throw new Error('Invalid URL');
  }
  if (
    host === 'localhost' ||
    host === '::1' ||
    host.endsWith('.local') ||
    host.endsWith('.localhost') ||
    host.endsWith('.internal')
  ) {
    throw new Error('Blocked host');
  }
  const v4 = host.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (v4) {
    const [, a, b] = v4.map(Number);
    if (a === 127 || a === 10 || a === 0) throw new Error('Blocked host');
    if (a === 172 && b >= 16 && b <= 31) throw new Error('Blocked host');
    if (a === 192 && b === 168) throw new Error('Blocked host');
    if (a === 169 && b === 254) throw new Error('Blocked host');
  }
}

/**
 * Fetch with manual redirect following (max 3), re-checking every hop
 * against the SSRF blocklist — fetch() follows redirects blindly.
 */
async function fetchChecked(url: string, init: RequestInit = {}): Promise<Response> {
  let current = url;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    assertPublicUrl(current);
    const res = await fetchWithTimeout(current, { ...init, redirect: 'manual' });
    const location = res.headers.get('location');
    if (res.status >= 300 && res.status < 400 && location) {
      current = new URL(location, current).toString();
      continue;
    }
    return res;
  }
  throw new Error('Too many redirects');
}

async function fetchWithTimeout(url: string, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,application/json', ...(init.headers || {}) },
    });
  } finally {
    clearTimeout(timer);
  }
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num: string) => String.fromCharCode(parseInt(num, 10)));
}

/** Extract <meta property|name="key" content="…"> regardless of attribute order. */
function pickMeta(html: string, key: string): string | undefined {
  const patterns = [
    new RegExp(`<meta[^>]*?(?:property|name)=["']${key}["'][^>]*?content=["']([^"']+)["']`, 'i'),
    new RegExp(`<meta[^>]*?content=["']([^"']+)["'][^>]*?(?:property|name)=["']${key}["']`, 'i'),
  ];
  for (const re of patterns) {
    const match = re.exec(html);
    if (match?.[1]?.trim()) return decodeEntities(match[1].trim());
  }
  return undefined;
}

function pickTitleTag(html: string): string | undefined {
  const match = /<title[^>]*>([^<]+)<\/title>/i.exec(html);
  return match?.[1]?.trim() ? decodeEntities(match[1].trim()) : undefined;
}

export function isYouTubeUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === 'youtu.be' || host.endsWith('youtube.com');
  } catch {
    return false;
  }
}

async function unfurlYouTube(url: string): Promise<UnfurledLink | null> {
  const endpoint = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
  const res = await fetchChecked(endpoint);
  if (!res.ok) return null;
  const data = (await res.json()) as Record<string, unknown>;
  if (typeof data.title !== 'string') return null;
  const out: UnfurledLink = { title: data.title, fetchedAt: new Date().toISOString() };
  if (typeof data.thumbnail_url === 'string') out.image = data.thumbnail_url;
  if (typeof data.author_name === 'string') out.description = `By ${data.author_name}`;
  return out;
}

async function unfurlGeneric(url: string): Promise<UnfurledLink | null> {
  const res = await fetchChecked(url);
  if (!res.ok) return null;
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('html')) return null;
  const html = (await res.text()).slice(0, MAX_HTML_BYTES);
  const title =
    pickMeta(html, 'og:title') || pickMeta(html, 'twitter:title') || pickTitleTag(html);
  const image = pickMeta(html, 'og:image') || pickMeta(html, 'twitter:image');
  const description = pickMeta(html, 'og:description') || pickMeta(html, 'twitter:description');
  if (!title && !image && !description) return null;
  return { title, image, description, fetchedAt: new Date().toISOString() };
}

/** Fresh fetch, no cache. Never throws — returns null when unreadable. */
export async function unfurlFresh(url: string): Promise<UnfurledLink | null> {
  try {
    if (isYouTubeUrl(url)) {
      return (await unfurlYouTube(url)) || (await unfurlGeneric(url));
    }
    return await unfurlGeneric(url);
  } catch {
    return null;
  }
}
