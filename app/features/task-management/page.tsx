"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Lock,
  Layers,
  Users,
  Grid,
  TrendingUp,
} from "lucide-react";

export default function TaskManagementPage() {
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
                Features · Tasks
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Hard dependencies. Real-time delivery.
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Plan, track, and complete tasks with strict blocker validation and native sprint structures that prevent unfinished items from sliding by.
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

            {/* Interactive Mockup: CSS Blocked Task Board representation */}
            <div className="w-full max-w-4xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Active Blocker Pipeline</span>
                <span className="text-[10px] bg-rose-500/10 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Validation Active</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Blocked Card */}
                <div className="p-5 rounded-sm border border-rose-500/20 bg-background flex flex-col gap-4 relative">
                  <div className="absolute top-4 right-4 bg-rose-500/10 text-rose-600 px-2 py-0.5 rounded-xs text-[9px] font-bold uppercase tracking-wider">
                    Blocked
                  </div>
                  <div className="flex flex-col gap-1 pr-12">
                    <span className="text-[11px] font-bold uppercase text-muted-foreground">Sprint 4 Deliverable</span>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white">Deploy staging container cluster & verify SSL endpoints</span>
                  </div>
                  <div className="border-t border-border/40 pt-4 mt-1 flex items-center gap-2 text-[11px] text-rose-600 font-medium">
                    <Lock className="size-3.5" />
                    <span>Locked until &ldquo;Verify database migration script&rdquo; completes</span>
                  </div>
                </div>

                {/* Blocker Card (Prerequisite) */}
                <div className="p-5 rounded-sm border border-emerald-500/20 bg-background flex flex-col gap-4 relative">
                  <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-xs text-[9px] font-bold uppercase tracking-wider animate-pulse">
                    Active Blocker
                  </div>
                  <div className="flex flex-col gap-1 pr-12">
                    <span className="text-[11px] font-bold uppercase text-muted-foreground">Sprint 4 Requirement</span>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white">Verify database migration script & export schema diffs</span>
                  </div>
                  <div className="border-t border-border/40 pt-4 mt-1 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-muted-foreground">Assignee: Sam Okafor</span>
                    <span className="text-[10px] bg-secondary text-foreground px-2 py-0.5 rounded-xs font-semibold">Priority: Urgent</span>
                  </div>
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
                Built to enforce<br />project progress.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KielHQ implements hard limits at the database schema level so you can rest assured dependencies are respected.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Lock className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Hard Validation</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Prevent tasks from being completed until their pre-selected prerequisites are marked done.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Grid className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Visual Boards</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Manage work via Kanban lists, Gantt charts, and timeline roadmaps synchronized instantly via web sockets.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Sprint Cycles</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Plan execution timelines and configure automatic rollover for incomplete items at sprint boundaries.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Workspace Admin</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Grant direct guest access to clients or external teams with complete data-boundary protection.
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
                Designed for high-speed<br />engineering teams
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Combine chat threads, documents, and blocker timelines into one single database element.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Create tasks instantly from discussion channel logs or audio transcripts.",
                "Specify custom priority categories (Urgent, High, Medium, Low) with visual status indicators.",
                "Enforces strict data isolation rules preventing multi-client boundary leaks.",
                "Export complete task histories and audit trails for security compliance.",
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
