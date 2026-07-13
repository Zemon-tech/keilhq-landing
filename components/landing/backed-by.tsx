"use client";

import React from "react";

// ─── Custom SVG Logos ────────────────────────────────────────────────────────
const VercelLogo = () => (
  <svg viewBox="0 0 24 24" className="h-[14px] fill-current text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors" aria-label="Vercel">
    <path d="M24 22.525H0L12 1.475L24 22.525Z" />
  </svg>
);

const CursorLogo = () => (
  <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors select-none">
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
      <path d="M5.5 2v15.5l4.5-4.5 4 8 2.5-1-4-8 6.5-.5z" />
    </svg>
    <span className="text-[11px] font-bold tracking-widest uppercase">Cursor</span>
  </div>
);

const OscarLogo = () => (
  <div className="flex items-center text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors select-none">
    <span className="text-[13px] font-semibold tracking-[0.25em] font-sans">OSCAR</span>
  </div>
);

const OpenAILogo = () => (
  <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors select-none">
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5L7 19M19 12H5M17 19L7 5" />
      <circle cx="12" cy="12" r="7" />
    </svg>
    <span className="text-[11px] font-semibold tracking-wider font-sans">OpenAI</span>
  </div>
);

const CoinbaseLogo = () => (
  <div className="flex items-center text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors select-none">
    <span className="text-[14px] font-bold tracking-tight lowercase">coinbase</span>
  </div>
);

const CashAppLogo = () => (
  <div className="flex items-center gap-1 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors select-none">
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
    <span className="text-[11px] font-semibold tracking-wider font-sans">Cash App</span>
  </div>
);

const BoomLogo = () => (
  <div className="flex items-center text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors select-none">
    <span className="text-[13px] font-extrabold tracking-widest font-sans">BOOM</span>
  </div>
);

const RampLogo = () => (
  <div className="flex items-center gap-1 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors select-none">
    <span className="text-[13px] font-semibold tracking-tight lowercase">ramp</span>
    <span className="text-[14px] font-extrabold leading-none text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-[#F7F8F8]">/</span>
  </div>
);

// ─── Custom Minimalist Wireframes ────────────────────────────────────────────
const FigBuiltForPurpose = () => (
  <svg viewBox="0 0 160 120" className="w-full h-24 stroke-zinc-200 dark:stroke-zinc-800/80 fill-none" strokeWidth="1">
    {/* Ellipse 1 - Bottom */}
    <ellipse cx="80" cy="90" rx="30" ry="12" />
    <path d="M50 90v-15M110 90v-15" />
    
    {/* Ellipse 2 - Middle */}
    <ellipse cx="80" cy="75" rx="30" ry="12" className="stroke-zinc-300 dark:stroke-zinc-700" />
    <path d="M50 75v-15M110 75v-15" />
    
    {/* Ellipse 3 - Top */}
    <ellipse cx="80" cy="60" rx="30" ry="12" className="stroke-zinc-400 dark:stroke-zinc-600" />
    <path d="M50 60v-15M110 60v-15" />

    {/* Highlight circle on top layer */}
    <circle cx="80" cy="60" r="10" className="stroke-zinc-500 dark:stroke-zinc-500" strokeWidth="1.5" />
  </svg>
);

const FigPoweredByAIAgents = () => (
  <svg viewBox="0 0 160 120" className="w-full h-24 stroke-zinc-200 dark:stroke-zinc-800/80 fill-none" strokeWidth="1">
    {/* Left box */}
    <path d="M50 50l15-7v20l-15 7zM65 43l15 7v20l-15-7zM50 50l15 7M65 43M50 70" />
    
    {/* Right box */}
    <path d="M95 70l15-7v20l-15 7zM110 63l15 7v20l-15-7z" className="stroke-zinc-300 dark:stroke-zinc-700" />
    
    {/* Top box */}
    <path d="M75 35l15-7v20l-15 7zM90 28l15 7v20L90 55z" className="stroke-zinc-400 dark:stroke-zinc-600" />
    
    {/* Central connection lines */}
    <path d="M65 53l30 17M82 48l15 22" strokeDasharray="3" className="stroke-zinc-400 dark:stroke-zinc-600" />
    
    {/* Central node */}
    <circle cx="82" cy="58" r="3" className="fill-zinc-500 dark:fill-zinc-500 stroke-none" />
  </svg>
);

