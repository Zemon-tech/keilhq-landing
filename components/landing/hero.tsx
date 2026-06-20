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
    <section className="relative w-full min-h-screen bg-background flex items-center overflow-hidden">
      {/* Subtle ambient gradient — fixed, pointer-events-none, not on scrolling container */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, oklch(0.55 0.18 250 / 0.07), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-16 pt-28 pb-24">

        {/* ── Left: Copy ───────────────────────────────────────────── */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6 text-left">

          {/* Social proof badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="size-1.5 rounded-full bg-emerald-500 inline-block shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-medium text-muted-foreground tracking-wide">
              Trusted by 7,000+ teams globally
            </span>
          </div>

          {/* Display heading — Instrument Serif */}
          <h1
            className={`font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.08] text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}
          >
            The one workspace your team will actually use.
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-[15px] text-muted-foreground leading-relaxed max-w-[34ch] transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Replace Slack, Asana, Notion, and calendar chaos. KielHQ unifies tasks, docs, chat, and your calendar — with AI that reads your actual data.
          </p>

          {/* Feature chips */}
          <div
            className={`flex items-center gap-2 flex-wrap transition-all duration-700 delay-[250ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {["Tasks", "Docs", "Chat", "Calendar", "AI"].map((label) => (
              <span
                key={label}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-sm border ${label === "AI"
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
            className={`flex items-center gap-5 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <a
              href="#"
              className="btn-accent inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[13px] font-semibold group active:scale-[0.97] transition-transform duration-150"
            >
              Start free
              <ArrowRight
                className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 group inline-flex items-center gap-1.5"
            >
              Watch demo
              <ArrowRight className="size-3 opacity-60 group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
            </a>
          </div>

          {/* Trust line */}
          <p
            className={`text-[11px] text-muted-foreground/70 transition-all duration-700 delay-[350ms] ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            No credit card required · Free plan available
          </p>
        </div>

        {/* ── Right: Dashboard mockup + AI overlay ─────────────────── */}
        <div
          className={`flex-1 w-full min-w-0 relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Dashboard screenshot */}
          <div className="w-full rounded-sm overflow-hidden shadow-2xl border border-border/50">
            <Image
              src="/mockups/light/Dashboard.png"
              alt="KielHQ Smart Dashboard — AI-powered workspace"
              width={1200}
              height={800}
              className="w-full h-auto object-cover object-top dark:hidden"
              priority
            />
            <Image
              src="/mockups/dark/Dashboard.png"
              alt="KielHQ Smart Dashboard — AI-powered workspace"
              width={1200}
              height={800}
              className="w-full h-auto object-cover object-top hidden dark:block"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
