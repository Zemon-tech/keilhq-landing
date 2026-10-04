import { MetadataRoute } from "next";
import { getManualFeatures, getManualFeature, FEATURE_FALLBACK_IMAGES } from "@/lib/features";
import { getBlogPosts } from "@/cms/helpers/blog";
import { getChangelogs } from "@/cms/helpers/changelog";
import { HOMEPAGE } from "@/lib/site-content";

/* ─── Sitemap ───────────────────────────────────────────────────────────────
   Runs on every build, so CMS content (blog, changelog) is picked up
   automatically. Image entries feed Google Image indexing for brand
   searches — only first-party KeilHQ imagery is listed. */

const baseUrl = "https://keilhq.in";
const abs = (path: string) => `${baseUrl}${path}`;

function localImages(paths: (string | undefined | null)[]): string[] {
  const seen = new Set<string>();
  for (const p of paths) {
    if (typeof p === "string" && p.startsWith("/")) seen.add(abs(p));
  }
  return [...seen];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Static pages ──
  const homeImages = localImages([
    HOMEPAGE.heroLightImage,
    HOMEPAGE.heroDarkImage,
    ...HOMEPAGE.featureSections.flatMap((s) => [s.lightImage, s.darkImage]),
  ]);

  const brandImages = localImages([
    "/brand/keilhq-rise.png",
    "/brand/keilhq-billboard.png",
    "/brand/keilhq-ad-1.png",
    "/brand/keilhq-enterprise.png",
  ]);

  const staticRoutes: { route: string; priority: number; freq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; images?: string[] }[] = [
    { route: "",            priority: 1.0, freq: "daily",   images: homeImages },
    { route: "/pricing",    priority: 0.9, freq: "weekly" },
    { route: "/features",   priority: 0.9, freq: "weekly" },   // features index — key landing page
    { route: "/about",      priority: 0.8, freq: "monthly" },
    { route: "/now",        priority: 0.8, freq: "daily" },
    { route: "/support",    priority: 0.8, freq: "weekly" },
    { route: "/brand",      priority: 0.6, freq: "monthly",  images: brandImages },
    { route: "/privacy",    priority: 0.4, freq: "yearly" },
    { route: "/terms",      priority: 0.4, freq: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ route, priority, freq, images }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
    ...(images?.length ? { images } : {}),
  }));

  // ── Feature pages (manual content — updates on every build) ──
  const features = getManualFeatures();
  const featureEntries: MetadataRoute.Sitemap = features.map(({ slug }) => {
    const feature = getManualFeature(slug) as any;
    const fallback = FEATURE_FALLBACK_IMAGES[slug];
    return {
      url: `${baseUrl}/features/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,   // core product pages — higher than generic static pages
      images: localImages([
        feature?.lightImage || fallback?.light,
        feature?.darkImage || fallback?.dark,
      ]),
    };
  });

  // ── Blog posts (Keystatic — regenerates on build) ──
  const blogPosts = await getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/now/${post.slug}`,
    lastModified: post.entry.publishedDate ? new Date(post.entry.publishedDate) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
    ...(post.entry.coverImage
      ? { images: localImages([post.entry.coverImage]) }
      : {}),
  }));

  // ── Changelog entries (Keystatic — regenerates on build) ──
  const changelogs = await getChangelogs();
  const changelogEntries: MetadataRoute.Sitemap = changelogs.map((entry: any) => ({
    url: `${baseUrl}/now/${entry.slug}`,
    lastModified: entry.timestamp ? new Date(entry.timestamp) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...featureEntries, ...blogEntries, ...changelogEntries];
}
