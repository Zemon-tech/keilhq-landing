"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface FinalCtaProps {
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButtonLabel?: string;
  finalCtaButtonLink?: string;
  finalCtaSecondaryButtonLabel?: string;
  finalCtaSecondaryButtonLink?: string;
  finalCtaTrustText?: string;
}

export function FinalCta({
  finalCtaTitle = "Your team deserves a workspace that works.",
  finalCtaDescription = "Join 7,000+ teams who replaced their scattered stack with KeilHQ. Everything unified. AI that knows your work.",
  finalCtaButtonLabel = "Start free today",
  finalCtaButtonLink = "https://app.Keilhq.in/login",
  finalCtaSecondaryButtonLabel = "Book a demo",
  finalCtaSecondaryButtonLink = "/demo",
  finalCtaTrustText = "No credit card required · Cancel any time",
}: FinalCtaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-[100dvh] bg-background flex items-center justify-center py-20 lg:py-28 xl:py-32">
      <div
        ref={ref}
        className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center gap-8"
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 max-w-[600px] text-center">
          <h2
            className={`font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground text-balance transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {finalCtaTitle}
          </h2>
          <p
            className={`text-[15px] font-normal text-muted-foreground leading-relaxed max-w-[42ch] transition-all duration-1000 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {finalCtaDescription}
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-3 mt-2 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {finalCtaButtonLabel && finalCtaButtonLink && (
            <a
              href={finalCtaButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm btn-accent text-[13px] font-semibold transition-all cursor-pointer shadow-sm w-full sm:w-auto justify-center"
            >
              {finalCtaButtonLabel}
              <ArrowRight
                className="size-3.5"
                aria-hidden="true"
              />
            </a>
          )}
          {finalCtaSecondaryButtonLabel && finalCtaSecondaryButtonLink && (
            <a
              href={finalCtaSecondaryButtonLink}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm border border-border text-foreground hover:bg-muted/50 text-[13px] font-semibold transition-all cursor-pointer active:scale-[0.97] w-full sm:w-auto justify-center"
            >
              {finalCtaSecondaryButtonLabel}
              <ArrowRight
                className="size-3.5 opacity-55"
                aria-hidden="true"
              />
            </a>
          )}
        </div>

        {/* Trust micro-copy */}
        {finalCtaTrustText && (
          <p
            className={`text-[11px] font-sans tracking-wider text-muted-foreground transition-all duration-1000 delay-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {finalCtaTrustText}
          </p>
        )}
      </div>
    </section>
  );
}
