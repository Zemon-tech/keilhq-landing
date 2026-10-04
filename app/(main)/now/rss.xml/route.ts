import { getNowFeed } from "@/lib/now";

// Always serve fresh content — never use the static build cache for the feed.
export const dynamic = "force-dynamic";

const BASE_URL = "https://keilhq.in";
const FEED_URL = `${BASE_URL}/now/rss.xml`;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Resolve a relative image path to an absolute URL. */
function absoluteImage(src: string | undefined): string {
  if (!src) return "";
  if (/^https?:\/\//.test(src)) return src;
  return `${BASE_URL}${src}`;
}

export async function GET() {
  const items = await getNowFeed();

  // All three channels — blogs, changelog, and press (external links included)
  const feedItems = items.slice(0, 50);

  const lastBuildDate =
    feedItems.length > 0
      ? new Date(feedItems[0].timestamp).toUTCString()
      : new Date().toUTCString();

  const entries = feedItems
    .map((item) => {
      // Internal items link to /now/<slug>; press items link to their external URL.
      const link = item.external ? item.href : `${BASE_URL}${item.href}`;

      // Stable GUID: internal items use their canonical URL, external press items
      // use a keilhq.in namespace URI so the GUID never clashes across rebuilds.
      const guid = item.external
        ? `${BASE_URL}/now/press/${item.slug}`
        : link;

      const pubDate = item.timestamp
        ? new Date(item.timestamp).toUTCString()
        : "";

      // Build a plain-text description: excerpt, then image URL if present.
      const imgAbsolute = absoluteImage(item.image);
      const descriptionParts: string[] = [];
      if (item.excerpt) descriptionParts.push(item.excerpt);
      if (imgAbsolute) descriptionParts.push(`Image: ${imgAbsolute}`);
      const description = escapeXml(descriptionParts.join(" | "));

      // Optional enclosure for cover images (enables podcast-style readers).
      const enclosure = imgAbsolute
        ? `\n      <enclosure url="${escapeXml(imgAbsolute)}" type="image/jpeg" length="0" />`
        : "";

      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="${item.external ? "false" : "true"}">${escapeXml(guid)}</guid>
      <category>${escapeXml(item.channel)}</category>
      <author>${escapeXml(item.author)}</author>${pubDate ? `\n      <pubDate>${pubDate}</pubDate>` : ""}
      <description>${description}</description>${enclosure}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>KeilHQ — Now</title>
    <link>${BASE_URL}/now</link>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
    <description>Changelog, product launches, blog posts, and press from KeilHQ.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <ttl>60</ttl>
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      // Browsers and feed readers can cache for 1 hour; CDN for 10 min.
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
    },
  });
}
