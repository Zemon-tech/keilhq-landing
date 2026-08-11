"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaLabel?: string;
  heroCtaLink?: string;
  heroSecondaryCtaLabel?: string;
  heroSecondaryCtaLink?: string;
  announcementEnabled?: boolean;
  announcementText?: string;
  announcementLink?: string;
}

export function Hero({
  heroTitle = "The product development system for teams and agents",
  heroSubtitle = "Purpose-built for planning and building products. Designed for the AI era.",
  heroCtaLabel = "Start free today",
  heroCtaLink = "https://app.Keilhq.in/login",
  heroSecondaryCtaLabel = "Book a demo",
  heroSecondaryCtaLink = "/demo",
  announcementEnabled = false,
  announcementText = "New Coding Sessions",
  announcementLink = "#",
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] bg-background flex flex-col justify-center items-center overflow-hidden pt-32 lg:pt-40 pb-16 lg:pb-24">
      {/* Subtle ambient gradient — fixed, pointer-events-none */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.55 0.18 250 / 0.05), transparent)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 text-left">
        
        {/* Copy Section */}
        <div className="max-w-[1100px] flex flex-col gap-6">
          <h1
            className={`font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-foreground text-balance transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {heroTitle}
          </h1>

          <div
            className={`flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-2 text-[15px] sm:text-base font-normal text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="max-w-[65ch]">
              {heroSubtitle}
            </p>
            {announcementEnabled && announcementText && (
              <a
                href={announcementLink || "#"}
                className="inline-flex items-center gap-1 text-[13px] sm:text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-150 shrink-0 group"
              >
                {announcementText}
                <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>

          {/* Main CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-3 mt-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {heroCtaLabel && heroCtaLink && (
              <a
                href={heroCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm btn-accent text-[13px] font-semibold transition-all cursor-pointer shadow-sm w-full sm:w-auto justify-center"
              >
                {heroCtaLabel}
                <ArrowRight
                  className="size-3.5"
                  aria-hidden="true"
                />
              </a>
            )}
            {heroSecondaryCtaLabel && heroSecondaryCtaLink && (
              <a
                href={heroSecondaryCtaLink}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm border border-border text-foreground hover:bg-muted/50 text-[13px] font-semibold transition-all cursor-pointer active:scale-[0.97] w-full sm:w-auto justify-center"
              >
                {heroSecondaryCtaLabel}
                <ArrowRight
                  className="size-3.5 opacity-55"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </div>

        {/* Mockup Container — No border, no macOS chrome, raw large mockup */}
        <div
          className={`w-full relative transition-all duration-[1200ms] delay-300 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"
          }`}
        >
          {/* Subtle edge glow */}
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-b from-white/10 to-transparent opacity-0 dark:opacity-20 blur-md pointer-events-none" />
          
          <div className="relative w-full rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <Image
              src="/mockups/light/dashboard light.png"
              alt={`${heroTitle} — AI-powered workspace`}
              width={1600}
              height={1000}
              className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
              priority
            />
            <Image
              src="/mockups/dark/dashboard dark.png"
              alt={`${heroTitle} — AI-powered workspace`}
              width={1600}
              height={1000}
              className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
              priority
            />
            
            {/* Bottom gradient fade to blend the mockup into the background */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
