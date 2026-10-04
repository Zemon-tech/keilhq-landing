import { MetadataRoute } from "next";

/* ─── robots.txt ─────────────────────────────────────────────────────────────
   General crawlers: allow all public pages, block internal/CMS routes.
   AI crawlers: explicitly listed so content is eligible for AEO citations
   in ChatGPT, Claude, Perplexity, Gemini, Copilot, and others.

   Docs: https://developers.google.com/search/docs/crawling-indexing/robots/intro
   AEO reference: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide */

export default function robots(): MetadataRoute.Robots {
  const disallowedPaths = ["/api/", "/_next/", "/admin/", "/keystatic/"];

  return {
    rules: [
      // ── Standard web crawlers ──────────────────────────────────────────
      { userAgent: "*", allow: "/", disallow: disallowedPaths },

      // ── Google ────────────────────────────────────────────────────────
      // Google-Extended covers Gemini, AI Overviews, and Vertex AI training
      { userAgent: "Googlebot", allow: "/", disallow: disallowedPaths },
      { userAgent: "Googlebot-Image", allow: "/", disallow: disallowedPaths },
      { userAgent: "Google-Extended", allow: "/", disallow: disallowedPaths },
      // Google's AI search crawler for SGE / AI Overviews
      { userAgent: "GoogleOther", allow: "/", disallow: disallowedPaths },

      // ── OpenAI ────────────────────────────────────────────────────────
      // GPTBot — ChatGPT training and Browse
      { userAgent: "GPTBot", allow: "/", disallow: disallowedPaths },
      // OAI-SearchBot — ChatGPT live web search (separate from GPTBot)
      { userAgent: "OAI-SearchBot", allow: "/", disallow: disallowedPaths },
      // ChatGPT-User — when ChatGPT itself browses during a conversation
      { userAgent: "ChatGPT-User", allow: "/", disallow: disallowedPaths },

      // ── Anthropic ─────────────────────────────────────────────────────
      // ClaudeBot — Claude's web search
      { userAgent: "ClaudeBot", allow: "/", disallow: disallowedPaths },
      // anthropic-ai — Anthropic training crawler
      { userAgent: "anthropic-ai", allow: "/", disallow: disallowedPaths },

      // ── Perplexity ────────────────────────────────────────────────────
      { userAgent: "PerplexityBot", allow: "/", disallow: disallowedPaths },

      // ── Microsoft / Bing ──────────────────────────────────────────────
      // Bingbot — Bing Search + Copilot answers
      { userAgent: "Bingbot", allow: "/", disallow: disallowedPaths },

      // ── Meta ──────────────────────────────────────────────────────────
      // FacebookBot — Meta AI search and social crawling
      { userAgent: "FacebookBot", allow: "/", disallow: disallowedPaths },

      // ── Apple ─────────────────────────────────────────────────────────
      // Applebot — Siri, Spotlight, Apple Intelligence
      { userAgent: "Applebot", allow: "/", disallow: disallowedPaths },
      { userAgent: "Applebot-Extended", allow: "/", disallow: disallowedPaths },

      // ── Cohere ────────────────────────────────────────────────────────
      { userAgent: "cohere-ai", allow: "/", disallow: disallowedPaths },

      // ── Amazon ────────────────────────────────────────────────────────
      // Amazonbot — Alexa AI and Amazon search features
      { userAgent: "Amazonbot", allow: "/", disallow: disallowedPaths },

      // ── DuckDuckGo ────────────────────────────────────────────────────
      // DuckAssistBot — DuckDuckGo AI answers
      { userAgent: "DuckAssistBot", allow: "/", disallow: disallowedPaths },

      // ── You.com ───────────────────────────────────────────────────────
      { userAgent: "YouBot", allow: "/", disallow: disallowedPaths },

      // ── Common Crawl ──────────────────────────────────────────────────
      // CCBot — powers many AI training datasets
      { userAgent: "CCBot", allow: "/", disallow: disallowedPaths },

      // ── Diffbot ───────────────────────────────────────────────────────
      // Powers knowledge graph extraction for many AI systems
      { userAgent: "Diffbot", allow: "/", disallow: disallowedPaths },
    ],
    sitemap: "https://keilhq.in/sitemap.xml",
    host: "https://keilhq.in",
  };
}
