"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 0,
    name: "Martha Punla",
    role: "VP Marketing, Meta",
    quote:
      "KielHQ is by far the best agency tool I have ever used. Everything is connected — tasks, docs, chat, calendar — and the AI actually knows what I'm working on.",
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
    <section className="w-full bg-white border-t border-zinc-100 py-16 sm:py-24">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row">

          {/* ── Left: heading + stat ── */}
          <div className="lg:w-[480px] shrink-0 pt-1 pb-10 lg:pb-0 flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Loved by<br />the best.
            </h2>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-zinc-950">$40–$70</span>
              <span className="text-sm text-zinc-500">saved per seat per month vs. running a full tool stack</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-zinc-950">7,000+</span>
              <span className="text-sm text-zinc-500">startups, agencies, and studios worldwide</span>
            </div>
          </div>

          {/* ── Right: accordion list ── */}
          <div className="flex-1 border-l border-zinc-200 flex flex-col">
            {testimonials.map((t) => {
              const isActive = t.id === activeId;
              return (
                <div key={t.id} className="border-b border-zinc-100 last:border-b-0">
                  <button
                    onClick={() => setActiveId(t.id)}
                    className="w-full flex items-center justify-between px-6 py-2 text-left hover:bg-zinc-50/50 transition-colors"
                  >
                    <span
                      className={`text-sm transition-colors ${
                        isActive ? "text-zinc-950" : "text-zinc-500"
                      }`}
                    >
                      {t.name}, {t.role}
                    </span>

                    <div
                      className={`shrink-0 ml-6 overflow-hidden transition-all duration-300 ${
                        isActive ? "w-28 h-28 rounded-sm" : "w-28 h-9 rounded-sm"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </button>

                  {isActive && (
                    <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
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