const FigDesignedForSpeed = () => (
  <svg viewBox="0 0 160 120" className="w-full h-24 stroke-zinc-200 dark:stroke-zinc-800/80 fill-none" strokeWidth="1">
    {/* Step 1 */}
    <path d="M40 85h15M55 85v-10" />
    {/* Step 2 */}
    <path d="M55 75h20M75 75v-15" className="stroke-zinc-300 dark:stroke-zinc-700" />
    {/* Step 3 */}
    <path d="M75 60h25M100 60v-20" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.2" />
    {/* Step 4 */}
    <path d="M100 40h20" className="stroke-zinc-500 dark:stroke-zinc-500" strokeWidth="1.5" />
    
    {/* Grid baseline */}
    <path d="M30 95h100" strokeDasharray="2" />
  </svg>
);

export function BackedBy() {
  return (
    <section className="w-full bg-background flex flex-col items-center justify-center py-20 lg:py-28 xl:py-32">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-24">
        
        {/* ── Partners Row ── */}
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-wrap items-center justify-between gap-x-12 gap-y-6 opacity-75 dark:opacity-60">
            <VercelLogo />
            <CursorLogo />
            <OscarLogo />
            <OpenAILogo />
            <CoinbaseLogo />
            <CashAppLogo />
            <BoomLogo />
            <RampLogo />
          </div>
        </div>

        {/* ── A New Species Header ── */}
        <div className="max-w-[800px] flex flex-col gap-6 text-left">
          <h2 
            className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-zinc-900 dark:text-[#F7F8F8]"
            style={{ textWrap: "balance" }}
          >
            A new species of product tool
          </h2>
          <p className="text-[17px] lg:text-[18px] font-normal text-zinc-500 dark:text-[#8A8F98] leading-[1.55] max-w-[65ch]">
            Purpose-built for modern teams with AI workflows at its core, KeilHQ sets a new standard for planning and building products.
          </p>
        </div>

        {/* ── 3-Column Figures Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-6 rounded-lg border border-zinc-200/50 dark:border-white/[0.06] bg-zinc-50/50 dark:bg-white/[0.01] hover:border-zinc-300 dark:hover:border-white/[0.1] transition-all duration-300">
            <div className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600">FIG 0.2</div>
            <div className="w-full flex items-center justify-center py-4 bg-zinc-100/30 dark:bg-white/[0.01] rounded-sm">
              <FigBuiltForPurpose />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-[#F7F8F8]">
                Built for purpose
              </h3>
              <p className="text-[13px] font-normal text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                KeilHQ is shaped by the practices and principles of world-class product teams.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-6 rounded-lg border border-zinc-200/50 dark:border-white/[0.06] bg-zinc-50/50 dark:bg-white/[0.01] hover:border-zinc-300 dark:hover:border-white/[0.1] transition-all duration-300">
            <div className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600">FIG 0.3</div>
            <div className="w-full flex items-center justify-center py-4 bg-zinc-100/30 dark:bg-white/[0.01] rounded-sm">
              <FigPoweredByAIAgents />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-[#F7F8F8]">
                Powered by AI agents
              </h3>
              <p className="text-[13px] font-normal text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 p-6 rounded-lg border border-zinc-200/50 dark:border-white/[0.06] bg-zinc-50/50 dark:bg-white/[0.01] hover:border-zinc-300 dark:hover:border-white/[0.1] transition-all duration-300">
            <div className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600">FIG 0.4</div>
            <div className="w-full flex items-center justify-center py-4 bg-zinc-100/30 dark:bg-white/[0.01] rounded-sm">
              <FigDesignedForSpeed />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-[#F7F8F8]">
                Designed for speed
              </h3>
              <p className="text-[13px] font-normal text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                Reduces noise and restores momentum to help teams ship with high velocity and focus.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
