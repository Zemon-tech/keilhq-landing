import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost:3000"],
  async redirects() {
    return [
      { source: "/blog", destination: "/now", permanent: true },
      { source: "/blog/:slug", destination: "/now/:slug", permanent: true },
      { source: "/changelog", destination: "/now", permanent: true },
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
