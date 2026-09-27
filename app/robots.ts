import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/keystatic/"],
      },
    ],
    sitemap: "https://keilhq.in/sitemap.xml",
  };
}
