"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  return (
    <section className="w-full bg-background select-text flex flex-col items-center">
      {data.map((item, idx) => (
        <div 
          key={item.id}
          className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28 flex flex-col gap-12"
        >
          {/* Index Badge */}
          <div className="w-full text-left mb-1">
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600 uppercase">
              {idx + 1}.0 {item.badgeText}
            </span>
          </div>

          {/* Two-column Header Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 w-full text-left items-start">
            
            {/* Left Column: Headline */}
            <div className="col-span-12 lg:col-span-6 flex flex-col">
              <h2 
                className="font-sans text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.08] text-zinc-900 dark:text-[#F7F8F8]"
                style={{ textWrap: "balance" }}
              >
                {item.title}
              </h2>
            </div>

            {/* Right Column: Description & Call-to-action Link */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-5 lg:pt-[5px]">
              <p className="text-[15px] font-normal text-zinc-500 dark:text-[#8A8F98] leading-relaxed max-w-[52ch]">
                {item.description}
              </p>
              <Link
                href={featureHrefById[item.id] ?? "#"}
                className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8] hover:text-zinc-600 dark:hover:text-white transition-colors flex items-center gap-1 group w-fit"
              >
                <span>Explore solution</span>
                <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>

          {/* Large, Containerless Mockup image */}
          <div className="w-full relative rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.48)]">
            <div className="w-full relative rounded-lg overflow-hidden">
              {item.visualComponent}
              
              {/* Subtle hairline edge-lit boundary */}
              <div className="absolute inset-0 rounded-lg border border-zinc-200/5 dark:border-white/[0.03] pointer-events-none" />
              
              {/* Bottom shadow blend */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/45 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}
