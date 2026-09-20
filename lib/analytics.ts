import posthog from "posthog-js";

export interface CtaClickProperties {
  label?: string;
  location: string;
  href?: string;
  [key: string]: any;
}

/**
 * Capture a custom event in PostHog safely.
 * Gracefully handles SSR, ad-blockers, and uninitialized states.
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window === "undefined") return;

  try {
    if (posthog && typeof posthog.capture === "function") {
      posthog.capture(eventName, properties);
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Analytics] Failed to track event "${eventName}":`, error);
    }
  }
}

/**
 * Specifically track clicks on primary "Start Free" / Waitlist CTAs.
 * Used for conversion funnel analytics in PostHog.
 */
export function trackStartFreeClick(props: CtaClickProperties) {
  trackEvent("start_free_clicked", {
    cta_label: props.label || "Start Free",
    cta_location: props.location,
    cta_href: props.href,
    path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...props,
  });
}

/**
 * Track secondary CTA clicks (e.g., "Book a demo", "Talk to sales", pricing tiers).
 */
export function trackCtaClick(props: CtaClickProperties) {
  trackEvent("cta_clicked", {
    cta_label: props.label,
    cta_location: props.location,
    cta_href: props.href,
    path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...props,
  });
}
