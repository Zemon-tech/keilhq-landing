"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

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
    <section className="w-full bg-background py-24 sm:py-32">

      {/* ── Section header — centered, full width ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 text-center">
        <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-4">
          Everything in one place
        </span>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white">
          What you can do with KielHQ
        </h2>
      </div>

      {/* ── Desktop: Sticky Scroll ── */}
      <div className="hidden lg:block max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-start gap-12">

          {/* Left — sticky text panel, fixed pixel width with left padding */}
          <div
            className="shrink-0 sticky self-start pr-4"
            style={{ width: "340px", top: "calc(50vh - 140px)" }}
          >
            <div ref={leftContentRef} className="flex flex-col gap-5 text-left">
              {activeFeature?.badgeText && (
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                  {activeFeature.badgeText}
                </span>
              )}
              <h3 className="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white leading-snug">
                {activeFeature?.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {activeFeature?.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline group w-fit"
              >
                <span>Explore solution</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              {/* Progress dots */}
              <div className="flex items-center gap-2 pt-1">
                {data.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      idx === activeIdx ? "w-7 bg-primary" : "w-2.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — scrolling cards, contained inside the grid area */}
          <div className="flex-1 min-w-0 flex flex-col gap-[20vh] py-[1vh]">
            {data.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="w-full min-h-[80vh] flex items-center"
              >
                {/* The visual component fills the full available width */}
                <div className="w-full">
                  {item.visualComponent}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Mobile: Linear Stack ── */}
      <div className="flex lg:hidden flex-col gap-20 px-4 sm:px-6">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              {item.badgeText && (
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                  {item.badgeText}
                </span>
              )}
              <h3 className="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline group w-fit"
              >
                <span>Explore solution</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="w-full">{item.visualComponent}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
