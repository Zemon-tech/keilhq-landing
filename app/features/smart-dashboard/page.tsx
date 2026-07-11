"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Layers, Sparkles, AlertTriangle, Calendar } from "lucide-react";

export default function SmartDashboardPage() {
  const capabilities = [
    {
      icon: Layers,
      title: "Wheel Picker Cards",
      desc: "Six scrollable cards: Current Focus, Immediate Blockers, Needs Reply, Next Event, Quick Capture, and Up Next — each linking to the relevant task, chat, or event.",
    },
    {
      icon: Sparkles,
      title: "AI Command Centre",
      desc: "The HeroSection below the panel lets you query the Supervisor AI with file attachments, conversation history, and chain-of-thought tool execution.",
    },
    {
      icon: AlertTriangle,
      title: "Live Stats Row",
      desc: "Urgent count (red), replies awaiting (blue), and today's queued tasks (green) update in real time alongside a live clock with 12h/24h format support.",
    },
    {
      icon: Calendar,
      title: "Quick Capture",
      desc: "One-tap task creation from the dashboard wheel — opens the create dialog without leaving your command centre.",
    },
  ];

  const checklist = [
    "Current Focus card shows your #1 priority task for today with status, due date, and one-click navigation.",
    "Needs Reply card surfaces chat messages and task comments sent to you that haven't been answered yet.",
    "Next Event card displays the upcoming calendar event with start time and Google Meet link if generated.",
    "Stats row links urgent count to filtered tasks, replies to chat channels, and queued to today's task queue.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 sm:p-8 flex flex-col gap-6 text-left">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">Dashboard Panel · Wheel Picker</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Live</span>
          <span className="text-[11px] font-mono text-zinc-500">2:34 PM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Active wheel card */}
        <div className="p-4 rounded-sm border border-indigo-500/30 bg-zinc-950/20 flex flex-col gap-2 shadow-2xs">
          <span className="text-[10px] font-bold uppercase text-indigo-400 tracking-wider">Current Focus</span>
          <span className="text-xs font-semibold text-zinc-300">Fix login bug — API token refresh</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[9px] px-1.5 py-0.5 bg-rose-500/10 text-rose-400 rounded-xs font-bold uppercase">Urgent</span>
            <span className="text-[10px] text-zinc-500">Due tomorrow</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Urgent", count: 3, className: "text-rose-400" },
            { label: "Replies", count: 5, className: "text-blue-400" },
            { label: "Queued", count: 8, className: "text-emerald-400" },
          ].map((stat) => (
            <div key={stat.label} className="p-3 rounded-sm border border-white/[0.05] bg-zinc-950/15 text-center">
              <div className={`font-sans text-xl font-bold ${stat.className}`}>{stat.count}</div>
              <div className="text-[9px] text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Other wheel cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {["Immediate Blockers", "Needs Reply", "Next Event", "Quick Capture", "Up Next"].map((card) => (
          <div key={card} className="p-2.5 rounded-sm border border-white/[0.03] bg-zinc-950/10 text-[10px] font-medium text-zinc-500">
            {card}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="2.0"
      eyebrowText="Smart Dashboard"
      title="Know exactly what to work on right now"
      subHeroTitle="Six cards. One glance. Complete dashboard command."
      subHeroDesc="The Dashboard Panel gives you a live workspace snapshot — a 3D wheel picker with six context cards, real-time stats, and a live clock that respects your time format preference. Scroll through top priorities and blocked queues instantly."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Smart Dashboard"
      mockup={mockup}
      capabilitiesTitle="Six cards. One glance."
      capabilitiesDesc="Scroll the 3D wheel picker to cycle through your most important context — from today's top priority to messages waiting for your reply."
      capabilitiesGrid={capabilities}
      checklistTitle="Integrate your day in one workspace"
      checklistDesc="KeilHQ parses calendars, sprint files, and task logs to compose your optimal focus list automatically."
      checklistItems={checklist}
      currentIndex={1}
    />
  );
}
