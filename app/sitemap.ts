import { MetadataRoute } from "next";
import { getFeatures } from "@/cms/helpers/features";
import { getBlogPosts } from "@/cms/helpers/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://keilhq.in";

  const staticRoutes = [
    "",
    "/features",
    "/pricing",
    "/enterprise",
    "/about",
    "/changelog",
    "/faq",
    "/support",
    "/privacy",
    "/terms",
    "/brand",
    "/demo",
    "/blog",
    "/team",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/changelog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" || route === "/features" ? 0.9 : 0.8,
  }));

  const features = await getFeatures();
  const featureEntries: MetadataRoute.Sitemap = features.map(({ slug }) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPosts = await getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.entry.publishedDate ? new Date(post.entry.publishedDate) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...featureEntries, ...blogEntries];
}
