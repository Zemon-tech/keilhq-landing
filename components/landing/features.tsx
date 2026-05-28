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

  // Scroll-spy: IntersectionObserver fires when a card enters the central
  // 20% band of the viewport — clean single-card-at-a-time detection
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
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-20 sm:mb-28">
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 mt-3">
            What you can do with o11
          </h2>
        </div>

        {/* ── Desktop: Sticky Scroll ── */}
        <div className="hidden lg:flex flex-row gap-24 items-start">

          {/* Left — sticky, vertically centered in viewport
              top-[calc(50vh-10rem)] places it so the ~200px panel sits at viewport center */}
          <div className="w-[34%] sticky self-start" style={{ top: "calc(50vh - 140px)" }}>
            <div ref={leftContentRef} className="flex flex-col gap-6 text-left">
              {activeFeature?.badgeText && (
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  {activeFeature.badgeText}
                </span>
              )}
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-950 leading-snug">
                {activeFeature?.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500 max-w-[260px]">
                {activeFeature?.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950 hover:underline group w-fit"
              >
                <span>Explore solution</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Progress dots */}
              <div className="flex items-center gap-2 pt-2">
                {data.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-[3px] rounded-full transition-all duration-400 ${
                      idx === activeIdx ? "w-7 bg-zinc-950" : "w-2.5 bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — scrolling cards, full width, generous height */}
          <div className="w-[66%] flex flex-col gap-[25vh] py-[15vh]">
            {data.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="w-full min-h-[75vh] flex items-center"
              >
                {item.visualComponent}
              </div>
            ))}
          </div>

        </div>

        {/* ── Mobile: Linear Stack ── */}
        <div className="flex lg:hidden flex-col gap-20">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-3">
                {item.badgeText && (
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    {item.badgeText}
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950 hover:underline group w-fit"
                >
                  <span>Explore solution</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="w-full">{item.visualComponent}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
