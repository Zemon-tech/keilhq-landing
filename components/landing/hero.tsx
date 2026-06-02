"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export function Hero() {
  const [typedPrompt, setTypedPrompt] = useState("");
  const [currentReasoningStep, setCurrentReasoningStep] = useState(0);

  useEffect(() => {
    const promptText = "What should I tackle first today? Show me what's blocking the team.";
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < promptText.length) {
        setTypedPrompt((prev) => prev + promptText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        const stepInterval = setInterval(() => {
          setCurrentReasoningStep((prev) => {
            if (prev < 3) return prev + 1;
            clearInterval(stepInterval);
            return prev;
          });
        }, 1400);
      }
    }, 38);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-background flex items-center">
      <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-14 pb-16">

        {/* ── Left: Copy ── */}
        <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-secondary border border-border w-fit">
            <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-xs font-medium text-muted-foreground">Trusted by 7,000+ teams globally</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            The Operating System for Teams That Ship
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Replace Slack, Asana, Notion, and your calendar chaos. KielHQ is the one workspace where your team actually gets work done — with AI that reads your actual data.
          </p>

          {/* Feature pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { label: "Tasks", bg: "bg-blue-500" },
              { label: "Docs", bg: "bg-violet-500" },
              { label: "Chat", bg: "bg-emerald-500" },
              { label: "Calendar", bg: "bg-amber-500" },
              { label: "AI", bg: "bg-primary text-primary-foreground" },
            ].map((item) => (
              <span
                key={item.label}
                className={`${item.bg} text-[10px] font-semibold px-2.5 py-1 rounded-sm`}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-colors group"
            >
              Start Free
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Watch 45-sec demo
            </a>
          </div>

          <p className="text-xs text-muted-foreground/60">No credit card required · Free plan available</p>
        </div>

        {/* ── Right: Dashboard mockup image with AI sidebar overlay ── */}
        <div className="flex-1 w-full min-w-0 relative">

          {/* Dashboard screenshot */}
          <div className="w-full rounded-sm overflow-hidden shadow-2xl border border-border/60">
            <Image
              src="/mockups/light/Dashboard.png"
              alt="KielHQ Smart Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto object-cover object-top dark:hidden"
              priority
            />
            <Image
              src="/mockups/dark/Dashboard.png"
              alt="KielHQ Smart Dashboard"
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
