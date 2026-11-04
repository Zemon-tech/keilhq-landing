"use client";

import React from "react";
import { BrandLogo, brandMeta, type BrandKey } from "@/components/brand-logo";

// Familiar products visitors already understand, used as mental models.
// Order mixes the categories KeilHQ brings together (docs, product work,
// chat, CRM, engineering).
const FAMILIAR_BRANDS: BrandKey[] = [
  "notion",
  "linear",
  "slack",
  "hubspot",
  "jira",
  "google",
  "github",
  "microsoft",
];

// Which of the above KeilHQ actually connects to today — drives the honest
// footnote so a logo never implies an integration that doesn't exist.
const CONNECTED = FAMILIAR_BRANDS.filter((b) => brandMeta(b).integrated).map(
  (b) => brandMeta(b).label
);

function BrandCell({ brand }: { brand: BrandKey }) {
  return (
    <div className="flex items-center justify-center size-11 rounded-sm bg-card border border-border p-2 shrink-0 shadow-sm hover:border-muted-foreground/30 transition-colors">
      <BrandLogo brand={brand} size="md" monochrome />
    </div>
  );
}

interface MarqueeRowProps {
  brands: BrandKey[];
  speed?: string;
}

function MarqueeRow({ brands, speed = "85s" }: MarqueeRowProps) {
  const repeated = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="w-full flex select-none pointer-events-none overflow-hidden relative h-11 flex-row flex-nowrap">
      <div
        className="flex shrink-0 items-center gap-6 min-w-full justify-start pr-6 animate-marquee-left motion-reduce:animate-none"
        style={{ animationDuration: speed }}
      >
        {repeated.map((brand, idx) => (
          <BrandCell key={`row-a-${idx}`} brand={brand} />
        ))}
      </div>
      <div
        className="flex shrink-0 items-center gap-6 min-w-full justify-start pr-6 animate-marquee-left motion-reduce:animate-none"
        style={{ animationDuration: speed }}
        aria-hidden="true"
      >
        {repeated.map((brand, idx) => (
          <BrandCell key={`row-b-${idx}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationCloud() {
  return (
    <section className="relative w-full bg-background overflow-hidden flex items-center justify-center py-16 lg:py-20 xl:py-24">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="w-full relative overflow-hidden flex flex-col transition-colors duration-300">

          {/* Header: familiar-tools framing (mental model, not a logo wall) */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full mb-10 relative z-20">
            <div className="max-w-xl text-left select-text pl-0 sm:pl-2">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.1] text-foreground tracking-tight text-balance">
                Already using Notion, Linear, Slack or a CRM?
              </h2>
            </div>

            {/* KeilHQ mark, theme-aware */}
            <div className="shrink-0 sm:ml-6 flex items-center sm:justify-center sm:mr-2">
              <div className="relative flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/keilhq.svg"
                  alt="KeilHQ"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain block dark:hidden"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/keilhq-white.svg"
                  alt="KeilHQ"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain hidden dark:block"
                />
              </div>
            </div>
          </div>

          {/* Marquee of familiar product marks */}
          <div className="relative w-full overflow-hidden py-2 z-20 mt-2">
            <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
            <MarqueeRow brands={FAMILIAR_BRANDS} speed="85s" />
          </div>

          {/* Full-width disclaimer: logos = familiarity, not endorsement.
              Only genuinely available connections are named as integrations. */}
          <p className="mt-8 pt-6 border-t border-border w-full text-left text-[12px] text-muted-foreground/80 leading-relaxed">
            Shown to describe the kinds of tools KeilHQ replaces or works
            alongside. Logos are trademarks of their owners and don&rsquo;t imply
            partnership or endorsement. KeilHQ connects today with{" "}
            {CONNECTED.join(", ")}, with more on the way.
          </p>
        </div>
      </div>
    </section>
  );
}
