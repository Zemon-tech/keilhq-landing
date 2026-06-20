"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Bell,
  Mail,
  Filter,
  ShieldAlert,
} from "lucide-react";

export default function NotificationsPage() {
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
                Features · Alerts
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Real-Time Notifications
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Stay in the loop without being overwhelmed. KielHQ filters alerts intelligently so you only hear about critical updates that impact your work.
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

            {/* Interactive Mockup: CSS Notification feed representation */}
            <div className="w-full max-w-lg mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 flex flex-col gap-4 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-3 border-b border-border/30">
                <div className="flex items-center gap-2">
                  <Bell className="size-4 text-muted-foreground" />
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white">Workspace Activity Log</span>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Filtered</span>
              </div>

              {/* Feed items */}
              <div className="flex flex-col gap-3 font-sans text-xs">
                {/* Item 1 */}
                <div className="p-3 bg-background border border-border/50 rounded-sm flex items-center justify-between gap-4 shadow-2xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-zinc-900 dark:text-white">Priya Nair mentioned you in spec/sprint-4-specs.md</span>
                    <span className="text-[10px] text-zinc-400">&ldquo;Sam Okafor to verify migration script by Monday.&rdquo;</span>
                  </div>
                  <span className="text-[9px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-sm shrink-0 w-fit font-bold uppercase tracking-wider">Mention</span>
                </div>

                {/* Item 2 */}
                <div className="p-3 bg-background border border-border/50 rounded-sm flex items-center justify-between gap-4 shadow-2xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-zinc-900 dark:text-white">Task Completed: Configure SSL endpoints</span>
                    <span className="text-[10px] text-zinc-400">Completed by Luca Bianchi · Staging active</span>
                  </div>
                  <span className="text-[9px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm shrink-0 w-fit font-bold uppercase tracking-wider">Update</span>
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
                Filter distraction.<br />Stay aligned.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KielHQ provides granular notification controls so you only hear about critical updates that impact your sprint items.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Bell className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Triggers</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Get notified when a task is assigned to you, a message is received, a note is shared, status changes, or you are mentioned.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Unread Badges</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Stay updated on pending notifications at a glance with clean unread count badges in the workspace sidebar.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Clear Controls</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Declutter your notification tray instantly with dedicated mark-all-read and clear-all action items.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Preferences</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Configure custom user-specific notification filters to control exactly what updates trigger a workspace notification.
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
                Keep your team focused<br />on execution
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Eliminate general notification fatigue. Fast WebSocket pipelines deliver direct in-app updates instantly.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "WebSocket infrastructure syncs in-app alerts across tabs in under 50ms.",
                "Subscribe to specific client files, tasks, or spaces to track updates.",
                "Enterprise-grade role limits prevent workspace notification leaks.",
                "Custom notification silence intervals for uninterrupted focus sessions.",
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
