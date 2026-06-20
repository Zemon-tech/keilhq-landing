"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Mic,
  Database,
  Sparkles,
  Search,
} from "lucide-react";

export default function MeetingRecorderPage() {
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
                Features · Meetings
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Auto-transcribe. Auto-action.
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Capture meeting audio, transcribe discussions, and automatically extract tasks, summaries, and action items.
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

            {/* Interactive Mockup: CSS Audio Wave & Transcript representation */}
            <div className="w-full max-w-2xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 flex flex-col gap-5 shadow-sm select-none text-left">
              {/* Audio Controls Mockup */}
              <div className="flex items-center justify-between bg-background border border-border/40 p-4 rounded-sm shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center animate-pulse">
                    <Mic className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">Client Kickoff Sync.wav</span>
                    <span className="text-[10px] text-muted-foreground">Elapsed: 42:15 · Recording active</span>
                  </div>
                </div>

                {/* Animated wave bars */}
                <div className="flex items-center gap-0.5 h-6">
                  <div className="w-0.5 h-4 bg-zinc-400 dark:bg-zinc-500 rounded-sm animate-bounce" style={{ animationDelay: '100ms' }} />
                  <div className="w-0.5 h-6 bg-zinc-600 dark:bg-zinc-300 rounded-sm animate-bounce" style={{ animationDelay: '200ms' }} />
                  <div className="w-0.5 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-sm animate-bounce" style={{ animationDelay: '300ms' }} />
                  <div className="w-0.5 h-5 bg-zinc-500 dark:bg-zinc-400 rounded-sm animate-bounce" style={{ animationDelay: '400ms' }} />
                  <div className="w-0.5 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-sm animate-bounce" style={{ animationDelay: '500ms' }} />
                </div>
              </div>

              {/* Transcript Extract */}
              <div className="flex flex-col gap-3 font-sans text-xs text-muted-foreground">
                <div className="flex gap-2">
                  <span className="font-bold text-zinc-900 dark:text-white shrink-0">12:15 (Alex):</span>
                  <span>We will push staging deployment to Wednesday, since the migration validation script is still blocked.</span>
                </div>
                <div className="flex gap-2 border-l-2 border-emerald-500/35 pl-3 py-1 bg-emerald-500/[0.01]">
                  <span className="font-bold text-zinc-900 dark:text-white shrink-0">12:30 (AI):</span>
                  <span className="text-zinc-800 dark:text-zinc-300 font-medium">Auto-extracted action: Sam Okafor to verify migration script by Monday.</span>
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
                Hands-off capture.<br />Immediate specs.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KielHQ transcribes audio clips using advanced speech pipelines, mapping discussions to your sprint trackers.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Mic className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Local Transcript</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  High-fidelity local audio processing model that isolates and attributes speech to different speakers.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">AI Extraction</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Automatically translates conversation notes into task cards, specifications, and client summaries.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Database className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Secure Storage</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Encrypts meeting recordings and indexes transcripts in isolated database buckets.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Search className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Deep Search</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Index and query text fragments across historical meetings to trace exact product decisions.
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
                Make meetings<br />actionable again
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Eliminate manual documentation. Audio transcript insights sync straight to your task tracker.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Integrates directly with Zoom, Google Meet, and Microsoft Teams calendar feeds.",
                "High-performance TLS 1.3 in-transit and AES-256 at-rest database encryption.",
                "Export extracted action points straight into active scrum/kanban sprint cycles.",
                "Supports multi-language transcription and translation workflows.",
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
