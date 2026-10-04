import { MetadataRoute } from "next";

/* ─── robots.txt ─────────────────────────────────────────────────────────────
   General crawlers: allow all public pages, block internal/CMS routes.
   AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.): explicit allow so
   content is eligible for AEO citations in ChatGPT, Claude, Perplexity, etc.
   These bots respect robots.txt and will skip the site if not listed. */

export default function robots(): MetadataRoute.Robots {
  const disallowedPaths = ["/api/", "/_next/", "/admin/", "/keystatic/"];

  return {
    rules: [
      // Standard web crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
      // OpenAI GPTBot — powers ChatGPT Browse and training data
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      // Anthropic ClaudeBot — powers Claude's web search
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      // Perplexity — AI answer engine
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      // Google Gemini / AI Overviews
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: disallowedPaths,
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      // Apple Applebot (Siri, Spotlight)
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: disallowedPaths,
      },
      // Bing / Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: "https://keilhq.in/sitemap.xml",
    host: "https://keilhq.in",
  };
}
