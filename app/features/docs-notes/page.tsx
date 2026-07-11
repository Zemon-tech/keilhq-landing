"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Heading1, Sparkles, Link2, FolderKanban } from "lucide-react";

export default function DocsNotesPage() {
  const capabilities = [
    {
      icon: Heading1,
      title: "Block Editor",
      desc: "Keyboard-first editor supporting text, headings, code blocks, toggles, callouts, and cover images (built on TipTap).",
    },
    {
      icon: Sparkles,
      title: "Socket Collaboration",
      desc: "Edit documents simultaneously with team members in real-time, backed by Socket.io and active cursor tracking.",
    },
    {
      icon: Link2,
      title: "Notion Sync",
      desc: "OAuth or token connections let you import Notion pages, export Motion files, and sync content bidirectionally.",
    },
    {
      icon: FolderKanban,
      title: "Nested Hierarchies",
      desc: "Build complete, organized team directories using cover images, emojis, and deep subpage directory trees.",
    },
  ];

  const checklist = [
    "Write comfortably with customized full-width or compact small-text layouts.",
    "Discuss specifications directly via comment threads attached to individual document blocks.",
    "Lock pages to read-only state when final specs and project blueprints are signed off.",
    "Configure cross-space sharing boundaries to grant view or edit permissions to other spaces.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 sm:p-8 flex flex-col gap-6 text-left">
      {/* Editor Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500 font-mono">motion/sprint-4-specs.md</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span className="text-[10px] text-zinc-400 font-mono">Live Sync</span>
        </div>
      </div>

      {/* Title & Document content */}
      <div className="flex flex-col gap-4 font-sans">
        <h3 className="font-sans text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
          Product Launch Specifications: Stage 2
        </h3>

        <p className="text-xs text-zinc-400 leading-relaxed max-w-[65ch]">
          This specification outlines the deployment dependencies and staging requirements for the upcoming alpha release.
        </p>

        {/* Embedded task check list */}
        <div className="border border-white/[0.05] rounded-sm p-4 bg-zinc-950/20 flex flex-col gap-3 my-2 shadow-2xs">
          <span className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wider block">Embedded Task Reference</span>

          <div className="flex items-center justify-between gap-4 border-b border-white/[0.05] pb-2">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</div>
              <span className="text-xs text-zinc-300 font-medium line-through decoration-zinc-500">Configure SSL endpoints on Cloudflare edge</span>
            </div>
            <span className="text-[9px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-sm uppercase tracking-wider font-semibold">Done</span>
          </div>

          <div className="flex items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded border border-rose-500/20 bg-rose-500/5 text-rose-400 flex items-center justify-center font-bold text-[10px]">!</div>
              <span className="text-xs text-zinc-300 font-medium">Verify production migration scripts output schema diffs</span>
            </div>
            <span className="text-[9px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">Blocked</span>
          </div>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed max-w-[65ch]">
          Once migration scripts are certified, please notify the release manager for automated deployment hooks execution.
        </p>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="4.0"
      eyebrowText="Motion Docs"
      title="Notion-quality docs. Built right in."
      subHeroTitle="Keyboard-first document editor connected to active sprints"
      subHeroDesc="Meet Motion. KeilHQ's native keyboard-first document editor connects your team's knowledge base directly to active sprints, tasks, and discussions. Embed references, tag blocks, and edit concurrently."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Motion Docs"
      mockup={mockup}
      capabilitiesTitle="Connected knowledge. Actionable details."
      capabilitiesDesc="Forget isolated documentation silos. Motion integrates rich-text block editing directly to active tasks and space permissions."
      capabilitiesGrid={capabilities}
      checklistTitle="Keep your workspace fully aligned"
      checklistDesc="Unify product specifications, team guides, and meeting transcripts inside one integrated knowledge canvas."
      checklistItems={checklist}
      currentIndex={3}
    />
  );
}
