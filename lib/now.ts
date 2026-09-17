// ─── Unified "Now" feed ──────────────────────────────────────────────────────
// Single source for the /now page. Every entry comes from Keystatic —
// Blog + Changelog + Press collections. Nothing here is hardcoded or faked:
// add content in /keystatic and it appears in the feed after regeneration.
import { cache } from "react";
import { getBlogPosts } from "@/cms/helpers/blog";
import { getChangelogs } from "@/cms/helpers/changelog";
import { getPressItems } from "@/cms/helpers/press";
import { PLATFORM_LABELS } from "@/lib/unfurl";

export type NowChannel = "Blogs" | "Press" | "Changelog";

export type NowTab = "All" | NowChannel;

export const NOW_TABS: NowTab[] = ["All", "Blogs", "Press", "Changelog"];

export type NowKind = "blog" | "changelog" | "press";

export interface NowItem {
  slug: string;
  kind: NowKind;
  channel: NowChannel;
  title: string;
  excerpt: string;
  /** Local cover asset. Empty when the entry has no thumbnail. */
  image: string;
  /** Display author/source, e.g. "Shivang Kandoi" or "LinkedIn" */
  author: string;
  /** Display date, e.g. "Aug 26, 2026" */
  date: string;
  timestamp: number;
  /** Internal (/now/…) or external (https://…) link */
  href: string;
  external?: boolean;
  /** Small mono eyebrow, e.g. release version ("v2.4.0") or platform ("YouTube") */
  badge?: string;
  /** Render a video play overlay on the cover */
  isVideo?: boolean;
  /** CMS "Featured" flag (press) */
  featured?: boolean;
  /** Raw CMS platform key for press ("linkedin" | "x" | "youtube" | …) */
  platform?: string;
}

const PRESS_THUMBNAIL_BASE = '/images/cms/press/';

/**
 * Keystatic stores image fields as bare filenames inside their directory.
 * Resolve to a usable src: remote and absolute values pass through.
 */
function resolvePressThumbnail(value: string | null | undefined): string {
  if (!value) return '';
  if (/^https?:\/\//.test(value) || value.startsWith('/')) return value;
  return `${PRESS_THUMBNAIL_BASE}${value}`;
}

function formatDate(input: string | null | undefined): { date: string; timestamp: number } {
  if (!input) return { date: "", timestamp: 0 };
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return { date: "", timestamp: 0 };
  return {
    date: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }),
    timestamp: d.getTime(),
  };
}

/**
 * Press entries are stored under slug titles (e.g. "keilhq-featured-in-…").
 * Presentation-only title-casing for display; the CMS value is untouched.
 */
export function humanizeSlugTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const getNowFeed = cache(async (): Promise<NowItem[]> => {
  const [posts, changelogs, press] = await Promise.all([
    getBlogPosts(),
    getChangelogs(),
    getPressItems(),
  ]);

  const blogItems: NowItem[] = (posts as any[]).map((post) => {
    const { date, timestamp } = formatDate(post.entry?.publishedDate);
    return {
      slug: post.slug,
      kind: "blog",
      channel: "Blogs",
      title: post.entry?.title || post.slug,
      excerpt: post.entry?.excerpt || "",
      image: post.entry?.coverImage || "",
      author: post.entry?.author || "KeilHQ Team",
      date,
      timestamp,
      href: `/now/${post.slug}`,
    };
  });

  const changelogItems: NowItem[] = (changelogs as any[]).map((entry) => ({
    slug: entry.slug,
    kind: "changelog",
    channel: "Changelog",
    title: entry.title,
    excerpt: entry.summaryText || "",
    image: entry.mockup || "",
    author: entry.version || "Release",
    date: entry.date || entry.dateStr || "",
    timestamp: entry.timestamp || 0,
    href: `/now/${entry.slug}`,
    badge: entry.version || undefined,
  }));

  // Display precedence per entry: explicit CMS headline first, then the
  // link's fetched title/thumbnail, then CMS thumbnail/excerpt fallbacks.
  // Entries without any URL are skipped — an empty href breaks anchors.
  const pressItems: NowItem[] = (press as any[])
    .filter((item) => typeof item.entry?.url === "string" && item.entry.url.length > 0)
    .map((item) => {
    const { date, timestamp } = formatDate(item.entry?.publishedDate);
    const platform: string = item.entry?.platform || "news";
    const unfurled = (item as { unfurled?: { title?: string; image?: string; description?: string } }).unfurled;
    return {
      slug: item.slug,
      kind: "press",
      channel: "Press",
      title:
        item.entry?.headline ||
        unfurled?.title ||
        humanizeSlugTitle(item.entry?.title || item.slug),
      excerpt: item.entry?.excerpt || unfurled?.description || "",
      image: resolvePressThumbnail(item.entry?.thumbnail) || unfurled?.image || "",
      author: PLATFORM_LABELS[platform] || platform,
      date,
      timestamp,
      href: item.entry.url,
      external: true,
      badge: PLATFORM_LABELS[platform] || platform,
      isVideo: platform === "youtube",
      featured: item.entry?.featured || false,
      platform,
    };
  });

  return [...blogItems, ...changelogItems, ...pressItems].sort((a, b) => b.timestamp - a.timestamp);
});
