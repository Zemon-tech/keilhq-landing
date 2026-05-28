"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 0,
    name: "Paul Graham",
    role: "Y Combinator, Co-founder",
    quote:
      "o11 is building the future of the way knowledge workers interact with the web and internet.",
    // Using a real public domain portrait-style image
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&crop=face",
  },
  {
    id: 1,
    name: "Ben Barth",
    role: "Axcero Advisors, CEO",
    quote:
      "The productivity gains we've seen since deploying o11 across our analyst team are unlike anything I've experienced in 20 years of enterprise software.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Adeep Mitra",
    role: "Pollinate, CEO",
    quote:
      "We replaced three separate automation tools with o11. It just works — inside the apps our team already lives in.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Jared Friedman",
    role: "Y Combinator, Managing Partner",
    quote:
      "One of the clearest examples of AI making enterprise workflows genuinely faster, not just marginally better.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop&crop=face",
  },
];

export function LovedBy() {
  const [activeId, setActiveId] = useState(0);
  const active = testimonials.find((t) => t.id === activeId)!;

  return (
    <section className="w-full bg-white border-t border-zinc-100 py-20 sm:py-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — heading */}
          <div className="lg:w-[280px] shrink-0">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Loved by<br />the best.
            </h2>
          </div>

          {/* Right — accordion testimonials */}
          <div className="flex-1 flex flex-col divide-y divide-zinc-100">
            {testimonials.map((t) => {
              const isActive = t.id === activeId;
              return (
                <div key={t.id}>
                  {/* Row header — always visible */}
                  <button
                    onClick={() => setActiveId(t.id)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span className={`text-sm transition-colors ${isActive ? "text-zinc-950 font-medium" : "text-zinc-500 hover:text-zinc-800"}`}>
                      {t.name}, {t.role}
                    </span>
                    {/* Thumbnail — always shown, matches reference */}
                    <div className="size-10 rounded overflow-hidden shrink-0 ml-4 border border-zinc-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isActive && (
                    <div className="pb-8 flex flex-col sm:flex-row gap-8 items-start animate-in fade-in slide-in-from-top-1 duration-200">
                      {/* Quote */}
                      <p className="flex-1 text-lg sm:text-xl text-zinc-700 leading-relaxed font-normal max-w-xl">
                        {t.quote}
                      </p>
                      {/* Larger portrait */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded overflow-hidden shrink-0 border border-zinc-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
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
