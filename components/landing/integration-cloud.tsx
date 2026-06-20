"use client";

import React from "react";

// Robust, high-fidelity Brand logo URLs
const combinedLogos = [
  "/integrations/slack.png",
  "/integrations/notion.png",
  "/integrations/gcalendar.png",
  "/integrations/atlassianjira.png",
  "/integrations/linear.jpeg",
  "/integrations/gdocs.png",
  "/integrations/gdrive.png",
  "/integrations/gmail.png",
  "/integrations/gmeet.png",
  "/integrations/gsheets.png",
  "/integrations/gslides.png",
  "/integrations/chroniclehq.jpeg",
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
    <section className="relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Contained integration marquee card */}
        <div className="w-full bg-zinc-50 border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm relative overflow-hidden flex flex-col p-8 sm:p-12 shadow-2xl transition-colors duration-300">

          {/* Top Row: Copy Text on Left, Still Logo on Right */}
          <div className="flex items-center justify-between w-full mb-10 relative z-20">
            {/* Left: Copy Text */}
            <div className="max-w-xl text-left select-text pl-2">
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
                KielHQ lives in every app you already use.
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
