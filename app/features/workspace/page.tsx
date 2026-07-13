"use client";

import Image from "next/image";

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
    <>
      <Image
        src="/mockups/light/Org & Ws switching Light.png"
        alt="Workspace & Teams"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Org & Ws Switching Dark.png"
        alt="Workspace & Teams"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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
