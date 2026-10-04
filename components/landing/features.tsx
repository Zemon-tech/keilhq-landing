"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { featureHrefById } from "@/lib/feature-nav";

export interface StickyScrollSection {
  id: string;
  badgeText?: string;
  title: string;
  description: string;
  visualComponent: React.ReactNode;
}

interface FeaturesProps {
  data: StickyScrollSection[];
}

// Expo-out: starts fast, coasts to a stop. The curve that stops motion from
// looking linear / "AI-generated". Shared across text + visual for cohesion.
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_OUT_SOFT = [0.23, 1, 0.32, 1] as const;

export function Features({ data }: FeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Scroll-linked progress across the pinned track. Motion's useScroll uses
  // the browser's ScrollTimeline where available — hardware-accelerated and
  // smooth under load, so no manual scroll listener / rAF throttle needed.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Derive the active step from progress with hysteresis: a step only changes
  // once progress crosses the *center* of the next band, not its edge. This
  // kills the flicker/snap at section boundaries the old cooldown hack caused.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const n = data.length;
    if (n === 0) return;
    const raw = p * n;
    const next = Math.min(n - 1, Math.max(0, Math.round(raw - 0.5)));
    setActiveIndex((prev) => (next !== prev ? next : prev));
  });

  const item = data[activeIndex] || data[0];

  // One calm motion language. Enter: fade + small rise + de-blur (blur masks
  // the crossfade so two states read as one). Exit: faster, no blur, so swaps
  // never stall. Reduced motion keeps opacity only.
  const textVariants: Variants = {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 12,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: EASE_OUT },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -8,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)",
      transition: { duration: 0.28, ease: EASE_OUT_SOFT },
    },
  };

  const visualVariants: Variants = {
    initial: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 1.015,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE_OUT },
    },
    exit: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.994,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)",
      transition: { duration: 0.4, ease: EASE_OUT_SOFT },
    },
  };

  return (
    // Scroll track: 100vh per feature for optimal scroll pace
    <section
      ref={containerRef}
      className="relative w-full bg-background select-text"
      style={{ height: `${Math.max(1, data.length) * 100}vh` }}
    >
      {/* Pinned panel: sits below the fixed navbar with breathing room */}
      <div className="sticky top-0 w-full pt-24 sm:pt-28 lg:pt-32 pb-12 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-10 lg:gap-12">

          {/* Progress rail — quiet indication of where you are in the sequence */}
          <div className="flex items-center gap-2" aria-hidden="true">
            {data.map((s, i) => (
              <span
                key={s.id}
                className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-border"
              >
                <motion.span
                  className="absolute inset-y-0 left-0 bg-foreground/70"
                  initial={false}
                  animate={{ width: i <= activeIndex ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                />
              </span>
            ))}
          </div>

          {/* Two-column Header Layout with simultaneous crossfade (no mode="wait"
              gap). Both columns are absolutely stacked so enter + exit overlap. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 w-full text-left items-start min-h-[112px]">
            {/* Left Column: Headline */}
            <div className="relative col-span-12 lg:col-span-6">
              <AnimatePresence initial={false}>
                <motion.h2
                  key={`title-${item.id}`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="lg:absolute lg:inset-0 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight leading-[1.15] text-foreground text-balance will-change-[transform,opacity,filter]"
                >
                  {item.title}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Right Column: Description & CTA */}
            <div className="relative col-span-12 lg:col-span-6 lg:pt-[5px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={`desc-${item.id}`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="lg:absolute lg:inset-0 flex flex-col gap-3 will-change-[transform,opacity,filter]"
                >
                  <p className="text-[17px] lg:text-[18px] font-normal text-muted-foreground leading-[1.55] max-w-[48ch]">
                    {item.description}
                  </p>
                  <Link
                    href={featureHrefById[item.id] ?? "#"}
                    className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group w-fit mt-1"
                  >
                    <span>
                      {activeIndex + 1}.0 {item.badgeText}
                    </span>
                    <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 text-muted-foreground group-hover:text-foreground" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Double-Bezel Mockup Container with layered crossfade */}
          <div className="w-full relative bg-muted/20 dark:bg-card/40 p-1.5 sm:p-2">
            <div className="w-full relative rounded-lg overflow-hidden bg-background">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={item.id}
                    variants={visualVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 w-full h-full flex items-start justify-center will-change-[transform,opacity,filter]"
                  >
                    <div className="w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:object-top">
                      {item.visualComponent}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
