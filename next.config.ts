import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost:3000"],

  async redirects() {
    return [
      { source: "/blog", destination: "/now", permanent: true },
      { source: "/blog/:slug", destination: "/now/:slug", permanent: true },
      { source: "/changelog", destination: "/now", permanent: true },
      { source: "/faq", destination: "/support", permanent: true },
      { source: "/demo", destination: "/support", permanent: true },
    ];
  },

  /* ── HTTP headers ──────────────────────────────────────────────────────
     Security headers improve Google's trust signals and protect crawlers.
     Docs: https://developers.google.com/search/docs/crawling-indexing/url-structure
     Cache-Control for static assets ensures CDN efficiency. */
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing — Google bot respects this
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking — also improves Core Web Vitals trust
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Legacy XSS protection for older crawlers
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Controls referrer info passed to external links
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict browser feature access — reduces attack surface
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        // Long-term caching for hashed Next.js static chunks — immutable
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Brand and public images — cache for 7 days, revalidate
        source: "/(brand|images|integrations|mockups)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
