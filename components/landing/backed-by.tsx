"use client";

import React from "react";

// ─── Custom Minimalist Wireframes ────────────────────────────────────────────
const FigBuiltForPurpose = () => (
  <svg viewBox="0 0 160 120" className="w-full h-24 stroke-border fill-none" strokeWidth="1">
    {/* Ellipse 1 - Bottom */}
    <ellipse cx="80" cy="90" rx="30" ry="12" />
    <path d="M50 90v-15M110 90v-15" />
    
    {/* Ellipse 2 - Middle */}
    <ellipse cx="80" cy="75" rx="30" ry="12" className="stroke-muted-foreground/30" />
    <path d="M50 75v-15M110 75v-15" />
    
    {/* Ellipse 3 - Top */}
    <ellipse cx="80" cy="60" rx="30" ry="12" className="stroke-muted-foreground/60" />
    <path d="M50 60v-15M110 60v-15" />

    {/* Highlight circle on top layer */}
    <circle cx="80" cy="60" r="10" className="stroke-muted-foreground" strokeWidth="1.5" />
  </svg>
);

const FigPoweredByAIAgents = () => (
  <svg viewBox="0 0 160 120" className="w-full h-24 stroke-border fill-none" strokeWidth="1">
    {/* Left box */}
    <path d="M50 50l15-7v20l-15 7zM65 43l15 7v20l-15-7zM50 50l15 7M65 43M50 70" />
    
    {/* Right box */}
    <path d="M95 70l15-7v20l-15 7zM110 63l15 7v20l-15-7z" className="stroke-muted-foreground/30" />
    
    {/* Top box */}
    <path d="M75 35l15-7v20l-15 7zM90 28l15 7v20L90 55z" className="stroke-muted-foreground/60" />
    
    {/* Central connection lines */}
    <path d="M65 53l30 17M82 48l15 22" strokeDasharray="3" className="stroke-muted-foreground/60" />
    
    {/* Central node */}
    <circle cx="82" cy="58" r="3" className="fill-muted-foreground stroke-none" />
  </svg>
);

const FigDesignedForSpeed = () => (
  <svg viewBox="0 0 160 120" className="w-full h-24 stroke-border fill-none" strokeWidth="1">
    {/* Step 1 */}
    <path d="M40 85h15M55 85v-10" />
    {/* Step 2 */}
    <path d="M55 75h20M75 75v-15" className="stroke-muted-foreground/30" />
    {/* Step 3 */}
    <path d="M75 60h25M100 60v-20" className="stroke-muted-foreground/60" strokeWidth="1.2" />
    {/* Step 4 */}
    <path d="M100 40h20" className="stroke-muted-foreground" strokeWidth="1.5" />
    
    {/* Grid baseline */}
    <path d="M30 95h100" strokeDasharray="2" />
  </svg>
);

const defaultPartners = [
  { name: "AIC GGSIPU", logo: null },
  { name: "QENO AI", logo: null },
  { name: "SARVAM AI", logo: null },
  { name: "GITHUB", logo: null },
  { name: "GOOGLE WORKSPACE", logo: null },
  { name: "NOTION", logo: null },
  { name: "POSTHOG", logo: null },
  { name: "GRAFANA", logo: null },
];

function PartnerCard({ name, logo }: { name: string; logo?: string | null }) {
  return (
    <div className="flex items-center justify-center h-11 px-5 rounded-sm bg-card border border-border shrink-0 shadow-sm hover:border-muted-foreground/30 transition-colors">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-5 w-auto object-contain opacity-70 grayscale dark:opacity-50 filter brightness-95 dark:brightness-100"
        />
      ) : (
        <span className="text-[12px] font-semibold tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors font-sans whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
}

function PartnersMarqueeRow({ partners, speed = "45s" }: { partners: readonly { readonly name: string; readonly logo?: string | null }[]; speed?: string }) {
  const repeated = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="w-full flex select-none pointer-events-none overflow-hidden relative h-11 flex-row flex-nowrap">
      <div
        className="flex shrink-0 items-center gap-6 min-w-full justify-start animate-marquee-right"
        style={{ animationDuration: speed }}
      >
        {repeated.map((p, idx) => (
          <PartnerCard key={`partner-a-${idx}`} name={p.name} logo={p.logo} />
        ))}
      </div>
      <div
        className="flex shrink-0 items-center gap-6 min-w-full justify-start animate-marquee-right"
        style={{ animationDuration: speed }}
        aria-hidden="true"
      >
        {repeated.map((p, idx) => (
          <PartnerCard key={`partner-b-${idx}`} name={p.name} logo={p.logo} />
        ))}
      </div>
    </div>
  );
}

