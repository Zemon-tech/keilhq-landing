"use client";

import Image from "next/image";

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
    <>
      <Image
        src="/mockups/light/Motion Light.png"
        alt="Motion Docs & Notes"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Motion Dark.png"
        alt="Motion Docs & Notes"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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
