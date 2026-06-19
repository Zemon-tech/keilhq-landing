"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  Check,
  LayoutDashboard,
  ListTodo,
  FileText,
  MessageSquare,
  Mic,
  Bell,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const demoFeatures = [
  {
    icon: LayoutDashboard,
    title: "Smart Dashboard & AI ranking",
    desc: "See how work surfaces automatically by priority — no manual sorting.",
  },
  {
    icon: ListTodo,
    title: "Task management & Clarity Engine",
    desc: "Objectives, success criteria, and hard dependency blocking.",
  },
  {
    icon: FileText,
    title: "Real-time docs & calendar sync",
    desc: "Motion docs, collaborative editing, and Google Calendar integration.",
  },
  {
    icon: Mic,
    title: "Meeting recorder & transcription",
    desc: "Auto-transcribe with speaker diarization. One click to task.",
  },
  {
    icon: Sparkles,
    title: "KielHQ AI with your actual data",
    desc: "AI that reads your tasks, workload, and sprint — not generic advice.",
  },
  {
    icon: MessageSquare,
    title: "Real-time team chat",
    desc: "Channels and DMs tied directly to the projects they belong to.",
  },
];

const testimonials = [
  {
    quote: "We cancelled Notion, Asana, and Slack within 30 days. The demo sold us in 20 minutes.",
    author: "CTO, 80-person startup",
  },
  {
    quote: "The AI ranking feature alone saves me 45 minutes every morning.",
    author: "Engineering Lead, remote team",
  },
  {
    quote: "I came in skeptical. By the end of the demo I was asking how to migrate our team.",
    author: "VP Product, Series A company",
  },
];

export default function DemoPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1">

        {/* ─── HERO ─── */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-100/80 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5 mb-8">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                7,000+ teams — no credit card required
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-900 dark:text-white leading-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              See KeilHQ in action — live, with your team
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
              Book a 30-minute live walkthrough. We&apos;ll show you how KeilHQ replaces your entire tool stack and answer every question you have.
            </p>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-8xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left column */}
              <div className="flex flex-col gap-10">

                {/* What we cover */}
                <div className="flex flex-col gap-5">
                  <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                    What we&apos;ll cover
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {demoFeatures.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex flex-col gap-2 p-4 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-white/[0.01]"
                      >
                        <feature.icon className="size-4 text-zinc-600 dark:text-zinc-300" />
                        <p className="text-xs font-semibold text-zinc-900 dark:text-white">{feature.title}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                    What teams say after their demo
                  </h2>
                  <div className="flex flex-col gap-3">
                    {testimonials.map((t) => (
                      <div
                        key={t.author}
                        className="p-5 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-white/[0.01] flex flex-col gap-2"
                      >
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500">{t.author}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right: form card */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-zinc-50/30 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/5 rounded-sm p-8 flex flex-col gap-5 shadow-sm">
                  {formStatus === "sent" ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <div className="size-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Check className="size-5 text-emerald-500" />
                      </div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-white">You&apos;re booked!</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
                        Check your email — we&apos;ve sent a calendar invite with the meeting link. See you soon.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-base font-semibold text-zinc-900 dark:text-white">Book your walkthrough</h2>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                          30 minutes. No commitment. Real product, real team.
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        {[
                          { label: "Full name", type: "text", placeholder: "Jane Smith", id: "demo-name" },
                          { label: "Work email", type: "email", placeholder: "jane@company.com", id: "demo-email" },
                          { label: "Team size", type: "text", placeholder: "e.g. 5–20 people", id: "demo-size" },
                        ].map((field) => (
                          <div key={field.label} className="flex flex-col gap-1.5">
                            <label htmlFor={field.id} className="text-xs font-semibold text-zinc-900 dark:text-white">
                              {field.label}
                            </label>
                            <input
                              id={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              className="w-full px-3 py-2.5 rounded-sm border border-zinc-200/80 dark:border-white/8 bg-white dark:bg-white/[0.03] text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>
                        ))}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="demo-tools" className="text-xs font-semibold text-zinc-900 dark:text-white">
                            What tools are you replacing? <span className="text-zinc-400 font-normal">(optional)</span>
                          </label>
                          <input
                            id="demo-tools"
                            type="text"
                            placeholder="e.g. Slack, Jira, Notion"
                            className="w-full px-3 py-2.5 rounded-sm border border-zinc-200/80 dark:border-white/8 bg-white dark:bg-white/[0.03] text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <button
                          onClick={() => setFormStatus("sent")}
                          className="w-full py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity mt-1 cursor-pointer active:scale-[0.98]"
                        >
                          Book Live Demo
                        </button>
                      </div>
                      <div className="flex flex-col gap-1.5 pt-1">
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
                          No credit card · No commitment · Cancel anytime
                        </p>
                        <p className="text-xs text-center">
                          <span className="text-zinc-400 dark:text-zinc-500">Want to explore first? </span>
                          <Link
                            href="#"
                            className="text-zinc-700 dark:text-zinc-300 font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                          >
                            Start free trial instead →
                          </Link>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
