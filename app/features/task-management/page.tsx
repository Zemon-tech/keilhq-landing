"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Lock, Layers, Grid, Sparkles } from "lucide-react";

export default function TaskManagementPage() {
  const capabilities = [
    {
      icon: Sparkles,
      title: "Clarity Engine",
      desc: "Every task has built-in Objectives and Success Criteria fields to define \"done\" before work begins.",
    },
    {
      icon: Lock,
      title: "Blocker Logic",
      desc: "Prevent tasks from being completed until their pre-selected dependency prerequisites are marked done.",
    },
    {
      icon: Layers,
      title: "Task Hierarchies",
      desc: "Organize work with parent-child task relationships to break complex epics into infinitely nested subtasks.",
    },
    {
      icon: Grid,
      title: "Derived Statuses",
      desc: "Task states automatically compute to \"Blocked\" based on active relationships, with zero manual tagging.",
    },
  ];

  const checklist = [
    "Switch seamlessly between Kanban Boards, Gantt Timelines, and shared team Calendars.",
    "Organize tasks through 4 workflow states (Backlog, To Do, In Progress, Done) and 4 priority levels (Low, Medium, High, Urgent).",
    "Assign work to multiple team members and collaborate using threaded comments with nested replies.",
    "Export complete task history audit trails and share progress externally using public links with no login required.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 sm:p-8 flex flex-col gap-6 text-left">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">Active Blocker Pipeline</span>
        <span className="text-[10px] bg-rose-500/10 text-rose-450 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Validation Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blocked Card */}
        <div className="p-5 rounded-sm border border-rose-500/20 bg-zinc-950/20 flex flex-col gap-4 relative">
          <div className="absolute top-4 right-4 bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-xs text-[9px] font-bold uppercase tracking-wider">
            Blocked
          </div>
          <div className="flex flex-col gap-1 pr-12">
            <span className="text-[11px] font-bold uppercase text-zinc-550">Sprint 4 Deliverable</span>
            <span className="text-sm font-semibold text-zinc-300">Deploy staging container cluster & verify SSL endpoints</span>
          </div>
          <div className="border-t border-white/[0.05] pt-4 mt-1 flex items-center gap-2 text-[11px] text-rose-400 font-medium">
            <Lock className="size-3.5" />
            <span>Locked until &ldquo;Verify database migration script&rdquo; completes</span>
          </div>
        </div>

        {/* Blocker Card (Prerequisite) */}
        <div className="p-5 rounded-sm border border-emerald-500/20 bg-zinc-950/20 flex flex-col gap-4 relative">
          <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-xs text-[9px] font-bold uppercase tracking-wider animate-pulse">
            Active Blocker
          </div>
          <div className="flex flex-col gap-1 pr-12">
            <span className="text-[11px] font-bold uppercase text-zinc-550">Sprint 4 Requirement</span>
            <span className="text-sm font-semibold text-zinc-300">Verify database migration script & export schema diffs</span>
          </div>
          <div className="border-t border-white/[0.05] pt-4 mt-1 flex items-center justify-between gap-4">
            <span className="text-[11px] text-zinc-500">Assignee: Sam Okafor</span>
            <span className="text-[10px] bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-xs font-semibold">Priority: Urgent</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="3.0"
      eyebrowText="Task Management"
      title="Hard dependencies. Real-time delivery."
      subHeroTitle="Database-level blocker requirements and strict sprint state"
      subHeroDesc="Plan, track, and complete tasks with strict blocker validation and native sprint structures that prevent unfinished items from sliding by."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Task Management"
      mockup={mockup}
      capabilitiesTitle="The Clarity Engine. Enforced progress."
      capabilitiesDesc="KeilHQ eliminates vague task lists at the database schema level so you can rest assured execution matches design specs."
      capabilitiesGrid={capabilities}
      checklistTitle="Designed for high-speed engineering teams"
      checklistDesc="Unify workflows, switch context-free between layouts, and track exact changes with comprehensive audit logs."
      checklistItems={checklist}
      currentIndex={2}
    />
  );
}
