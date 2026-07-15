"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";


interface Capability {
  iconName: string;
  title: string;
  desc: string;
}

interface FeatureLayoutProps {
  eyebrowIndex: string;
  eyebrowText: string;
  title: string;
  subHeroTitle: string;
  subHeroDesc: string;
  subHeroLink?: string;
  subHeroLinkText?: string;
  mockup: ReactNode;
  capabilitiesTitle: string;
  capabilitiesDesc: string;
  capabilitiesGrid: Capability[];
  checklistTitle: string;
  checklistDesc: string;
  checklistItems: string[];
  currentIndex: number; // 0 to 9 representing the features
}

const featuresList = [
  {
    index: "1.0",
    name: "AI Command Center",
    slug: "ai-command-center",
    tagline: "Built-in AI agents that execute sprints",
  },
  {
    index: "2.0",
    name: "Smart Dashboard",
    slug: "smart-dashboard",
    tagline: "Prioritize replies, blockers, and events instantly",
  },
  {
    index: "3.0",
    name: "Task Management",
    slug: "task-management",
    tagline: "Database-level blocker requirements and sprint state",
  },
  {
    index: "4.0",
    name: "Motion Docs",
    slug: "docs-notes",
    tagline: "Collaborative wikis and sprint-linked pages",
  },
  {
    index: "5.0",
    name: "Smart Calendar",
    slug: "calendar-integration",
    tagline: "Auto-schedule tasks into calendar slots",
  },
  {
    index: "6.0",
    name: "Team Chat",
    slug: "team-chat",
    tagline: "Real-time socket channels and direct messages",
  },
  {
    index: "7.0",
    name: "Meeting Recorder",
    slug: "meeting-recorder",
    tagline: "Record meetings with AI transcripts and notes",
  },
  {
    index: "8.0",
    name: "Integrations",
    slug: "integrations",
    tagline: "Connect with your entire developer tech stack",
  },
  {
    index: "9.0",
    name: "Notifications",
    slug: "notifications",
    tagline: "Never miss an update or blocker reply",
  },
  {
    index: "10.0",
    name: "Workspace",
    slug: "workspace",
    tagline: "One space to unify your entire team",
  },
];

export function FeatureLayout({
  eyebrowIndex,
  eyebrowText,
  title,
  subHeroTitle,
  subHeroDesc,
  subHeroLink,
  subHeroLinkText,
  mockup,
  capabilitiesTitle,
  capabilitiesDesc,
  capabilitiesGrid,
  checklistTitle,
  checklistDesc,
  checklistItems,
  currentIndex,
}: FeatureLayoutProps) {
  
  // Calculate next 4 features for the bottom navigation
  const nextFeatures = [];
  for (let offset = 1; offset <= 4; offset++) {
    const idx = (currentIndex + offset) % featuresList.length;
    nextFeatures.push(featuresList[idx]);
  }

  return (
    <main className="flex-1 flex flex-col items-center">
        {/* Ambient top mesh glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -5%, oklch(0.55 0.18 250 / 0.04), transparent)",
          }}
        />

        {/* ── SECTION 1: HERO & MOCKUP ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-16 lg:pb-24 flex flex-col gap-12 text-left">
          
          {/* Eyebrow index tag */}
          <div className="text-[12px] font-mono font-semibold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">
            {eyebrowIndex} &nbsp;{eyebrowText}
          </div>

          {/* Heading */}
          <h1
            className="font-sans text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium tracking-[-0.03em] leading-[1.05] text-zinc-900 dark:text-[#F7F8F8] max-w-[1100px]"
            style={{ textWrap: "balance" }}
          >
            {title}
          </h1>

          {/* Two column hook copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4 pt-8 border-t border-zinc-200/50 dark:border-white/[0.05]">
            <div className="lg:col-span-4">
              <h2 className="font-sans text-[20px] lg:text-[24px] font-medium tracking-[-0.03em] text-zinc-900 dark:text-[#F7F8F8] leading-tight">
                {subHeroTitle}
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-4">
              <p className="text-[17px] lg:text-[18px] font-normal leading-[1.55] text-zinc-500 dark:text-[#8A8F98] max-w-[65ch]">
                {subHeroDesc}
              </p>
              {subHeroLink && (
                <Link
                  href={subHeroLink}
                  className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8] hover:underline inline-flex items-center gap-1"
                >
                  {subHeroLinkText || "Learn more"} <span className="text-zinc-400 dark:text-zinc-600">+</span>
                </Link>
              )}
            </div>
          </div>

          {/* Massive Mockup area - containerless aspect with bottom shadow blend */}
          <div className="w-full relative rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.52)] mt-8">
            <div className="w-full relative">
              {mockup}
              {/* Subtle hairline edge-lit boundary */}
              <div className="absolute inset-0 rounded-lg border border-zinc-200/5 dark:border-white/[0.03] pointer-events-none" />
              
              {/* Bottom shadow blend */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </section>

        {/* ── SECTION 2: CAPABILITIES ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col lg:flex-row gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
          <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-4">
            <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-zinc-900 dark:text-[#F7F8F8]">
              {capabilitiesTitle}
            </h2>
            <p className="text-[15px] lg:text-[16px] text-zinc-500 dark:text-[#8A8F98] leading-[1.55] max-w-[36ch]">
              {capabilitiesDesc}
            </p>
          </div>

          {/* Capabilities Grid (4 clean top-border cards) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {capabilitiesGrid.map((item, idx) => {
              const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.Sparkles;
              return (
                <div key={idx} className="pt-6 border-t border-zinc-200/50 dark:border-white/[0.05] flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-[#F7F8F8]">
                    <IconComponent className="size-4" />
                    <h3 className="font-sans text-sm font-semibold tracking-tight uppercase">{item.title}</h3>
                  </div>
                  <p className="text-[13px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 3: CHECKLIST ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col lg:flex-row gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
          <div className="w-full lg:w-1/3 shrink-0">
            <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-zinc-900 dark:text-[#F7F8F8]">
              {checklistTitle}
            </h2>
            <p className="text-[15px] lg:text-[16px] text-zinc-500 dark:text-[#8A8F98] leading-[1.55] max-w-[36ch] mt-4">
              {checklistDesc}
            </p>
          </div>

          {/* Checklist list */}
          <div className="flex-1 flex flex-col gap-6">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5" />
                </div>
                <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: BOTTOM FEATURE NAVIGATION GRID ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 border-t border-zinc-200/50 dark:border-white/[0.05]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {nextFeatures.map((f) => (
              <div key={f.slug} className="flex flex-col gap-3 text-left">
                <span className="text-[11px] font-mono font-semibold text-zinc-400 dark:text-zinc-600">
                  {f.index} &nbsp;{f.name}
                </span>
                <h4 className="font-sans text-sm font-semibold tracking-tight text-zinc-900 dark:text-[#F7F8F8] leading-snug">
                  {f.tagline}
                </h4>
                <Link
                  href={`/features/${f.slug}`}
                  className="text-[12px] font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-[#F7F8F8] transition-colors mt-2"
                >
                  Learn more &nbsp;→
                </Link>
              </div>
            ))}
          </div>
        </section>

      </main>
  );
}
