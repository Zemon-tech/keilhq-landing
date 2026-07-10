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

      <main className="flex-1 flex flex-col">

        {/* ── SECTION 1: HERO & INTERACTIVE MOCKUP ── */}
        <section className="w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12 animate-fade-rise">
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
              The Dashboard Panel gives you a live workspace snapshot — a 3D wheel picker with six context cards, real-time stats, and a live clock that respects your time format preference.
            </p>

            {/* CTA button */}
            <div className="mt-2">
              <Link
                href="https://app.Keilhq.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
              >
                Get Started Free
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Interactive Mockup: Dashboard Panel wheel picker */}
            <div className="w-full max-w-4xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Dashboard Panel · Wheel Picker</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Live</span>
                  <span className="text-[11px] font-mono text-muted-foreground">2:34 PM</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Active wheel card */}
                <div className="p-4 rounded-sm border border-indigo-500/30 bg-background flex flex-col gap-2 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-indigo-600 tracking-wider">Current Focus</span>
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white">Fix login bug — API token refresh</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] px-1.5 py-0.5 bg-rose-500/10 text-rose-600 rounded-xs font-bold uppercase">Urgent</span>
                    <span className="text-[10px] text-muted-foreground">Due tomorrow</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Urgent", count: 3, className: "text-rose-600" },
                    { label: "Replies", count: 5, className: "text-blue-600" },
                    { label: "Queued", count: 8, className: "text-emerald-600" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-sm border border-border/50 bg-background text-center">
                      <div className={`font-display text-xl font-bold ${stat.className}`}>{stat.count}</div>
                      <div className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other wheel cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Immediate Blockers", "Needs Reply", "Next Event", "Quick Capture", "Up Next"].map((card) => (
                  <div key={card} className="p-2.5 rounded-sm border border-border/40 bg-background/60 text-[10px] font-medium text-muted-foreground">
                    {card}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: CAPABILITIES (Grid matching Phase 2) ── */}
        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Heading */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Six cards.<br />One glance.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Scroll the 3D wheel picker to cycle through your most important context — from today&apos;s top priority to messages waiting for your reply.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Wheel Picker Cards</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Six scrollable cards: Current Focus, Immediate Blockers, Needs Reply, Next Event, Quick Capture, and Up Next — each linking to the relevant task, chat, or event.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">AI Command Centre</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  The HeroSection below the panel lets you query the Supervisor AI with file attachments, conversation history, and chain-of-thought tool execution.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Live Stats Row</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Urgent count (red), replies awaiting (blue), and today&apos;s queued tasks (green) update in real time alongside a live clock with 12h/24h format support.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Quick Capture</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  One-tap task creation from the dashboard wheel — opens the create dialog without leaving your command centre.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: CHECKLIST (2-column layout matching Phase 3) ── */}
        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left side copy */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Integrate your day<br />in one workspace
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KeilHQ parses calendars, sprint files, and task logs to compose your optimal focus list automatically.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Current Focus card shows your #1 priority task for today with status, due date, and one-click navigation.",
                "Needs Reply card surfaces chat messages and task comments sent to you that haven't been answered yet.",
                "Next Event card displays the upcoming calendar event with start time and Google Meet link if generated.",
                "Stats row links urgent count to filtered tasks, replies to chat channels, and queued to today's task queue.",
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
