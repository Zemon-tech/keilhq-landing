"use client";

import React from "react";

// ─── Reusable brand logo system ──────────────────────────────────────────────
// Renders a recognizable third-party product logo from an existing high-quality
// asset in /public. Used for mental-model / familiarity sections.
//
// IMPORTANT: showing a brand here communicates familiarity only. It does not
// imply an integration, partnership, or endorsement. Integration status is
// expressed separately (see the `integrated` catalog + copy that uses it).

export type BrandKey =
  | "notion"
  | "linear"
  | "slack"
  | "jira"
  | "github"
  | "google"
  | "gmail"
  | "gmeet"
  | "gdocs";

interface BrandMeta {
  /** Human-readable name used for the accessible label. */
  label: string;
  /** Path to a logo asset in /public, or null when no asset exists. */
  src: string;
  /** Does KeilHQ actually integrate with this product today? */
  integrated: boolean;
}

// Only reference assets that genuinely exist in /public/integrations.
const BRANDS: Record<BrandKey, BrandMeta> = {
  notion: { label: "Notion", src: "/integrations/notion.png", integrated: true },
  github: { label: "GitHub", src: "/integrations/github.png", integrated: true },
  google: { label: "Google Drive", src: "/integrations/gdrive.png", integrated: true },
  linear: { label: "Linear", src: "/integrations/linear.jpeg", integrated: false },
  slack: { label: "Slack", src: "/integrations/slack.png", integrated: false },
  jira: { label: "Jira", src: "/integrations/atlassianjira.png", integrated: false },
  gmail: { label: "Gmail", src: "/integrations/gmail.png", integrated: true },
  gmeet: { label: "Google Meet", src: "/integrations/gmeet.png", integrated: true },
  gdocs: { label: "Google Docs", src: "/integrations/gdocs.png", integrated: true },
};

const subscribeNoop = () => () => {};

export function brandMeta(brand: BrandKey): BrandMeta {
  return BRANDS[brand] ?? { label: String(brand), src: "", integrated: false };
}

const SIZE_PX: Record<NonNullable<BrandLogoProps["size"]>, number> = {
  sm: 20,
  md: 24,
  lg: 32,
};

export interface BrandLogoProps {
  brand: BrandKey;
  /** Icon size. Defaults to md (24px). */
  size?: "sm" | "md" | "lg";
  /** Render the product name alongside the mark. */
  showLabel?: boolean;
  /** Desaturate the mark to sit quietly in a monochrome layout. */
  monochrome?: boolean;
  /** Override the accessible alt text. Defaults to the brand name. */
  alt?: string;
  className?: string;
}

export function BrandLogo({
  brand,
  size = "md",
  showLabel = false,
  monochrome = true,
  alt,
  className = "",
}: BrandLogoProps) {
  const meta = brandMeta(brand);
  const [errored, setErrored] = React.useState(false);
  // An <img> can fire `error` before React hydrates (e.g. a cold dev compile).
  // Honoring that during hydration would render the text fallback where the
  // server sent an <img> and cause a hydration mismatch, so only swap to the
  // fallback once hydration has finished.
  const hydrated = React.useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
  const px = SIZE_PX[size];
  const accessibleName = alt ?? meta.label;

  const mark =
    meta.src && !(errored && hydrated) ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={meta.src}
        alt={showLabel ? "" : accessibleName}
        width={px}
        height={px}
        loading="lazy"
        onError={() => setErrored(true)}
        style={{ width: px, height: px }}
        className={`object-contain shrink-0 ${
          monochrome
            ? "grayscale opacity-70 dark:opacity-55 transition-opacity duration-200 group-hover:opacity-100"
            : ""
        }`.trim()}
      />
    ) : (
      // Text fallback — keeps the brand recognizable with no asset / on error.
      <span
        aria-hidden={showLabel ? "true" : undefined}
        style={{ width: px, height: px }}
        className="inline-flex items-center justify-center shrink-0 rounded-sm border border-border bg-card text-[9px] font-display font-semibold uppercase tracking-tight text-muted-foreground"
      >
        {meta.label.slice(0, 2)}
      </span>
    );

  if (!showLabel) return <span className={`group inline-flex ${className}`}>{mark}</span>;

  return (
    <span className={`group inline-flex items-center gap-2 ${className}`}>
      {mark}
      <span className="font-display text-sm font-medium text-foreground">{meta.label}</span>
    </span>
  );
}
