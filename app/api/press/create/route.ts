import { NextResponse } from 'next/server';
import { unfurlFresh, assertPublicUrl, PRESS_PLATFORMS } from '@/lib/unfurl';
import { isAdminAuthorized } from '@/lib/admin-auth';

/**
 * Draft creator for Press entries (local dev only).
 *
 * Writes content/press/<slug>/index.json directly so editors don't
 * retype fetched data. Only works where the server can write to the
 * repo filesystem (local dev) — in production (GitHub storage mode)
 * it responds 501 and the editor uses the copy-into-Keystatic flow.
 * Same basic-auth gate as the admin pages; URLs restricted to http(s)
 * with loopback/private hosts refused.
 */

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function slugifyTitle(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  return SLUG_RE.test(slug) ? slug : '';
}

async function downloadThumbnail(imageUrl: string, slug: string): Promise<string | null> {
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
    const ext =
      contentType.includes('png') ? 'png'
      : contentType.includes('webp') ? 'webp'
      : 'jpg';
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length === 0 || buffer.length > 8_000_000) return null;
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const filename = `${slug}.${ext}`;
    await fs.mkdir(path.join(process.cwd(), 'public', 'images', 'cms', 'press'), { recursive: true });
    await fs.writeFile(path.join(process.cwd(), 'public', 'images', 'cms', 'press', filename), buffer);
    return filename;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  if (!isAdminAuthorized(request)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const url = typeof body.url === 'string' ? body.url.trim() : '';
  if (!/^https?:\/\//i.test(url)) {
    return NextResponse.json({ error: 'Provide a valid http(s) URL.' }, { status: 400 });
  }
  try {
    assertPublicUrl(url);
  } catch {
    return NextResponse.json({ error: 'This host is not allowed.' }, { status: 400 });
  }
  const platform =
    typeof body.platform === 'string' &&
    (PRESS_PLATFORMS as readonly string[]).includes(body.platform)
      ? body.platform
      : 'news';
  const headline = typeof body.headline === 'string' ? body.headline.slice(0, 200) : '';
  const excerpt = typeof body.excerpt === 'string' ? body.excerpt.slice(0, 500) : '';
  const withThumbnail = body.withThumbnail !== false;

  const unfurled = await unfurlFresh(url);

  let slug = typeof body.slug === 'string' && SLUG_RE.test(body.slug) ? body.slug : '';
  if (!slug) {
    const sourceTitle = typeof body.title === 'string' && body.title.trim()
      ? body.title.trim()
      : unfurled?.title || '';
    slug = slugifyTitle(sourceTitle);
  }
  if (!slug) {
    return NextResponse.json(
      { error: 'Could not derive an entry name — provide a slug like "acme-launch-post".' },
      { status: 422 }
    );
  }

  let thumbnail: string | null = null;
  if (withThumbnail && unfurled?.image && /^https?:\/\//i.test(unfurled.image)) {
    thumbnail = await downloadThumbnail(unfurled.image, slug);
  }

  const entry = {
    title: slug,
    headline: headline || null,
    platform,
    url,
    thumbnail,
    excerpt,
    publishedDate: new Date().toISOString().slice(0, 10),
    featured: false,
  };

  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const dir = path.join(process.cwd(), 'content', 'press', slug);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, 'index.json'), JSON.stringify(entry, null, 2) + '\n');
  } catch (err) {
    return NextResponse.json(
      {
        error:
          'Cannot write entries in this environment (read-only filesystem). Copy the fields into Keystatic instead — the fetched values are shown above.',
      },
      { status: 501 }
    );
  }

  return NextResponse.json({
    slug,
    entry,
    unfurled,
    editUrl: `/keystatic/collection/press/${slug}`,
  });
}
