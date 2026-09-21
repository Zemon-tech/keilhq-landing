"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
const IS_DEV = process.env.NODE_ENV === "development";
const DEV_ENABLED = process.env.NEXT_PUBLIC_POSTHOG_DEV_ENABLED === "true";

// Initialize PostHog synchronously on the client so it's ready before components mount
if (typeof window !== "undefined" && POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // Minimum resource & credit consumption:
    person_profiles: "identified_only", // Treats marketing visitors as lightweight anonymous events
    autocapture: false, // Disables noisy DOM click & input capture
    disable_session_recording:
      process.env.NEXT_PUBLIC_POSTHOG_ENABLE_RECORDING !== "true", // Disables recording to save credits
    capture_pageleave: false, // Disables exit events
    capture_performance: false, // Disables Web Vitals overhead
    capture_pageview: false, // Handled manually by PostHogPageView below
    cross_subdomain_cookie: true, // Scopes cookie to .keilhq.in for app.keilhq.in attribution
    persistence: "localStorage+cookie",
    respect_dnt: true,
    loaded: (ph) => {
      // Clear any stale opt-out flag from previous sessions so events are sent
      if (ph.has_opted_out_capturing() && (!IS_DEV || DEV_ENABLED)) {
        ph.opt_in_capturing();
      }
      if (IS_DEV && !DEV_ENABLED) {
        ph.opt_out_capturing();
      }
    },
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

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

      // Capture pageview event
      const client = ph || posthog;
      if (client && typeof client.capture === "function") {
        client.capture("$pageview", {
          $current_url: url,
          path: pathname,
        });
      }
    }
  }, [pathname, searchParams, ph]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