interface BackedByProps {
  logoCloud?: readonly {
    readonly name: string;
    readonly logo: string | null;
  }[];
}

export function BackedBy({ logoCloud }: BackedByProps) {
  const partnersToDisplay = (logoCloud && logoCloud.length > 0) ? logoCloud : defaultPartners;

  return (
    <section className="w-full bg-background flex flex-col items-center justify-center py-16 lg:py-20 xl:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-24">
        
        {/* ── Working with Section (Marquee on Left flowing into Heading on Right) ── */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 transition-colors duration-300">
          {/* Left Column: Flowing Marquee (Left-to-Right into the heading) */}
          <div className="order-2 lg:order-1 flex-1 min-w-0 w-full relative overflow-hidden py-2">
            {/* Left fade mask */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
            {/* Right fade mask (blending into the heading) */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/95 to-transparent z-10 pointer-events-none" />

            <PartnersMarqueeRow partners={partnersToDisplay} speed="45s" />
          </div>

          {/* Right Column: Heading */}
          <div className="order-1 lg:order-2 w-full lg:max-w-[400px] shrink-0 text-left select-text pl-0 lg:pl-2">
            <h2 className="font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-medium leading-[1.15] text-foreground tracking-tight text-balance">
              Working with leading teams and AI pioneers.
            </h2>
          </div>
        </div>

        {/* ── Operational Moat Header (Two-column layout matching reference) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 w-full text-left items-start">
          {/* Left Column: Headline */}
          <div className="col-span-12 lg:col-span-6 flex flex-col">
            <h2 
              className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight leading-[1.1] text-foreground text-balance"
            >
              The operational layer built for modern companies
            </h2>
          </div>

          {/* Right Column: Description in front of heading */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 lg:pt-[5px]">
            <p className="text-[17px] lg:text-[18px] font-normal text-muted-foreground leading-[1.55] max-w-[48ch]">
              Most businesses waste 40% of their day switching between 15 disconnected tabs, chasing lost notes, and re-explaining context. KeilHQ unifies your operational core so your team actually executes.
            </p>
          </div>
        </div>

        {/* ── 3-Column Figures Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-6 border border-border bg-card hover:bg-muted/30 rounded-md shadow-sm transition-all duration-300">
            <div className="text-[10px] font-mono tracking-widest text-muted-foreground/80">FIG 0.1</div>
            <div className="w-full flex items-center justify-center py-4 bg-muted/40 rounded-sm">
              <FigBuiltForPurpose />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-sm font-semibold tracking-tight text-foreground font-display">
                Operational Context Engine
              </h3>
              <p className="text-[13px] font-normal text-muted-foreground leading-relaxed">
                Continuously synthesizes tasks, documents, client history, and meeting transcripts into unified organizational memory.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-6 border border-border bg-card hover:bg-muted/30 rounded-md shadow-sm transition-all duration-300">
            <div className="text-[10px] font-mono tracking-widest text-muted-foreground/80">FIG 0.2</div>
            <div className="w-full flex items-center justify-center py-4 bg-muted/40 rounded-sm">
              <FigPoweredByAIAgents />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-sm font-semibold tracking-tight text-foreground font-display">
                Agentic Execution & Co-workers
              </h3>
              <p className="text-[13px] font-normal text-muted-foreground leading-relaxed">
                Role-specific AI agents (CEO, CTO, CFO) that coordinate workflows, draft actions, and surface blocked projects.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 p-6 border border-border bg-card hover:bg-muted/30 rounded-md shadow-sm transition-all duration-300">
            <div className="text-[10px] font-mono tracking-widest text-muted-foreground/80">FIG 0.3</div>
            <div className="w-full flex items-center justify-center py-4 bg-muted/40 rounded-sm">
              <FigDesignedForSpeed />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-sm font-semibold tracking-tight text-foreground font-display">
                Zero-Friction Handoffs
              </h3>
              <p className="text-[13px] font-normal text-muted-foreground leading-relaxed">
                Deals auto-trigger client onboarding in &lt;24 hours. Finished milestones flow straight into ready-to-send invoices.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
