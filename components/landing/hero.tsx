"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Reasoning steps shown sequentially after the prompt types
const reasoningSteps = [
  { label: "Scanning tasks assigned to you…", delay: 0 },
  { label: "Cross-referencing your calendar…", delay: 1400 },
  { label: "3 blockers found in Design sprint", delay: 2800 },
];

export function Hero() {
  const [typedPrompt, setTypedPrompt] = useState("");
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Typing animation
  useEffect(() => {
    const promptText = "What should I tackle first today? Show me what's blocking the team.";
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < promptText.length) {
        setTypedPrompt((prev) => prev + promptText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Reveal reasoning steps one by one
        reasoningSteps.forEach((step, idx) => {
          setTimeout(() => {
            setVisibleSteps((prev) => Math.max(prev, idx + 1));
          }, step.delay + 400);
        });
      }
    }, 36);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col items-center overflow-hidden">

      {/* Subtle ambient gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0 dark:opacity-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, oklch(0.55 0.18 250 / 0.07), transparent)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center pt-32 pb-16">
        
        {/* ── Top: Centered Copy ───────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-6 max-w-3xl relative z-20">

          {/* Social proof badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="size-1.5 rounded-full bg-emerald-500 inline-block shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
              Trusted by 7,000+ teams globally
            </span>
          </div>

          {/* Display heading — Instrument Serif */}
          <h1
            className={`font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            style={{ letterSpacing: "-0.025em", textWrap: "balance" } as React.CSSProperties}
          >
            The one workspace your team will actually use.
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-[16px] sm:text-[18px] font-medium tracking-[0.015em] text-muted-foreground leading-relaxed max-w-[42ch] transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Replace Slack, Asana, Notion, and calendar chaos. KielHQ unifies tasks, docs, chat, and your calendar — with AI that reads your actual data.
          </p>

          {/* Feature chips */}
          <div
            className={`flex items-center justify-center gap-2 flex-wrap transition-all duration-700 delay-[250ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {["Tasks", "Docs", "Chat", "Calendar", "AI"].map((label) => (
              <span
                key={label}
                className={`text-[12px] font-semibold tracking-[0.01em] px-3 py-1.5 rounded-full border ${label === "AI"
                  ? "bg-[oklch(0.55_0.18_250)] text-white border-transparent"
                  : "bg-secondary/60 border-border/50 text-foreground/70"
                  }`}
              >
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex items-center gap-4 mt-2 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <a
              href="#"
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold tracking-[0.01em] group active:scale-[0.97] transition-transform duration-150"
            >
              Start free
              <ArrowRight
                className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary/50 border border-border/50 text-[14px] font-semibold tracking-[0.01em] text-foreground hover:bg-secondary/80 transition-colors duration-150 group"
            >
              Watch demo
            </a>
          </div>

          {/* Trust line */}
          <p
            className={`text-[12px] font-medium tracking-wide text-muted-foreground/70 transition-all duration-700 delay-[350ms] ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            No credit card required · Free plan available
          </p>
        </div>

        {/* ── Bottom: Landscape & Search ─────────────────── */}
        <div
          className={`w-full relative z-10 transition-all duration-1000 delay-400 mt-[-10rem] sm:mt-[-12rem] md:mt-[-15rem] lg:mt-[-17rem] ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"
            }`}
        >
          {/* Landscape Image */}
          <div className="w-full relative overflow-hidden mask-image-bottom rounded-xl md:rounded-2xl border-none">
            <img
              src="/pic2.png"
              alt="Open Garden Landscape"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
