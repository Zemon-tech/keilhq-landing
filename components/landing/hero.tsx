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
    <section className="relative w-full min-h-screen bg-white flex items-center">
      <div className="max-w-8xl w-full mx-auto px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 pt-28 pb-16">

        {/* ── Left: Copy ── */}
        <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 w-fit">
            <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-xs font-medium text-zinc-600">Trusted by 7,000+ teams globally</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-tight">
            The Operating System for Teams That Ship
          </h1>

          <p className="text-sm text-zinc-500 leading-relaxed">
            Replace Slack, Asana, Notion, and your calendar chaos. KielHQ is the one workspace where your team actually gets work done — with AI that reads your actual data.
          </p>

          {/* Feature pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { label: "Tasks", bg: "bg-blue-500" },
              { label: "Docs", bg: "bg-violet-500" },
              { label: "Chat", bg: "bg-emerald-500" },
              { label: "Calendar", bg: "bg-amber-500" },
              { label: "AI", bg: "bg-zinc-900" },
            ].map((item) => (
              <span
                key={item.label}
                className={`${item.bg} text-white text-[10px] font-semibold px-2.5 py-1 rounded-full`}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors group"
            >
              Start Free
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              Watch 45-sec demo
            </a>
          </div>

          <p className="text-xs text-zinc-400">No credit card required · Free plan available</p>
        </div>

        {/* ── Right: Dashboard mockup image with AI sidebar overlay ── */}
        <div className="flex-1 w-full min-w-0 relative">

          {/* Dashboard screenshot */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/60">
            <Image
              src="/mockups/dashboard.png"
              alt="KielHQ Smart Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto object-cover object-top"
              priority
            />
          </div>

          {/* Floating AI chat card — bottom-right overlay */}
          <div className="absolute bottom-4 right-4 w-64 bg-white rounded-xl shadow-xl border border-zinc-200 flex flex-col overflow-hidden text-[10px]">
            <div className="px-3 py-2 border-b border-zinc-100 bg-zinc-50 flex items-center justify-between">
              <span className="font-semibold text-zinc-800 text-xs">KielHQ AI</span>
              <span className="size-2 rounded-full bg-emerald-500" />
            </div>
            <div className="p-3 flex flex-col gap-2.5">
              {/* User prompt */}
              <div className="flex gap-2">
                <div className="size-5 rounded-full bg-zinc-900 flex items-center justify-center text-[7px] text-white font-bold shrink-0">SK</div>
                <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg p-2 text-zinc-600 leading-relaxed">
                  {typedPrompt || <span className="text-zinc-300">Ask anything...</span>}
                  {typedPrompt.length > 0 && typedPrompt.length < 65 && (
                    <span className="inline-block w-0.5 h-3 bg-zinc-400 ml-0.5 animate-pulse" />
                  )}
                </div>
              </div>

              {currentReasoningStep >= 1 && (
                <div className="flex flex-col gap-1 animate-in fade-in duration-300 pl-7">
                  <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                    <Check className="size-3 text-emerald-500 shrink-0" />
                    2 urgent tasks due today
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-4">Auth bug is blocking the deploy — tackle that first.</p>
                </div>
              )}
              {currentReasoningStep >= 2 && (
                <div className="flex flex-col gap-1 animate-in fade-in duration-300 pl-7">
                  <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                    <Check className="size-3 text-emerald-500 shrink-0" />
                    1 task blocked on dependency
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-4">Email campaign waiting on copy — pinged design in chat.</p>
                </div>
              )}
              {currentReasoningStep >= 3 && (
                <div className="flex flex-col gap-1 animate-in fade-in duration-300 pl-7">
                  <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                    <Check className="size-3 text-emerald-500 shrink-0" />
                    Your day is planned
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-4">Auth bug → proposal → design review after lunch.</p>
                </div>
              )}
            </div>
            <div className="px-3 pb-3">
              <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-400">
                <span className="flex-1">Ask KielHQ AI...</span>
                <span className="px-1.5 py-0.5 bg-zinc-200 rounded text-[9px] text-zinc-600 font-medium">Gemini</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
