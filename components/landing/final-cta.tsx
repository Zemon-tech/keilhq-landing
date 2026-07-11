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
    <section className="w-full bg-background flex items-center justify-center py-20 lg:py-28 xl:py-32">
      <div
        ref={ref}
        className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center gap-8"
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 max-w-[600px] text-center">
          <h2
            className={`font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-zinc-900 dark:text-[#F7F8F8] transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ textWrap: "balance" }}
          >
            Your team deserves a workspace that works.
          </h2>
          <p
            className={`text-[15px] font-normal text-zinc-500 dark:text-[#8A8F98] leading-relaxed max-w-[42ch] transition-all duration-1000 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Join 7,000+ teams who replaced their scattered stack with KeilHQ. Everything unified. AI that knows your work.
          </p>
        </div>

        {/* CTAs — Small, clean buttons per style guide */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-3 mt-2 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <a
            href="https://app.Keilhq.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm bg-zinc-900 text-white dark:bg-[#F7F8F8] dark:text-zinc-950 text-[13px] font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-all cursor-pointer shadow-sm active:scale-[0.97] w-full sm:w-auto justify-center"
          >
            Start free today
            <ArrowRight
              className="size-3.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm border border-zinc-200/60 dark:border-white/10 text-zinc-900 dark:text-[#F7F8F8] hover:bg-zinc-50 dark:hover:bg-white/[0.03] text-[13px] font-semibold transition-all cursor-pointer active:scale-[0.97] w-full sm:w-auto justify-center"
          >
            Book a demo
            <ArrowRight
              className="size-3.5 opacity-55"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Trust micro-copy */}
        <p
          className={`text-[11px] font-mono tracking-wider text-zinc-400 dark:text-zinc-600 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          No credit card required · Cancel any time
        </p>
      </div>
    </section>
  );
}
