"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Brain, Zap, Calendar, Code2, Check } from "lucide-react";

export default function AICommandCenterPage() {
  const capabilities = [
    {
      icon: Brain,
      title: "Supervisor AI",
      desc: "Master agent that routes requests to specialized sub-agents and coordinates multi-step workflows across your workspace.",
    },
    {
      icon: Zap,
      title: "Task Manager Agent",
      desc: "Create, update, search, and organize tasks with natural language. Understands priorities, due dates, and assignments automatically.",
    },
    {
      icon: Calendar,
      title: "Scheduler Agent",
      desc: "Analyzes your calendar, finds free slots, and auto-schedules unscheduled tasks based on priority and time estimates.",
    },
    {
      icon: Code2,
      title: "GitHub Agent",
      desc: "List issues and PRs, get issue details, create GitHub issues from KeilHQ tasks, and manage repository workflows.",
    },
  ];

  const checklist = [
    "Chat Agent reads channels and sends messages on your behalf with natural language commands.",
    "Motion Agent creates, reads, and searches your documentation pages with full content understanding.",
    "Web Search Agent performs live searches using Exa API to find current information and resources.",
    "All agents work together through PostgreSQL memory storage for multi-turn conversations and context retention.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 sm:p-8 flex flex-col gap-6 text-left">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">AI Command Center</span>
        <span className="text-[10px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Chain of Thought</span>
      </div>

      {/* User Query */}
      <div className="flex items-start gap-3 p-3 bg-zinc-900/40 rounded-sm border border-white/[0.05]">
        <div className="size-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold shrink-0">
          U
        </div>
        <div className="flex-1">
          <p className="text-sm text-[#F7F8F8]">"Create a task for fixing the login bug, make it urgent and due tomorrow, then schedule my unscheduled tasks for next week"</p>
        </div>
      </div>

      {/* AI Chain of Thought Steps */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3 p-3 bg-emerald-950/20 rounded-sm border border-emerald-800/30">
          <div className="size-6 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center shrink-0">
            <Zap className="size-3" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-emerald-200">Task Agent: Creating urgent task</p>
            <p className="text-[11px] text-emerald-300">✓ Created task "Fix login bug" with priority: Urgent, due: tomorrow</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-blue-950/20 rounded-sm border border-blue-800/30">
          <div className="size-6 rounded-full bg-blue-900 text-blue-300 flex items-center justify-center shrink-0">
            <Calendar className="size-3" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-blue-200">Scheduler Agent: Finding unscheduled tasks</p>
            <p className="text-[11px] text-blue-300">✓ Found 5 unscheduled tasks, analyzing calendar for next week</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-violet-950/20 rounded-sm border border-violet-800/30">
          <div className="size-6 rounded-full bg-violet-900 text-violet-300 flex items-center justify-center shrink-0">
            <Check className="size-3" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-violet-200">Scheduler Agent: Auto-scheduling complete</p>
            <p className="text-[11px] text-violet-300">✓ Scheduled 5 tasks across 4 available time slots next week</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="1.0"
      eyebrowText="AI Command Center"
      title="Your AI assistant that knows your workspace"
      subHeroTitle="Autonomous agents that read and execute sprints"
      subHeroDesc="Built-in AI agents for task management, scheduling, GitHub integration, and web search. Chain-of-thought execution shows you exactly how decisions are made using your real data."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try AI Command Center"
      mockup={mockup}
      capabilitiesTitle="Specialized agents. Real workspace context."
      capabilitiesDesc="KeilHQ's AI system uses specialized agents that understand your tasks, calendar, documents, and integrations to provide contextual assistance."
      capabilitiesGrid={capabilities}
      checklistTitle="See exactly how decisions are made"
      checklistDesc="Chain-of-thought execution shows each step in real-time, so you understand exactly what the AI is doing with your data."
      checklistItems={checklist}
      currentIndex={0}
    />
  );
}