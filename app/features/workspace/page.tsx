"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Layers, Settings, UserPlus, Keyboard, Building2, Search } from "lucide-react";

export default function WorkspacePage() {
  const capabilities = [
    {
      icon: Layers,
      title: "Org & Space Model",
      desc: "Nested org switcher with checkmarks on active space. Create orgs with auto-generated General space or join via invitation token.",
    },
    {
      icon: Settings,
      title: "Settings Dialog",
      desc: "Account, preferences, AI assistant, task defaults, notification toggles, connectors, sessions, billing, and org management — all in one place.",
    },
    {
      icon: UserPlus,
      title: "Onboarding Wizard",
      desc: "Welcome flow for new users: display name, plan selection, first organisation, and team invites before landing on the dashboard.",
    },
    {
      icon: Keyboard,
      title: "Keyboard Shortcuts",
      desc: "Navigate dashboard, tasks, motion, chat, notifications, meetings, and settings with full keyboard control. Reference panel via ⌘/.",
    },
  ];

  const checklist = [
    "Org management: create, join, invite tokens, member roles (Owner, Admin, Member), and space privacy controls.",
    "Settings cover appearance, time format, calendar preferences, AI toggles, task section defaults, and per-type notification controls.",
    "Sidebar search for quick lookup, theme toggle (Light / Dark / System), and profile photo upload.",
    "Meeting Studio minimises to a sidebar pill with elapsed time — restore with one click or ⌘M.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 sm:p-8 flex flex-col gap-6 text-left">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">App Sidebar · Space Switcher</span>
        <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Org → Space</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-zinc-950/20 border border-white/[0.05] rounded-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Building2 className="size-4 text-zinc-500" />
            <span className="text-xs font-semibold text-zinc-350">Acme Corp</span>
            <span className="text-[9px] bg-emerald-500/10 text-emerald-450 px-1.5 py-0.5 rounded-xs font-bold uppercase">Active</span>
          </div>
          <div className="flex flex-col gap-1.5 pl-6 font-mono text-[11px] text-zinc-500">
            {["General ✓", "Engineering", "Design"].map((space) => (
              <span key={space} className="text-[11px] text-zinc-500">{space}</span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-zinc-950/20 border border-white/[0.05] rounded-sm flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Navigation</span>
          {["Dashboard", "Tasks", "Motion", "Notifications"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[11px] text-zinc-400 font-sans">
              <div className="size-1.5 rounded-full bg-zinc-700" />
              {item}
            </div>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.05]">
            <Search className="size-3 text-zinc-650" />
            <span className="text-[10px] text-zinc-500">Quick search…</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
        {["Create org", "Join via token", "Theme toggle", "Profile settings"].map((action) => (
          <span key={action} className="text-[9px] bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded-xs font-medium">
            {action}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="10.0"
      eyebrowText="Workspace"
      title="Every team, every space, one shell"
      subHeroTitle="Structured context. Persistent application shell."
      subHeroDesc="KeilHQ is built around Organisations and Spaces. Your sidebar, settings, and onboarding flow keep every task, doc, and message scoped to the right context automatically."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Workspace"
      mockup={mockup}
      capabilitiesTitle="Structured context. Built for teams."
      capabilitiesDesc="Personal mode is always available. Add organisations, create spaces, and invite teammates — every API call respects your active org and space."
      capabilitiesGrid={capabilities}
      checklistTitle="Platform features that power everything"
      checklistDesc="The application shell is persistent across every page — sidebar navigation, real-time notification badges, and meeting minimised pills included."
      checklistItems={checklist}
      currentIndex={9}
    />
  );
}
