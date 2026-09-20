"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
const IS_DEV = process.env.NODE_ENV === "development";
const DEV_ENABLED = process.env.NEXT_PUBLIC_POSTHOG_DEV_ENABLED === "true";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    // Do not track CMS or internal admin panel paths
    if (pathname.startsWith("/keystatic") || pathname.startsWith("/admin")) {
      return;
    }

    if (POSTHOG_KEY) {
      let url = window.origin + pathname;
      const search = searchParams?.toString();
      if (search) {
        url += `?${search}`;
      }

      // Single, clean $pageview event per route transition
      posthog.capture("$pageview", {
        $current_url: url,
        path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) {
      if (IS_DEV) {
        console.info(
          "[PostHog] NEXT_PUBLIC_POSTHOG_KEY is not set. Analytics are inactive."
        );
      }
      return;
    }

    // Initialize PostHog with strict resource and credit-saving configurations
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      // Minimal resource configuration:
      // 1. Disable full DOM autocapture to prevent high event volume & preserve credits
      autocapture: false,
      // 2. Disable session replay on marketing site to conserve session recording credits
      disable_session_recording:
        process.env.NEXT_PUBLIC_POSTHOG_ENABLE_RECORDING !== "true",
      // 3. Disable pageleave to avoid doubling page tracking events
      capture_pageleave: false,
      // 4. Disable performance autocapture (Web Vitals) to avoid extra event overhead
      capture_performance: false,
      // 5. Manage pageviews manually via PostHogPageView for accurate App Router navigation
      capture_pageview: false,
      // 6. Share identity across subdomains (.keilhq.in) so marketing visitors
      //    seamlessly link to their signed-in account on app.keilhq.in
      cross_subdomain_cookie: true,
      persistence: "localStorage+cookie",
      // 7. Respect browser Do Not Track preferences
      respect_dnt: true,
      loaded: (ph) => {
        // Prevent burning startup credits or polluting analytics during local development
        if (IS_DEV && !DEV_ENABLED) {
          ph.opt_out_capturing();
          console.info(
            "[PostHog] Initialized in dev mode with capturing paused to preserve startup credits. (Set NEXT_PUBLIC_POSTHOG_DEV_ENABLED=true to test live ingestion)."
          );
        }
      },
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
