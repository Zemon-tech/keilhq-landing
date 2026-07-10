"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Brain,
  Search,
  Calendar,
  MessageSquare,
  FileText,
  Code2,
  Zap,
} from "lucide-react";

export default function AICommandCenterPage() {
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
                Features · AI Assistant
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Your AI assistant that knows your workspace
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Built-in AI agents for task management, scheduling, GitHub integration, and web search. Chain-of-thought execution shows you exactly how decisions are made using your real data.
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

            {/* Interactive Mockup: AI Chain of Thought */}
            <div className="w-full max-w-4xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">AI Command Center</span>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Chain of Thought</span>
              </div>

              {/* User Query */}
              <div className="flex items-start gap-3 p-3 bg-background rounded-sm border border-border/40">
                <div className="size-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold shrink-0">
                  U
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-white">"Create a task for fixing the login bug, make it urgent and due tomorrow, then schedule my unscheduled tasks for next week"</p>
                </div>
              </div>

              {/* AI Chain of Thought Steps */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-sm border border-emerald-200 dark:border-emerald-800/30">
                  <div className="size-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <Zap className="size-3" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-200">Task Agent: Creating urgent task</p>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-300">✓ Created task "Fix login bug" with priority: Urgent, due: tomorrow</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-sm border border-blue-200 dark:border-blue-800/30">
                  <div className="size-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                    <Calendar className="size-3" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-200">Scheduler Agent: Finding unscheduled tasks</p>
                    <p className="text-[11px] text-blue-700 dark:text-blue-300">✓ Found 5 unscheduled tasks, analyzing calendar for next week</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-violet-50 dark:bg-violet-950/20 rounded-sm border border-violet-200 dark:border-violet-800/30">
                  <div className="size-6 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 flex items-center justify-center shrink-0">
                    <Check className="size-3" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-violet-800 dark:text-violet-200">Scheduler Agent: Auto-scheduling complete</p>
                    <p className="text-[11px] text-violet-700 dark:text-violet-300">✓ Scheduled 5 tasks across 4 available time slots next week</p>
                  </div>
                </div>
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
                Specialized agents.<br />Real workspace context.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KeilHQ's AI system uses specialized agents that understand your tasks, calendar, documents, and integrations to provide contextual assistance.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Brain className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Supervisor AI</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Master agent that routes requests to specialized sub-agents and coordinates multi-step workflows across your workspace.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Task Manager Agent</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Create, update, search, and organize tasks with natural language. Understands priorities, due dates, and assignments automatically.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Scheduler Agent</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Analyzes your calendar, finds free slots, and auto-schedules unscheduled tasks based on priority and time estimates.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Code2 className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">GitHub Agent</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  List issues and PRs, get issue details, create GitHub issues from KeilHQ tasks, and manage repository workflows.
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
                See exactly how<br />decisions are made
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Chain-of-thought execution shows each step in real-time, so you understand exactly what the AI is doing with your data.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Chat Agent reads channels and sends messages on your behalf with natural language commands.",
                "Motion Agent creates, reads, and searches your documentation pages with full content understanding.",
                "Web Search Agent performs live searches using Exa API to find current information and resources.",
                "All agents work together through PostgreSQL memory storage for multi-turn conversations and context retention.",
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