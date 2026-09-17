import { getNowFeed } from "@/lib/now";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = await getNowFeed();
  const baseUrl = "https://keilhq.in";

  const entries = items
    .filter((item) => item.href?.startsWith("/"))
    .slice(0, 30)
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${baseUrl}${item.href}</link>
      <guid>${baseUrl}${item.href}</guid>
      ${item.date ? `<pubDate>${escapeXml(new Date(item.timestamp).toUTCString())}</pubDate>` : ""}
      <description>${escapeXml(item.excerpt)}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>KeilHQ — Now</title>
    <link>${baseUrl}/now</link>
    <description>Changelog, product launches, and stories from KeilHQ.</description>
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
