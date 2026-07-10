"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { featureHrefById } from "@/lib/feature-nav";

export interface StickyScrollSection {
  id: string;
  badgeText?: string;
  title: string;
  description: string;
  visualComponent: React.ReactNode;
}

interface StickyScrollProps {
  data: StickyScrollSection[];
}

const getGradientClass = (idx: number) => {
  const gradients = [
    "from-sky-500/10 via-indigo-500/5 to-purple-500/10 dark:from-sky-950/20 dark:via-indigo-950/10 dark:to-purple-950/20",
    "from-emerald-500/10 via-teal-500/5 to-cyan-500/10 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-cyan-950/20",
    "from-amber-500/10 via-orange-500/5 to-rose-500/10 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-rose-950/20",
    "from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 dark:from-violet-950/20 dark:via-purple-950/10 dark:to-fuchsia-950/20",
    "from-blue-500/10 via-sky-500/5 to-teal-500/10 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-teal-950/20",
    "from-rose-500/10 via-pink-500/5 to-violet-500/10 dark:from-rose-950/20 dark:via-pink-950/10 dark:to-violet-950/20",
  ];
  return gradients[idx % gradients.length];
};

export function Features({ data }: StickyScrollProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-spy: fires when a card enters the central band of the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIdx(idx);
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(card);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [data]);

  // Crossfade left panel on change
  useEffect(() => {
    if (!leftContentRef.current) return;
    gsap.fromTo(
      leftContentRef.current.children,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out", stagger: 0.04 }
    );
  }, [activeIdx]);

  const activeFeature = data[activeIdx];

  return (
    <section className="w-full bg-background flex flex-col justify-center py-16 lg:py-20 xl:py-24">

      {/* ── Section header — centered, full width ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
          What you can do with KeilHQ
        </h2>
        <p className="mt-4 text-[15px] font-medium tracking-[0.015em] text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
          Everything your team needs, unified in a single workspace.
        </p>
      </div>

      {/* ── Desktop: Sticky Scroll ── */}
      <div className="hidden lg:block max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-row items-start gap-12">

          {/* Left — sticky text panel, fixed pixel width with left padding */}
          <div
            className="shrink-0 sticky self-start pr-4"
            style={{ width: "360px", top: "calc(50vh - 140px)" }}
          >
            <div ref={leftContentRef} className="flex flex-col gap-5 text-left">
              {activeFeature?.badgeText && (
                <span className="text-[11px] font-semibold tracking-[0.01em] text-muted-foreground block">
                  {activeFeature.badgeText}
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-snug" style={{ letterSpacing: "-0.015em" }}>
                {activeFeature?.title}
              </h3>
              <p className="text-[14px] font-medium tracking-[0.015em] leading-relaxed text-muted-foreground">
                {activeFeature?.description}
              </p>
              <Link
                href={featureHrefById[activeFeature?.id] ?? "#"}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.01em] text-foreground hover:text-muted-foreground transition-colors duration-150 group w-fit"
              >
                <span>Explore solution</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              {/* Progress dots */}
              <div className="flex items-center gap-2 pt-1">
                {data.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-[2px] rounded-full transition-all duration-300 ${idx === activeIdx ? "w-6 bg-[oklch(0.55_0.18_250)]" : "w-2 bg-border"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — scrolling cards, contained inside the grid area */}
          <div className="flex-1 min-w-0 flex flex-col gap-[14vh] py-[1vh]">
            {data.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="w-full min-h-[80vh] flex items-center"
              >
                {/* The visual component inside premium macOS wrapper and gradient background */}
                <div className={`w-full bg-gradient-to-br ${getGradientClass(idx)} border border-zinc-200/50 dark:border-white/5 rounded-sm p-6 sm:p-10 lg:p-12 shadow-inner`}>
                  <div className="w-full rounded-sm overflow-hidden border border-zinc-200/85 dark:border-white/10 bg-background/50 backdrop-blur-md shadow-2xl flex flex-col">
                    {/* Window top bar chrome */}
                    <div className="h-8 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-white/5 flex items-center px-4 gap-1.5 shrink-0 select-none">
                      <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    </div>
                    {/* Inner image container */}
                    <div className="w-full h-full relative">
                      {item.visualComponent}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Mobile: Linear Stack ── */}
      <div className="flex lg:hidden flex-col gap-20 px-5 sm:px-8">
        {data.map((item, idx) => (
          <div key={item.id} className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              {item.badgeText && (
                <span className="text-[11px] font-semibold tracking-[0.01em] text-muted-foreground block">
                  {item.badgeText}
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.015em" }}>{item.title}</h3>
              <p className="text-[14px] font-medium tracking-[0.015em] text-muted-foreground leading-relaxed">{item.description}</p>
              <Link
                href={featureHrefById[item.id] ?? "#"}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.01em] text-foreground hover:text-muted-foreground transition-colors duration-150 group w-fit"
              >
                <span>Explore solution</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className={`w-full bg-gradient-to-br ${getGradientClass(idx)} border border-zinc-200/50 dark:border-white/5 rounded-sm p-6 sm:p-10 shadow-inner`}>
              <div className="w-full rounded-sm overflow-hidden border border-zinc-200/85 dark:border-white/10 bg-background/50 backdrop-blur-md shadow-2xl flex flex-col">
                {/* Window top bar chrome */}
                <div className="h-8 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-white/5 flex items-center px-4 gap-1.5 shrink-0 select-none">
                  <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                {/* Inner image container */}
                <div className="w-full h-full relative">
                  {item.visualComponent}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
