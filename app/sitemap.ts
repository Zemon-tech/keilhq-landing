import { MetadataRoute } from "next";
import { getManualFeatures } from "@/lib/features";
import { getBlogPosts } from "@/cms/helpers/blog";
import { getChangelogs } from "@/cms/helpers/changelog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://keilhq.in";

  const staticRoutes = [
    "",
    "/home",
    "/pricing",
    "/about",
    "/now",
    "/faq",
    "/support",
    "/privacy",
    "/terms",
    "/brand",
    "/demo",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/now" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" ? 0.9 : 0.8,
  }));

  const features = getManualFeatures();
  const featureEntries: MetadataRoute.Sitemap = features.map(({ slug }) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPosts = await getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/now/${post.slug}`,
    lastModified: post.entry.publishedDate ? new Date(post.entry.publishedDate) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const changelogs = await getChangelogs();
  const changelogEntries: MetadataRoute.Sitemap = changelogs.map((entry: any) => ({
    url: `${baseUrl}/now/${entry.slug}`,
    lastModified: entry.timestamp ? new Date(entry.timestamp) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...featureEntries, ...blogEntries, ...changelogEntries];
}
