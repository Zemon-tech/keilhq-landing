"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

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
    if (!POSTHOG_KEY) return;

    // Ensure PostHog is initialized once
    if (!posthog.__loaded) {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        // Minimum resource & credit consumption:
        person_profiles: "identified_only", // Treats marketing visitors as lightweight anonymous events
        autocapture: false, // Disables noisy DOM click & input capture
        disable_session_recording:
          process.env.NEXT_PUBLIC_POSTHOG_ENABLE_RECORDING !== "true", // Disables recording to save credits
        capture_pageleave: false, // Disables exit events
        capture_performance: false, // Disables Web Vitals overhead
        capture_pageview: false, // Handled by PostHogPageView on route changes
        cross_subdomain_cookie: true, // Scopes cookie to .keilhq.in for app.keilhq.in attribution
        persistence: "localStorage+cookie",
        respect_dnt: true,
        loaded: (ph) => {
          // Clear any stale opt-out flag from earlier tests
          if (ph.has_opted_out_capturing()) {
            ph.opt_in_capturing();
          }
          // Enable debug logging in development so you see every event in console
          if (process.env.NODE_ENV === "development") {
            ph.debug();
          }
          if (typeof window !== "undefined") {
            (window as any).posthog = ph;
          }
        },
      });
    }

    // Expose posthog to window for easy browser console verification
    if (typeof window !== "undefined") {
      (window as any).posthog = posthog;
    }
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
