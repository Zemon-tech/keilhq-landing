"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
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
    <section className="w-full bg-background flex items-center justify-center py-16 lg:py-20 xl:py-24">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center gap-10"
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 w-full">
          <h2
            className={`font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-foreground transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            style={{ letterSpacing: "-0.025em", textWrap: "balance" } as React.CSSProperties}
          >
            Your team deserves a workspace that works.
          </h2>
          <p
            className={`text-[16px] font-medium tracking-[0.015em] text-muted-foreground leading-relaxed max-w-[42ch] transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Join 7,000+ teams who replaced their scattered stack with KeilHQ.
            Everything unified. AI that knows your work.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <a
            href="https://app.Keilhq.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[14px] font-semibold tracking-[0.01em] group w-full sm:w-auto justify-center active:scale-[0.97] transition-transform duration-150"
          >
            Start free today
            <ArrowRight
              className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[14px] font-semibold tracking-[0.01em] border border-border text-foreground hover:bg-secondary/60 transition-all duration-150 group w-full sm:w-auto justify-center active:scale-[0.97]"
          >
            Book a demo
            <ArrowRight
              className="size-4 opacity-50 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Trust micro-copy */}
        <p
          className={`text-[12px] font-semibold tracking-wide text-muted-foreground/70 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"
            }`}
        >
          No credit card required · Cancel any time · Free plan included
        </p>
      </div>
    </section>
  );
}
