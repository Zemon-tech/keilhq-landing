"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Building2,
  Layers,
  Settings,
  Keyboard,
  UserPlus,
  Search,
} from "lucide-react";

export default function WorkspacePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ── SECTION 1: HERO & INTERACTIVE MOCKUP ── */}
        <section className="w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Features · Workspace
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Every team, every space, one shell
            </h1>

            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              KeilHQ is built around Organisations and Spaces. Your sidebar, settings, and onboarding flow keep every task, doc, and message scoped to the right context.
            </p>

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

            {/* Interactive Mockup: Org → Space hierarchy */}
            <div className="w-full max-w-4xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">App Sidebar · Space Switcher</span>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Org → Space</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background border border-border/50 rounded-sm flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">Acme Corp</span>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded-xs font-bold uppercase">Active</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-6">
                    {["General ✓", "Engineering", "Design"].map((space) => (
                      <span key={space} className="text-[11px] text-muted-foreground">{space}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-background border border-border/50 rounded-sm flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">Navigation</span>
                  {["Dashboard", "Tasks", "Motion", "Notifications"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[11px] text-zinc-700 dark:text-zinc-300">
                      <div className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      {item}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                    <Search className="size-3 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">Quick search…</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/20">
                {["Create org", "Join via token", "Theme toggle", "Profile settings"].map((action) => (
                  <span key={action} className="text-[9px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-xs font-medium">
                    {action}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: CAPABILITIES ── */}
        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Structured context.<br />Built for teams.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Personal mode is always available. Add organisations, create spaces, and invite teammates — every API call respects your active org and space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Org & Space Model</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Nested org switcher with checkmarks on active space. Create orgs with auto-generated General space or join via invitation token.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Settings className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Settings Dialog</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Account, preferences, AI assistant, task defaults, notification toggles, connectors, sessions, billing, and org management — all in one place.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <UserPlus className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Onboarding Wizard</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Welcome flow for new users: display name, plan selection, first organisation, and team invites before landing on the dashboard.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Keyboard className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Keyboard Shortcuts</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Navigate dashboard, tasks, motion, chat, notifications, meetings, and settings with full keyboard control. Reference panel via ⌘/.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: CHECKLIST ── */}
        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Platform features<br />that power everything
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                The application shell is persistent across every page — sidebar navigation, real-time notification badges, and meeting minimised pills included.
              </p>
            </div>

            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Org management: create, join, invite tokens, member roles (Owner, Admin, Member), and space privacy controls.",
                "Settings cover appearance, time format, calendar preferences, AI toggles, task section defaults, and per-type notification controls.",
                "Sidebar search for quick lookup, theme toggle (Light / Dark / System), and profile photo upload.",
                "Meeting Studio minimises to a sidebar pill with elapsed time — restore with one click or ⌘M.",
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
