"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
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

export function Features({ data }: FeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const lastIndexRef = useRef(0);
  const lastChangeRef = useRef(0);

  // Scroll-linked index with passive listener + rAF throttle + a short
  // cooldown so hovering a section boundary doesn't flicker the panel.
  useEffect(() => {
    const container = containerRef.current;
    if (!container || data.length === 0) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;

        if (scrollable > 0) {
          const scrolled = -rect.top;
          const progress = Math.min(1, Math.max(0, scrolled / scrollable));

          // Calculate step index smoothly across the scroll span
          const nextIndex = Math.min(
            data.length - 1,
            Math.max(0, Math.floor(progress * data.length * 0.999))
          );

          if (nextIndex !== lastIndexRef.current && Date.now() - lastChangeRef.current > 140) {
            lastIndexRef.current = nextIndex;
            lastChangeRef.current = Date.now();
            setActiveIndex(nextIndex);
          }
        }
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [data.length]);

  const item = data[activeIndex] || data[0];

  // One calm motion language: opacity + a small rise, expo ease-out.
  // No directional whiplash, no blur, no scale — cheap on the GPU and
  // quiet under Lenis smooth scrolling. Exits run faster than enters so
  // mode="wait" swaps never flash blank.
  const textVariants: Variants = {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -6,
      transition: {
        duration: 0.18,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  const visualVariants: Variants = {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 12,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -8,
      transition: {
        duration: 0.25,
        ease: [0.23, 1, 0.32, 1] as const,
      },
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

          {/* Two-column Header Layout with Smooth Choreographed Crossfade */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 w-full text-left items-start min-h-[100px]">
            {/* Left Column: Headline */}
            <div className="col-span-12 lg:col-span-6 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${item.id}`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight leading-[1.15] text-foreground text-balance">
                    {item.title}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Description & Call-to-action Link */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 lg:pt-[5px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${item.id}`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-3"
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

          {/* High-End Double-Bezel Mockup Container with Layered Crossfade */}
          <div className="w-full relative bg-muted/20 dark:bg-card/40 p-1.5 sm:p-2">
            <div className="w-full relative rounded-lg overflow-hidden bg-background">

              {/* Stacked Screen Crossfade Container */}
              {/* Visuals are absolutely stacked, so enter + exit crossfade
                  together with no blank flash (no mode="wait" here). */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={item.id}
                    variants={visualVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 w-full h-full flex items-start justify-center will-change-transform"
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