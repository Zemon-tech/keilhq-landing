"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Check,
  LayoutDashboard,
  ListTodo,
  FileText,
  MessageSquare,
  Mic,
  Sparkles,
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
    title: "KeilHQ AI with your actual data",
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
    <main className="flex-1 flex flex-col">

        {/* ─── HERO & CONTENT ─── */}
        <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl w-full mx-auto">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit mb-6">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
                7,000+ teams — no credit card required
              </span>
            </div>

            <h1
              className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] text-foreground tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              See KeilHQ in action — live, with your team
            </h1>
            <p className="text-[15px] font-medium text-muted-foreground leading-relaxed max-w-xl mb-10">
              Book a 30-minute live walkthrough. We'll show you how KeilHQ replaces your entire tool stack and answer every question you have.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left column */}
              <div className="flex flex-col gap-10">

                {/* What we cover */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-widest">
                    What we'll cover
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {demoFeatures.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex flex-col gap-3 p-6 rounded-lg border border-border/50 bg-secondary/20 shadow-sm"
                      >
                        <feature.icon className="size-5 text-foreground shrink-0" />
                        <p className="text-[15px] font-semibold text-foreground">{feature.title}</p>
                        <p className="text-[14px] text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-widest">
                    What teams say after their demo
                  </h2>
                  <div className="flex flex-col gap-4">
                    {testimonials.map((t) => (
                      <div
                        key={t.author}
                        className="p-6 rounded-lg border border-border/50 bg-secondary/20 flex flex-col gap-3 shadow-sm"
                      >
                        <p className="text-[14px] text-muted-foreground leading-relaxed italic">
                          "{t.quote}"
                        </p>
                        <p className="text-[13px] font-semibold text-foreground">{t.author}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right: form card */}
              <div className="lg:sticky lg:top-32">
                <div className="bg-secondary/20 border border-border/50 rounded-lg p-6 sm:p-8 flex flex-col gap-6 shadow-sm w-full">
                  {formStatus === "sent" ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <div className="size-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Check className="size-6 text-emerald-500" />
                      </div>
                      <p className="text-[18px] font-semibold text-foreground">You're booked!</p>
                      <p className="text-[14px] text-muted-foreground max-w-xs">
                        Check your email — we've sent a calendar invite with the meeting link. See you soon.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-[16px] font-semibold text-foreground">Book your walkthrough</h2>
                        <p className="text-[14px] text-muted-foreground">
                          30 minutes. No commitment. Real product, real team.
                        </p>
                      </div>
                      <form className="flex flex-col gap-4 mt-2">
                        {[
                          { label: "Full name", type: "text", placeholder: "Jane Smith", id: "demo-name" },
                          { label: "Work email", type: "email", placeholder: "jane@company.com", id: "demo-email" },
                          { label: "Team size", type: "text", placeholder: "e.g. 5–20 people", id: "demo-size" },
                        ].map((field) => (
                          <div key={field.label} className="flex flex-col gap-2">
                            <Label htmlFor={field.id} className="text-sm font-semibold text-foreground">
                              {field.label}
                            </Label>
                            <Input
                              id={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              className="bg-background/50"
                            />
                          </div>
                        ))}
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="demo-tools" className="text-sm font-semibold text-foreground">
                            What tools are you replacing? <span className="text-muted-foreground font-normal">(optional)</span>
                          </Label>
                          <Input
                            id="demo-tools"
                            type="text"
                            placeholder="e.g. Slack, Jira, Notion"
                            className="bg-background/50"
                          />
                        </div>
                        <Button
                          type="button"
                          onClick={() => setFormStatus("sent")}
                          className="w-full mt-4"
                        >
                          Book Live Demo
                        </Button>
                      </form>
                      <div className="flex flex-col gap-2 pt-5 mt-2 border-t border-border/50">
                        <p className="text-[12px] text-muted-foreground text-center">
                          No credit card · No commitment · Cancel anytime
                        </p>
                        <p className="text-[12px] text-center">
                          <span className="text-muted-foreground">Want to explore first? </span>
                          <Link
                            href="#"
                            className="text-foreground font-semibold hover:text-muted-foreground transition-colors"
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
        </section>

      </main>
  );
}
