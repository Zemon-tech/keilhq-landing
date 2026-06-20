"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Sparkles,
  Calendar,
  Layers,
  AlertTriangle,
  EyeOff,
} from "lucide-react";

export default function SmartDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col pt-28">

        {/* ── SECTION 1: HERO & INTERACTIVE MOCKUP ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Features · Dashboard
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Know exactly what to work on right now
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              The smart dashboard unifies your tasks, meetings, and documents into a single ranked list, updated in real time by active status.
            </p>

            {/* CTA button */}
            <div className="mt-2">
              <Link 
                href="https://app.keilhq.in/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
              >
                Get Started Free
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Interactive Mockup: CSS Smart Dashboard representation */}
            <div className="w-full max-w-4xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Active Focus Timeline</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">AI Ranked</span>
              </div>
              
              <div className="flex flex-col gap-3">
                {/* Task Item 1 - Urgent & Blocker */}
                <div className="p-4 rounded-sm border border-border/50 bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <span className="size-5 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">!</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">Review client-ready contracts for series funding release</span>
                      <span className="text-[10px] text-muted-foreground">Blocked by: Alex Rivera approval</span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-bold uppercase rounded-xs tracking-wider shrink-0 w-fit">Urgent Blocker</span>
                </div>

                {/* Task Item 2 - In progress */}
                <div className="p-4 rounded-sm border border-border/50 bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <span className="size-5 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="size-3" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">Refactor dashboard background theme settings handler</span>
                      <span className="text-[10px] text-muted-foreground">Integration active · 4 commits pending</span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-bold uppercase rounded-xs tracking-wider shrink-0 w-fit">Active Sprint</span>
                </div>

                {/* Task Item 3 - Calendar Meeting */}
                <div className="p-4 rounded-sm border border-border/50 bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <span className="size-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="size-3" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">Client Weekly Retrospective: Sprint 4 Signoff</span>
                      <span className="text-[10px] text-muted-foreground">Starts in 15 mins · Join meeting via Slack</span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold uppercase rounded-xs tracking-wider shrink-0 w-fit">Calendar Meeting</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: CAPABILITIES (Grid matching Phase 2) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Heading */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Priority buckets.<br />Contextual decisions.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                The smart dashboard ranks your work automatically using active context, so you know exactly where to begin.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Priority Buckets</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Ranks work into Immediate (24-48h), Today, Blocked, and Backlog buckets to organize daily focus.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Inline AI Chat</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Query the assistant from the dashboard for answers grounded in your active tasks, docs, and calendar.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Blocker Highlights</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Automatically surfaces tasks that are stuck waiting on prerequisites to resolve.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Mastra Orchestration</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Coordinated by Mastra Core agents to interact with tasks, channels, motion documents, and calendar slots.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: CHECKLIST (2-column layout matching Phase 3) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side copy */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Integrate your day<br />in one workspace
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KielHQ parses calendars, sprint files, and task logs to compose your optimal focus list automatically.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Urgent deliverables due within 24-48 hours roll into Immediate status instantly.",
                "Google Calendar integration maps task schedules and detects slot conflicts.",
                "Orchestrates specialized sub-agents to search, lists, schedules, and link documents.",
                "Postgres memory storage supports multi-turn assistant discussions directly on the board.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5" />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
