"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Bell, Mail, Filter, ShieldAlert } from "lucide-react";

export default function NotificationsPage() {
  const capabilities = [
    {
      icon: Bell,
      title: "Triggers",
      desc: "Get notified when a task is assigned to you, a message is received, a note is shared, status changes, or you are mentioned.",
    },
    {
      icon: Mail,
      title: "Unread Badges",
      desc: "Stay updated on pending notifications at a glance with clean unread count badges in the workspace sidebar.",
    },
    {
      icon: Filter,
      title: "Clear Controls",
      desc: "Declutter your notification tray instantly with dedicated mark-all-read and clear-all action items.",
    },
    {
      icon: ShieldAlert,
      title: "Preferences",
      desc: "Configure custom user-specific notification filters to control exactly what updates trigger a workspace notification.",
    },
  ];

  const checklist = [
    "WebSocket infrastructure syncs in-app alerts across tabs in under 50ms.",
    "Subscribe to specific client files, tasks, or spaces to track updates.",
    "Enterprise-grade role limits prevent workspace notification leaks.",
    "Custom notification silence intervals for uninterrupted focus sessions.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
        <div className="flex items-center gap-2">
          <Bell className="size-4 text-zinc-500" />
          <span className="text-xs font-semibold text-zinc-300">Workspace Activity Log</span>
        </div>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Filtered</span>
      </div>

      {/* Feed items */}
      <div className="flex flex-col gap-3 font-sans text-xs">
        {/* Item 1 */}
        <div className="p-3 bg-zinc-950/20 border border-white/[0.05] rounded-sm flex items-center justify-between gap-4 shadow-2xs">
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-zinc-300">Priya Nair mentioned you in spec/sprint-4-specs.md</span>
            <span className="text-[10px] text-zinc-500">&ldquo;Sam Okafor to verify migration script by Monday.&rdquo;</span>
          </div>
          <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-sm shrink-0 w-fit font-bold uppercase tracking-wider">Mention</span>
        </div>

        {/* Item 2 */}
        <div className="p-3 bg-zinc-950/20 border border-white/[0.05] rounded-sm flex items-center justify-between gap-4 shadow-2xs">
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-zinc-300">Task Completed: Configure SSL endpoints</span>
            <span className="text-[10px] text-zinc-500">Completed by Luca Bianchi · Staging active</span>
          </div>
          <span className="text-[9px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded-sm shrink-0 w-fit font-bold uppercase tracking-wider">Update</span>
        </div>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="9.0"
      eyebrowText="Inbox & Alerts"
      title="Real-Time Notifications"
      subHeroTitle="Filter distraction. Stay aligned on deliverables."
      subHeroDesc="Stay in the loop without being overwhelmed. KeilHQ filters alerts intelligently so you only hear about critical updates that impact your work, using sub-50ms WebSocket pipelines."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Notifications"
      mockup={mockup}
      capabilitiesTitle="Filter distraction. Stay aligned."
      capabilitiesDesc="KeilHQ provides granular notification controls so you only hear about critical updates that impact your sprint items."
      capabilitiesGrid={capabilities}
      checklistTitle="Keep your team focused on execution"
      checklistDesc="Eliminate general notification fatigue. Fast WebSocket pipelines deliver direct in-app updates instantly."
      checklistItems={checklist}
      currentIndex={8}
    />
  );
}
