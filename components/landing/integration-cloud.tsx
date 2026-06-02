"use client";

import React from "react";

// Robust, high-fidelity Brand logo URLs
const combinedLogos = [
  "https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1779162684348", // Github
  "https://cdn.brandfetch.io/idJ_HhtG0Z/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1745381296843", // Slack
  "https://cdn.brandfetch.io/idPYUoikV7/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1714126994748", // Notion
  "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/idMX2_OMSc.svg?c=1bxid64Mup7aczewSAYMX&t=1779346439033", // Google Calendar
  "https://cdn.brandfetch.io/atlassian.com/w/400/h/400/theme/dark/symbol.svg", // Atlassian
  "https://cdn.brandfetch.io/salesforce.com/w/400/h/400/theme/dark/symbol.svg", // Salesforce
  "https://cdn.brandfetch.io/ibm.com/w/400/h/400/theme/dark/symbol.svg", // IBM
  "https://cdn.brandfetch.io/okta.com/w/400/h/400/theme/dark/symbol.svg", // Okta
  "https://cdn.brandfetch.io/cisco.com/w/400/h/400/theme/dark/symbol.svg", // Cisco
  "https://cdn.brandfetch.io/linear.app/w/400/h/400/theme/dark/symbol.svg", // Linear
  "https://cdn.brandfetch.io/figma.com/w/400/h/400/theme/dark/symbol.svg", // Figma
  "https://cdn.brandfetch.io/retool.com/w/400/h/400/theme/dark/symbol.svg", // Retool
  "https://cdn.brandfetch.io/sentry.io/w/400/h/400/theme/dark/symbol.svg", // Sentry
  "https://cdn.brandfetch.io/asana.com/w/400/h/400/theme/dark/symbol.svg", // Asana
  "https://cdn.brandfetch.io/hubspot.com/w/400/h/400/theme/dark/symbol.svg", // HubSpot
  "https://cdn.brandfetch.io/gitlab.com/w/400/h/400/theme/dark/symbol.svg", // GitLab
  "https://cdn.brandfetch.io/microsoft.com/w/400/h/400/theme/dark/symbol.svg", // Microsoft
  "https://cdn.brandfetch.io/zoom.us/w/400/h/400/theme/dark/symbol.svg", // Zoom
  "https://cdn.brandfetch.io/shopify.com/w/400/h/400/theme/dark/symbol.svg", // Shopify
];

interface LogoIconProps {
  url: string;
}

function LogoIcon({ url }: LogoIconProps) {
  const [error, setError] = React.useState(false);

  if (error) {
    // Elegant fallback placeholder dot
    return (
      <div className="flex items-center justify-center size-11 rounded-sm bg-white/80 border border-zinc-200 dark:bg-[#161616]/90 dark:border-white/5 shrink-0 shadow-sm">
        <div className="size-2 rounded-full bg-zinc-300 dark:bg-white/20" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center size-11 rounded-sm bg-white/80 border border-zinc-200 dark:bg-[#161616]/90 dark:border-white/5 p-2 shrink-0 shadow-sm hover:border-zinc-300 dark:hover:border-white/10 transition-colors">
      <img
        src={url}
        alt=""
        className="size-6 object-contain opacity-65 grayscale dark:opacity-40 filter brightness-95 dark:brightness-100"
        onError={() => setError(true)}
      />
    </div>
  );
}

interface MarqueeRowProps {
  logos: string[];
  direction?: "left" | "right";
  speed?: string;
}

function MarqueeRow({ logos, direction = "left", speed = "85s" }: MarqueeRowProps) {
  // Duplicating the list to guarantee seamless infinite looping
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full flex select-none pointer-events-none overflow-hidden relative h-11 flex-row flex-nowrap">
      <div
        className={`flex shrink-0 items-center gap-6 min-w-full justify-start animate-marquee-${direction}`}
        style={{ animationDuration: speed }}
      >
        {repeatedLogos.map((url, idx) => (
          <LogoIcon key={`row-a-${idx}`} url={url} />
        ))}
      </div>
      <div
        className={`flex shrink-0 items-center gap-6 min-w-full justify-start animate-marquee-${direction}`}
        style={{ animationDuration: speed }}
        aria-hidden="true"
      >
        {repeatedLogos.map((url, idx) => (
          <LogoIcon key={`row-b-${idx}`} url={url} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationCloud() {
  return (
    <section className="relative w-full py-16 bg-background overflow-hidden border-y border-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contained integration marquee card */}
        <div className="w-full bg-zinc-50 border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm relative overflow-hidden flex flex-col p-8 sm:p-12 shadow-2xl transition-colors duration-300">

          {/* Top Row: Copy Text on Left, Still Logo on Right */}
          <div className="flex items-center justify-between w-full mb-10 relative z-20">
            {/* Left: Copy Text */}
            <div className="max-w-xl text-left select-text pl-2">
              <h2 className="text-3xl sm:text-[2.5rem] font-medium tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                KeilHQ lives in every app you already use.
              </h2>
            </div>

            {/* Right: Still KeilHQ Logo adapted to theme */}
            <div className="shrink-0 ml-6 flex items-center justify-center mr-2">
              <div className="relative size-16 sm:size-20 flex items-center justify-center">

                {/* Light theme logo */}
                <img
                  src="/keilhq.svg"
                  alt="KeilHQ Logo"
                  className="w-26 h-26 sm:w-26 sm:h-26 object-contain block dark:hidden filter drop-shadow-[0_0_8px_rgba(0,0,0,0.08)]"
                />

                {/* Dark theme logo */}
                <img
                  src="/keilhq-white.svg"
                  alt="KeilHQ Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain hidden dark:block filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row: Single Flowing Marquee */}
          <div className="relative w-full overflow-hidden py-2 z-20 mt-2">
            {/* Left / Right gradient masks to blend the marquee edges perfectly */}
            <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-zinc-50 via-zinc-50/90 to-transparent dark:from-[#0e0e0e] dark:via-[#0e0e0e]/90 z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-zinc-50 via-zinc-50/90 to-transparent dark:from-[#0e0e0e] dark:via-[#0e0e0e]/90 z-10 pointer-events-none" />

            <MarqueeRow logos={combinedLogos} direction="left" speed="85s" />
          </div>

        </div>

      </div>

      {/* Embedded High-Performance Keyframes styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-100%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}} />
    </section>
  );
}
