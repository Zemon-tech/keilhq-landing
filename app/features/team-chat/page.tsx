"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  MessageSquare,
  Zap,
  Sparkles,
  Users,
} from "lucide-react";

export default function TeamChatPage() {
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
                Features · Chat
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Real-Time Team Chat
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Replace Slack. KeilHQ brings real-time group channels and direct messaging right next to your team&apos;s active tasks and documents.
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

            {/* Interactive Mockup: CSS Chat feed representation */}
            <div className="w-full max-w-lg mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 flex flex-col gap-4 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-3 border-b border-border/30">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white">Task Thread Discussion</span>
                  <span className="text-[10px] text-muted-foreground">Linked to: Verify database migration script</span>
                </div>
                <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm">2 participants</span>
              </div>

              {/* Chat Bubble List */}
              <div className="flex flex-col gap-3 font-sans">
                {/* Bubble 1 */}
                <div className="flex items-start gap-2.5 max-w-[85%]">
                  <div className="size-6 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    PN
                  </div>
                  <div className="flex flex-col gap-0.5 bg-secondary text-secondary-foreground rounded-lg p-2.5 text-[12px] border border-border/40 shadow-2xs">
                    <span className="font-semibold text-zinc-900 dark:text-white text-[10px]">Priya Nair</span>
                    <span>Let&apos;s make sure the migration script logs the elapsed execution time for schema verification. We need this for audit reports.</span>
                  </div>
                </div>

                {/* Bubble 2 */}
                <div className="flex items-start gap-2.5 max-w-[85%] self-end flex-row-reverse">
                  <div className="size-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    SO
                  </div>
                  <div className="flex flex-col gap-0.5 bg-primary text-primary-foreground rounded-lg p-2.5 text-[12px] shadow-2xs">
                    <span className="font-semibold text-[10px] text-white">Sam Okafor</span>
                    <span>Added it. The timer logs are now outputting to stdout correctly in the script. Running test cases next.</span>
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
                Contextual channels.<br />Instant alignments.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KeilHQ brings communication directly into your projects, making discussions and files contextual.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Group Channels</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Establish group channels dedicated to specific client projects, team areas, or custom topics.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Direct Messaging</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Connect instantly via private 1:1 direct messages or establish custom group DMs with unread indicators.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Socket.io Engine</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  High-speed Socket.io connection delivers chat notifications and message events in real-time.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Connected Feed</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Chat threads link directly inside the tasks, documents, and calendar events they describe.
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
                Keep your team in sync<br />without the noise
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Eliminate status meetings. Integrated chat streams keep everyone aligned in real-time.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Never miss a chat ping with unread badges and contextual workspace mentions.",
                "Database-level client spaces isolate channels and protect private details.",
                "WebSocket delivery registers message receipts across the team in milliseconds.",
                "Tied directly to the Clarity Engine to track task discussions and decisions.",
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
