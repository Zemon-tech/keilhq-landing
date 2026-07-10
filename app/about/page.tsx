"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  Users,
  Eye,
  Sparkles,
  ArrowRight,
  Globe,
  Check,
  LayoutDashboard,
  ListTodo,
  FileText,
  MessageSquare,
  Calendar,
  Mic,
  Shield,
  Zap,
  Heart,
  Compass,
  Lock,
  Code,
} from "lucide-react";

// Team database matching app/team/page.tsx
const teamMembers = [
  { name: "Shivang Kandoi", role: "Co-founder & CEO", initials: "SK", bg: "bg-blue-100/80 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
  { name: "Satyajit Jena", role: "Co-founder & CTO", initials: "SJ", bg: "bg-violet-100/80 text-violet-800 dark:bg-violet-950/40 dark:text-violet-300" },
  { name: "Harshit Kundra", role: "COO", initials: "HK", bg: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" },
  { name: "Disha Jain", role: "Software Engineer", initials: "DJ", bg: "bg-amber-100/80 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" },
  { name: "Akshat Chowdhary", role: "AI Engineer", initials: "AC", bg: "bg-rose-100/80 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" },
  { name: "Naveen", role: "Software Engineer", initials: "NV", bg: "bg-sky-100/80 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300" },
  { name: "Krishna Jaiswal", role: "Software Engineer", initials: "KJ", bg: "bg-teal-100/80 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300" },
  { name: "Rohan Vashisth", role: "Software Engineer", initials: "RV", bg: "bg-indigo-100/80 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" },
  { name: "Shivansh Tiwari", role: "Software Engineer", initials: "ST", bg: "bg-orange-100/80 text-orange-800 dark:bg-orange-950/40 dark:text-orange-300" },
];

// Milestones for Section 7
const milestones = [
  { year: "2025", title: "KeilHQ Idea Born", desc: "Frustrated by jumping between Slack, Jira, and docs, the founders sketched the first concept of a truly integrated workspace." },
  { year: "2026", title: "The First MVP", desc: "Launched beta to 200 fast-moving startups. The immediate feedback validated our belief: teams don't want more tools, they want more clarity." },
  { year: "2026", title: "AI Command Center Integration", desc: "Integrated deep contextual AI agents to automatically scan tasks, resolve blockers, and synthesize meeting notes." },
  { year: "Future", title: "Global Collaboration Era", desc: "Building the standard software environment for modern, async-first companies worldwide." },
];

// Stats for Section 8
const stats = [
  { value: "7,000+", label: "Teams Worldwide", desc: "Active workspaces running sprints daily." },
  { value: "50+", label: "Integrations", desc: "Connecting code repositories, drives, and tools." },
  { value: "2M+", label: "AI Tasks Completed", desc: "Automated schedules, captured action items." },
  { value: "99.99%", label: "Platform Uptime", desc: "Enterprise readiness and high-availability." },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"slack" | "notion" | "asana" | "clickup">("slack");

  const migrationData = {
    slack: {
      title: "Switch from Slack",
      desc: "Stop losing critical project decisions in endless chat threads. KeilHQ links chat channels directly to tasks and docs, transforming noise into structured work.",
      bullets: ["Conversations turn into tasks in 1 click", "Threads directly update objective checklist state", "Context remains organized by space, not chronological feed"],
    },
    notion: {
      title: "Switch from Notion",
      desc: "Static wikis go out-of-date instantly. KeilHQ couples your documents directly to active developer task states and live calendar schedules to keep docs fresh.",
      bullets: ["Real-time collaborative editing side-by-side with tasks", "Automated link previews and workspace backreferences", "Zero context switching to verify task completion criteria"],
    },
    asana: {
      title: "Switch from Asana",
      desc: "Classic task lists are too soft. KeilHQ implements hard dependency blocking. You cannot complete a task if its block requirements are still open.",
      bullets: ["Hard database-enforced block states", "Clarity Engine: Objectives & Success Criteria required per ticket", "Derived block logic saves team admin overhead"],
    },
    clickup: {
      title: "Switch from ClickUp",
      desc: "Unbelievable layout clutter slows teams down. KeilHQ prioritizes a refined visual rhythm and instant command-K interactions that keep workspaces fast.",
      bullets: ["Zero-clutter high-end aesthetic layout", "Sub-100ms loading transitions across all pages", "Opinionated interface designed for focused builders"],
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Subtle background ambient mesh glow */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% -5%, oklch(0.55 0.18 250 / 0.04), transparent)",
          }}
        />

        {/* ── SECTION 1: HERO ── */}
        <section className="relative w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12 z-10 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Copy */}
            <div className="w-full lg:w-[540px] shrink-0 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit">
                <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
                  Building the future of work
                </span>
              </div>

              <h1 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.08] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
                One workspace to unify your entire team.
              </h1>

              <p className="text-[15px] font-medium tracking-[0.015em] text-muted-foreground leading-relaxed">
                KeilHQ was built to solve tool sprawl. We eliminate the friction of switching between chat, docs, issues, and calendars by creating a single, contextual workspace powered by AI that reads your actual data.
              </p>

              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://app.Keilhq.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[13px] font-semibold tracking-[0.01em] group active:scale-[0.97] transition-transform duration-150"
                >
                  Start free
                  <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/demo"
                  className="text-[13px] font-semibold tracking-[0.01em] text-muted-foreground hover:text-foreground transition-colors duration-150 group inline-flex items-center gap-1.5"
                >
                  Book a demo
                  <ArrowRight className="size-3 opacity-60 group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
              </div>
            </div>

            {/* Right: Premium dashboard illustration */}
            <div className="flex-1 w-full min-w-0 relative">
              {/* Double Bezel Card outer shell */}
              <div className="w-full bg-secondary/30 dark:bg-white/[0.02] border border-border/40 rounded-[1.5rem] p-2 shadow-2xl">
                {/* Inner Core */}
                <div className="w-full rounded-[calc(1.5rem-0.5rem)] overflow-hidden bg-background border border-border/50 relative aspect-[16/10]">
                  <Image
                    src="/mockups/light/Dashboard.png"
                    alt="KeilHQ Smart Dashboard Preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top dark:hidden"
                    priority
                  />
                  <Image
                    src="/mockups/dark/Dashboard.png"
                    alt="KeilHQ Smart Dashboard Preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top hidden dark:block"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: OUR STORY ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 bg-secondary/20 border-y border-border/40 z-10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.02em", textWrap: "balance" }}>
                We were tired of paying for six tools that don&apos;t talk to each other.
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-[14px] text-muted-foreground leading-relaxed">
              <p>
                Every day, builders context-switch hundreds of times. Decisions made in chat disappear before they reach task trackers. Project requirements are written in documents that are decoupled from active calendars. We spent hours in sync meetings just trying to align what was blocked.
              </p>
              <p>
                KeilHQ was born out of this frustration. We wanted to build something different: a workspace that has strong opinions, executes at sub-100ms speeds, and maintains perfect internal context. When chat, docs, calendar, tasks, and AI are built on the same database, your team spends time executing, not coordinating.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: MISSION & VISION ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                Purpose
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Our Mission, Vision &amp; Philosophy
              </h2>
            </div>

            {/* Mission & Vision double-bezel cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Mission Card */}
              <div className="bg-secondary/20 border border-border/40 rounded-[1.5rem] p-2 shadow-xs flex">
                <div className="bg-card w-full rounded-[calc(1.5rem-0.5rem)] p-6 flex flex-col gap-4 border border-border/20 text-left">
                  <div className="size-10 rounded-sm bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Users className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Our Mission</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To eliminate coordination tax and structural chaos so that builders, creators, and engineers can focus entirely on high-craft execution.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-secondary/20 border border-border/40 rounded-[1.5rem] p-2 shadow-xs flex">
                <div className="bg-card w-full rounded-[calc(1.5rem-0.5rem)] p-6 flex flex-col gap-4 border border-border/20 text-left">
                  <div className="size-10 rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Eye className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Our Vision</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To become the standard operating environment for modern organizations—creating a workspace that feels like a natural extension of your team.
                  </p>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="bg-secondary/20 border border-border/40 rounded-[1.5rem] p-2 shadow-xs flex">
                <div className="bg-card w-full rounded-[calc(1.5rem-0.5rem)] p-6 flex flex-col gap-4 border border-border/20 text-left">
                  <div className="size-10 rounded-sm bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                    <Sparkles className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Core Philosophy</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Clarity first, execution follows. We believe software should have opinionated structures that make it impossible to build without context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: WHAT WE BUILD ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 bg-secondary/20 border-y border-border/40 z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                Platform
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                What we build at KeilHQ
              </h2>
            </div>

            {/* Platform Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                { icon: Sparkles, title: "AI Command Center", desc: "Built-in AI agents that read your actual tasks, code state, and workload." },
                { icon: LayoutDashboard, title: "Smart Dashboard", desc: "A 3D wheel picker that prioritizes replies, blockers, and events instantly." },
                { icon: ListTodo, title: "Clarity Tasks", desc: "Tasks with mandatory success criteria and database-level blocker requirements." },
                { icon: FileText, title: "Motion Docs", desc: "Collaborative wikis and block-based documentation linked to active sprints." },
                { icon: Calendar, title: "Smart Calendar", desc: "Auto-scheduling calendar that schedules tasks into open slots automatically." },
                { icon: MessageSquare, title: "Integrated Chat", desc: "Real-time socket channels and direct messages tied directly to projects." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-lg border border-border/50 bg-background flex flex-col gap-3 hover:border-border transition-all duration-300 shadow-sm">
                  <div className="size-8 rounded-sm bg-secondary flex items-center justify-center text-foreground">
                    <item.icon className="size-4.5" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: OUR VALUES ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                Values
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Principles that guide our decisions
              </h2>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {[
                { icon: Heart, title: "Customer First", desc: "We spend time listing to user pain points, shipping fixes in days instead of planning cycles." },
                { icon: Compass, title: "Simplicity by Design", desc: "We actively choose layout restraint and remove elements that don't add execution clarity." },
                { icon: Zap, title: "Sub-100ms Speed", desc: "Performance is a feature. KeilHQ must respond instantly to maintain keyboard state." },
                { icon: Shield, title: "Absolute Trust", desc: "Your database compliance, data encryption, and operational privacy are non-negotiable." },
                { icon: Lock, title: "Extreme Ownership", desc: "We work in small, highly autonomous cycles where builders own projects from spec to deployment." },
                { icon: Code, title: "Quality & Craft", desc: "Every bezel, border highlight, and typography pair is polished with obsessive care." },
              ].map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="size-8 rounded-full bg-secondary/80 border border-border/50 flex items-center justify-center text-muted-foreground shrink-0">
                    <value.icon className="size-4" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-sm font-semibold text-zinc-900 dark:text-white">{value.title}</h3>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: MEET THE TEAM ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 bg-secondary/20 border-y border-border/40 z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                People
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Meet the builders
              </h2>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 w-full">
              {teamMembers.map((m) => (
                <div key={m.name} className="pt-6 border-t border-border/60 flex items-center gap-4">
                  <div className={`size-12 rounded-sm flex items-center justify-center text-sm font-bold shrink-0 ${m.bg}`}>
                    {m.initials}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[14px] font-semibold text-zinc-900 dark:text-white">{m.name}</span>
                    <span className="text-[12px] text-muted-foreground">{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: OUR JOURNEY ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 z-10">
          <div className="max-w-3xl mx-auto w-full flex flex-col gap-12 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                History
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Our Journey &amp; Milestones
              </h2>
            </div>

            {/* Vertical timeline */}
            <div className="relative border-l border-border pl-6 flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.title} className="relative flex flex-col gap-1.5">
                  {/* Timeline dot */}
                  <div className="absolute -left-[30px] top-1 size-2.5 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-background" />
                  
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold bg-secondary px-2.5 py-0.5 rounded-sm text-foreground">
                      {m.year}
                    </span>
                    <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-white">{m.title}</h3>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed max-w-xl">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: BY THE NUMBERS ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 bg-secondary/20 border-y border-border/40 z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                Scale
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                By the numbers
              </h2>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {stat.value}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-foreground">{stat.label}</span>
                    <span className="text-[11px] text-muted-foreground leading-normal">{stat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: WHY COMPANIES CHOOSE KEILHQ ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                Comparison
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Why teams switch to KeilHQ
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start w-full">
              {/* Left Selector Pills */}
              <div className="flex flex-col gap-2 shrink-0 lg:col-span-1">
                {(Object.keys(migrationData) as Array<keyof typeof migrationData>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left px-5 py-3.5 rounded-sm border text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === key
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-secondary/40 text-muted-foreground border-border/50 hover:bg-secondary/80 hover:text-foreground"
                    }`}
                  >
                    {migrationData[key].title}
                  </button>
                ))}
              </div>

              {/* Right Content Panel */}
              <div className="lg:col-span-2 bg-secondary/10 border border-border/40 rounded-[1.5rem] p-2 shadow-xs">
                <div className="bg-card w-full rounded-[calc(1.5rem-0.5rem)] p-8 border border-border/20 flex flex-col gap-6">
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
                    {migrationData[activeTab].title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {migrationData[activeTab].desc}
                  </p>
                  
                  <div className="w-full h-px bg-border/40 my-2" />

                  <div className="flex flex-col gap-4">
                    {migrationData[activeTab].bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 text-left">
                        <div className="size-4.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3" />
                        </div>
                        <span className="text-[13px] text-zinc-800 dark:text-zinc-200 font-medium">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: FINAL CTA ── */}
        <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 bg-secondary/20 border-t border-border/40 z-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2
                className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-foreground"
                style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
              >
                Your team deserves a workspace that works.
              </h2>
              <p className="text-[15px] font-medium tracking-[0.015em] text-muted-foreground leading-relaxed max-w-[44ch]">
                Join 7,000+ high-craft teams who replaced their scattered stack with KeilHQ. Everything unified.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://app.Keilhq.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold group active:scale-[0.97] transition-transform duration-150"
              >
                Start free today
                <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold border border-border text-foreground hover:bg-secondary/60 transition-all duration-150 group active:scale-[0.97]"
              >
                Book a demo
                <ArrowRight className="size-3.5 opacity-55 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <p className="text-[11px] font-semibold tracking-wide text-muted-foreground/70">
              No credit card required · Free plan included · Scale as you grow
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
