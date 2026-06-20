"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  FileText,
  Sparkles,
  Link2,
  FolderKanban,
  Heading1,
} from "lucide-react";

export default function DocsNotesPage() {
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
                Features · Documents
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Notion-quality docs. Built right in.
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Meet Motion. KeilHQ&apos;s native keyboard-first document editor connects your team&apos;s knowledge base directly to active sprints, tasks, and discussions.
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

            {/* Interactive Mockup: CSS Editor representation */}
            <div className="w-full max-w-3xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              {/* Editor Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/30">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-muted-foreground" />
                  <span className="text-xs font-semibold text-zinc-500">motion/sprint-4-specs.md</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-[10px] text-muted-foreground font-mono">Live Sync</span>
                </div>
              </div>

              {/* Title & Document content */}
              <div className="flex flex-col gap-4 font-sans">
                <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
                  Product Launch Specifications: Stage 2
                </h2>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This specification outlines the deployment dependencies and staging requirements for the upcoming alpha release.
                </p>

                {/* Embedded task check list */}
                <div className="border border-border/60 rounded-sm p-4 bg-background flex flex-col gap-3 my-2 shadow-2xs">
                  <span className="text-[10px] font-semibold uppercase text-muted-foreground tracking-wider block">Embedded Task Reference</span>
                  
                  <div className="flex items-center justify-between gap-4 border-b border-border/20 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="size-4 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-[10px]">✓</div>
                      <span className="text-xs text-zinc-900 dark:text-white font-medium line-through decoration-muted-foreground/60">Configure SSL endpoints on Cloudflare edge</span>
                    </div>
                    <span className="text-[9px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm uppercase tracking-wider font-semibold">Done</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <div className="flex items-center gap-2">
                      <div className="size-4 rounded border border-rose-500/20 bg-rose-500/5 text-rose-600 flex items-center justify-center font-bold text-[10px]">!</div>
                      <span className="text-xs text-zinc-900 dark:text-white font-medium">Verify production migration scripts output schema diffs</span>
                    </div>
                    <span className="text-[9px] bg-rose-500/10 text-rose-600 px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">Blocked</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Once migration scripts are certified, please notify the release manager for automated deployment hooks execution.
                </p>
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
                Connected knowledge.<br />Actionable details.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Forget isolated documentation silos. Motion integrates rich-text block editing directly to active tasks and space permissions.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Heading1 className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Block Editor</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Keyboard-first editor supporting text, headings, code blocks, toggles, callouts, and cover images (built on TipTap).
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Socket Collaboration</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Edit documents simultaneously with team members in real-time, backed by Socket.io and active cursor tracking.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Link2 className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Notion Sync</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  OAuth or token connections let you import Notion pages, export Motion files, and sync content bidirectionally.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FolderKanban className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Nested Hierarchies</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Build complete, organized team directories using cover images, emojis, and deep subpage directory trees.
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
                Keep your workspace<br />fully aligned
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Unify product specifications, team guides, and meeting transcripts inside one integrated knowledge canvas.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Write comfortably with customized full-width or compact small-text layouts.",
                "Discuss specifications directly via comment threads attached to individual document blocks.",
                "Lock pages to read-only state when final specs and project blueprints are signed off.",
                "Configure cross-space sharing boundaries to grant view or edit permissions to other spaces.",
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
