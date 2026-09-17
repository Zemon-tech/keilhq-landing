/**
 * Link unfurling for Press entries (build-time side).
 *
 * Pure fetching lives in lib/unfurl.ts (edge-safe, reused by the
 * /api/press/unfurl route). This module adds the persistent file cache in
 * cms/unfurl-cache.json (committed, 7-day TTL) so builds stay fast and
 * don't hammer source sites. A single failed fetch never fails the build —
 * the entry falls back to CMS values.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { unfurlFresh, assertPublicUrl, type UnfurledLink } from '../lib/unfurl';

export type { UnfurledLink };

const CACHE_PATH = path.join(process.cwd(), 'cms', 'unfurl-cache.json');
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

type UnfurlCache = Record<string, UnfurledLink>;

async function loadCache(): Promise<UnfurlCache> {
  try {
    const raw = await fs.readFile(CACHE_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

async function saveCache(cache: UnfurlCache): Promise<void> {
  await fs.mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await fs.writeFile(CACHE_PATH, JSON.stringify(cache, null, 2));
}

/**
 * Unfurl many URLs: fresh entries are fetched in parallel, stale/failed
 * ones reuse the persisted cache. Always resolves — never throws.
 */
export async function unfurlMany(urls: string[]): Promise<Record<string, UnfurledLink | null>> {
  const cache = await loadCache();
  const now = Date.now();
  const unique = [...new Set(urls.filter(Boolean))];
  const result: Record<string, UnfurledLink | null> = {};
  const toFetch: string[] = [];

  for (const url of unique) {
    const cached = cache[url];
    if (cached && now - Date.parse(cached.fetchedAt) < TTL_MS) {
      result[url] = cached;
    } else {
      toFetch.push(url);
    }
  }

  if (toFetch.length > 0) {
    console.log(`  …unfurling ${toFetch.length} press link(s)`);
    const settled = await Promise.allSettled(toFetch.map((url) => unfurlFresh(url)));
    settled.forEach((outcome, index) => {
      const url = toFetch[index];
      const fresh = outcome.status === 'fulfilled' ? outcome.value : null;
      if (fresh) {
        cache[url] = fresh;
        result[url] = fresh;
      } else {
        // Keep the stale cache entry (if any) so one bad fetch degrades gracefully.
        result[url] = cache[url] || null;
      }
    });
    await saveCache(cache);
  }

  return result;
}

/**
 * Persist a remote preview image under public/images/cms/press/ so the
 * site never hotlinks rot-prone third-party URLs. Returns the bare
 * filename for the entry thumbnail, or null when undownloadable.
 */
export async function downloadImageToPublic(
  imageUrl: string,
  slug: string
): Promise<string | null> {
  try {
    assertPublicUrl(imageUrl);
  } catch {
    return null;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch(imageUrl, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; KeilHQBot/1.0; +https://keilhq.in)' },
    });
    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.startsWith('image/')) return null;
    const ext = contentType.includes('png')
      ? 'png'
      : contentType.includes('webp')
        ? 'webp'
        : 'jpg';
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length === 0 || buffer.length > 8_000_000) return null;
    const filename = `${slug}-link.${ext}`;
    const dir = path.join(process.cwd(), 'public', 'images', 'cms', 'press');
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, filename), buffer);
    return filename;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
