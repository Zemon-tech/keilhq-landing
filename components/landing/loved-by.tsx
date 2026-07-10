"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 0,
    name: "Martha Punla",
    role: "VP Marketing, Meta",
    quote:
      "KeilHQ is by far the best agency tool I have ever used. Everything is connected — tasks, docs, chat, calendar — and the AI actually knows what I'm working on.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop&crop=face",
  },
  {
    id: 1,
    name: "Leah Daniel",
    role: "Design Ops Lead, Teamwork",
    quote:
      "From client onboarding to getting paid, this just works — clean, fast, and beautifully built. We cancelled four tools in the first week.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sergio Walker",
    role: "Agency Owner",
    quote:
      "Finally, a project management tool that doesn't feel like work. Our team adopted it instantly. The Clarity Engine alone is worth the switch.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Creative Director",
    quote:
      "The interface is intuitive, the AI actually knows what I'm working on, and I stopped using 4 other tools the first week. Hours saved every month.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Freelance Designer",
    quote:
      "Hours saved every month, just from having everything in one place. Personal mode works perfectly solo, and scaling to a team was zero friction.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&crop=face",
  },
];

export function LovedBy() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full bg-background flex items-center justify-center py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row">

          {/* ── Left: heading + stat ── */}
          <div className="lg:w-[480px] shrink-0 pt-1 pb-10 lg:pb-0 flex flex-col gap-8">
            <h2 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
              Loved by<br />the best.
            </h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-semibold tracking-wide text-muted-foreground">Average savings per seat per month</span>
                <span className="text-2xl font-semibold text-foreground tracking-tight">$40–$70</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-semibold tracking-wide text-muted-foreground">Teams worldwide</span>
                <span className="text-2xl font-semibold text-foreground tracking-tight">7,000+</span>
              </div>
            </div>
          </div>

          {/* ── Right: accordion list ── */}
          <div className="flex-1 border-l border-border flex flex-col">
            {testimonials.map((t) => {
              const isActive = t.id === activeId;
              return (
                <div key={t.id} className="border-b border-border last:border-b-0">
                  <button
                    onClick={() => setActiveId(t.id)}
                    className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-accent/40 transition-colors duration-150"
                  >
                    <span
                      className={`text-[13px] transition-colors duration-150 tracking-wide ${isActive ? "text-zinc-900 dark:text-white font-semibold" : "text-muted-foreground/80 font-medium"
                        }`}
                    >
                      {t.name}, {t.role}
                    </span>

                    <div
                      className="shrink-0 ml-6 overflow-hidden rounded-lg w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] transition-all duration-300"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </button>

                  {isActive && (
                    <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-[15px] sm:text-[16px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-[1.6] max-w-xl" style={{ textWrap: "pretty" } as React.CSSProperties}>
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
