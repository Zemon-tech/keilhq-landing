"use client";

import React from "react";

export function LovedBy({ data }: { data?: any }) {
  const title = data?.title || "Proven operational ROI.";
  const stat1Label = data?.stat1Label || "Time recovered per team member";
  const stat1Value = data?.stat1Value || "11 hrs / wk";
  const stat2Label = data?.stat2Label || "Deal to onboarding velocity";
  const stat2Value = data?.stat2Value || "< 24 hrs";

  const testimonials = data?.testimonials || [
    {
      quote: "A client mentioned something from an intake call six months earlier. We didn't have to scramble or remember it — KeilHQ's meeting intelligence and CRM surfaced the exact note. That wins renewals.",
      authorName: "Sagar Sahu",
      authorRole: "Program Manager, AIC GGSIPU",
      authorAvatar: "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=384,h=373,f=auto,dpr=2,fit=contain/f1780921371029x651737872941958000/51397r73ev%20%281%29.png",
      isHighlighted: false,
    },
    {
      quote: "The meeting intelligence and shared context layer alone justified the switch. We replaced 5 disconnected SaaS subscriptions and context actually flows between sales, delivery, and leadership.",
      authorName: "Sahil",
      authorRole: "CEO & Founder, Qeno AI",
      authorAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcidjK4k8HMKHeSUCaK9WSLowqwCDTiYoOtrJGljoLQ8A2VWmGRZr8q23&s=10",
      isHighlighted: true,
    },
  ];

  return (
    <section className="w-full bg-background flex items-center justify-center py-20 lg:py-28 xl:py-32 select-text">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24">

          {/* ── Left: heading + stat ── */}
          <div className="xl:w-[400px] shrink-0 flex flex-col gap-10 text-left">
            <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-foreground">
              {title}
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-sans tracking-widest text-muted-foreground uppercase">
                  {stat1Label}
                </span>
                <span className="text-2xl font-semibold text-foreground tracking-tight font-display">
                  {stat1Value}
                </span>
              </div>
              {data?.stat2Label && (
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-sans tracking-widest text-muted-foreground uppercase">
                    {data.stat2Label}
                  </span>
                  <span className="text-2xl font-semibold text-foreground tracking-tight font-display">
                    {data.stat2Value}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ── Right: Side-by-side Testimonial Cards ── */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {testimonials.map((t: any, idx: number) => {
              if (t.isHighlighted) {
                return (
                  <div key={idx} className="flex flex-col justify-between p-8 rounded-lg min-h-[300px] border border-[var(--color-marigold)]/40 bg-[var(--color-marigold)] text-[#171514]">
                    <p className="text-[15px] sm:text-[16px] font-medium leading-[1.6] tracking-[0.01em] text-[#171514]">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 mt-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.authorAvatar || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop&crop=face"}
                        alt={t.authorName}
                        className="size-9 rounded-sm object-cover grayscale contrast-125"
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[13px] font-bold text-[#171514]">
                          {t.authorName}
                        </span>
                        <span className="text-[10px] font-sans tracking-widest text-[#171514]/80 uppercase">
                          {t.authorRole}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={idx} className="flex flex-col justify-between p-8 rounded-lg min-h-[300px] border border-border bg-card shadow-sm">
                  <p className="text-[15px] sm:text-[16px] font-normal leading-[1.6] tracking-[0.01em] text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 mt-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.authorAvatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&crop=face"}
                      alt={t.authorName}
                      className="size-9 rounded-sm object-cover grayscale opacity-80"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-[13px] font-semibold text-foreground">
                        {t.authorName}
                      </span>
                      <span className="text-[11px] font-sans tracking-wider text-muted-foreground uppercase">
                        {t.authorRole}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
