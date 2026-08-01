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
          {/* Two-column Header Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 w-full text-left items-start">
            
            {/* Left Column: Headline */}
            <div className="col-span-12 lg:col-span-6 flex flex-col">
              <h2 
                className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight leading-[1.1] text-foreground text-balance"
              >
                {item.title}
              </h2>
            </div>

            {/* Right Column: Description & Call-to-action Link */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 lg:pt-[5px]">
              <p className="text-[17px] lg:text-[18px] font-normal text-muted-foreground leading-[1.55] max-w-[48ch]">
                {item.description}
              </p>
              <Link
                href={featureHrefById[item.id] ?? "#"}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group w-fit mt-2"
              >
                <span>{idx + 1}.0 {item.badgeText}</span>
                <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 text-muted-foreground group-hover:text-foreground" />
              </Link>
            </div>

          </div>

          {/* Large, Containerless Mockup image */}
          <div className="w-full relative rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.48)]">
            <div className="w-full relative rounded-lg overflow-hidden">
              {item.visualComponent}
              
              {/* Subtle hairline edge-lit boundary */}
              <div className="absolute inset-0 rounded-lg border border-border pointer-events-none" />
              
              {/* Bottom shadow blend */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}
