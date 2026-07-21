import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://keilhq.com";

  const staticRoutes = [
    "",
    "/features",
    "/pricing",
    "/enterprise",
    "/solutions",
    "/solutions/agencies",
    "/solutions/dev-teams",
    "/solutions/startups",
    "/about",
    "/changelog",
    "/faq",
    "/support",
    "/privacy",
    "/terms",
    "/privacy-security",
    "/brand",
    "/demo",
    "/blog",
    "/team",
  ];

  const featureSlugs = [
    "ai-command-center",
    "smart-dashboard",
    "task-management",
    "docs-notes",
    "calendar-integration",
    "team-chat",
    "meeting-recorder",
    "integrations",
    "notifications",
    "workspace",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/changelog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" || route === "/features" ? 0.9 : 0.8,
  }));

  const featureEntries: MetadataRoute.Sitemap = featureSlugs.map((slug) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...featureEntries];
}
