"use client";

import React from "react";

export function LovedBy() {
  return (
    <section className="w-full bg-background flex items-center justify-center py-20 lg:py-28 xl:py-32 select-text">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24">

          {/* ── Left: heading + stat ── */}
          <div className="xl:w-[400px] shrink-0 flex flex-col gap-10 text-left">
            <h2 className="font-sans text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-[#F7F8F8]">
              Loved by<br />the best.
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                  Average savings per seat
                </span>
                <span className="text-2xl font-semibold text-zinc-900 dark:text-[#F7F8F8] tracking-tight">
                  $40–$70 / mo
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                  Teams worldwide
                </span>
                <span className="text-2xl font-semibold text-zinc-900 dark:text-[#F7F8F8] tracking-tight">
                  7,000+
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Side-by-side Testimonial Cards ── */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Card 1: Monochrome Stark Card */}
            <div className="flex flex-col justify-between p-8 rounded-lg min-h-[300px] border border-zinc-200/50 dark:border-white/[0.06] bg-zinc-50/50 dark:bg-white/[0.01]">
              <p className="text-[15px] sm:text-[16px] font-normal leading-[1.6] tracking-[0.01em] text-zinc-800 dark:text-[#8A8F98]">
                &ldquo;KeilHQ is by far the best agency tool I have ever used. Everything is connected — tasks, docs, chat, calendar — and the AI actually knows what I'm working on.&rdquo;
              </p>
              
              <div className="flex items-center gap-3 mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&crop=face"
                  alt="Martha Punla"
                  className="size-9 rounded-sm object-cover grayscale opacity-80"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8]">
                    Martha Punla
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-zinc-400 dark:text-zinc-600 uppercase">
                    VP Marketing, Meta
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Bright Yellow-Green Accent Card (Jolt of contrast) */}
            <div className="flex flex-col justify-between p-8 rounded-lg min-h-[300px] border border-[#EEFF3B]/20 bg-[#EEFF3B] text-zinc-950">
              <p className="text-[15px] sm:text-[16px] font-medium leading-[1.6] tracking-[0.01em]">
                &ldquo;From client onboarding to getting paid, this just works — clean, fast, and beautifully built. We cancelled four tools in the first week.&rdquo;
              </p>
              
              <div className="flex items-center gap-3 mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop&crop=face"
                  alt="Leah Daniel"
                  className="size-9 rounded-sm object-cover grayscale contrast-125"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[13px] font-bold">
                    Leah Daniel
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-800/85 uppercase">
                    Design Ops Lead, Teamwork
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
