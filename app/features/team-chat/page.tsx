"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Users, MessageSquare, Zap, Sparkles } from "lucide-react";

export default function TeamChatPage() {
  const capabilities = [
    {
      icon: Users,
      title: "Group Channels",
      desc: "Establish group channels dedicated to specific client projects, team areas, or custom topics.",
    },
    {
      icon: MessageSquare,
      title: "Direct Messaging",
      desc: "Connect instantly via private 1:1 direct messages or establish custom group DMs with unread indicators.",
    },
    {
      icon: Zap,
      title: "Socket.io Engine",
      desc: "High-speed Socket.io connection delivers chat notifications and message events in real-time.",
    },
    {
      icon: Sparkles,
      title: "Connected Feed",
      desc: "Chat threads link directly inside the tasks, documents, and calendar events they describe.",
    },
  ];

  const checklist = [
    "Never miss a chat ping with unread badges and contextual workspace mentions.",
    "Database-level client spaces isolate channels and protect private details.",
    "WebSocket delivery registers message receipts across the team in milliseconds.",
    "Tied directly to the Clarity Engine to track task discussions and decisions.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-zinc-300">Task Thread Discussion</span>
          <span className="text-[10px] text-zinc-500">Linked to: Verify database migration script</span>
        </div>
        <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded-sm">2 participants</span>
      </div>

      {/* Chat Bubble List */}
      <div className="flex flex-col gap-3 font-sans">
        {/* Bubble 1 */}
        <div className="flex items-start gap-2.5 max-w-[85%]">
          <div className="size-6 rounded-full bg-violet-950 text-violet-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 select-none">
            PN
          </div>
          <div className="flex flex-col gap-0.5 bg-zinc-900/60 text-zinc-300 rounded-lg p-2.5 text-[12px] border border-white/[0.03] shadow-2xs">
            <span className="font-semibold text-zinc-200 text-[10px]">Priya Nair</span>
            <span>Let&apos;s make sure the migration script logs the elapsed execution time for schema verification. We need this for audit reports.</span>
          </div>
        </div>

        {/* Bubble 2 */}
        <div className="flex items-start gap-2.5 max-w-[85%] self-end flex-row-reverse">
          <div className="size-6 rounded-full bg-amber-950 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 select-none">
            SO
          </div>
          <div className="flex flex-col gap-0.5 bg-[#EEFF3B]/10 text-zinc-300 rounded-lg p-2.5 text-[12px] border border-[#EEFF3B]/20 shadow-2xs">
            <span className="font-semibold text-[10px] text-zinc-200">Sam Okafor</span>
            <span>Added it. The timer logs are now outputting to stdout correctly in the script. Running test cases next.</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="6.0"
      eyebrowText="Team Chat"
      title="Real-Time Team Chat"
      subHeroTitle="Contextual channels. Instant alignments. Replace Slack."
      subHeroDesc="Replace Slack. KeilHQ brings real-time group channels and direct messaging right next to your team's active tasks and documents, with high-speed Socket.io pipelines."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Team Chat"
      mockup={mockup}
      capabilitiesTitle="Contextual channels. Instant alignments."
      capabilitiesDesc="KeilHQ brings communication directly into your projects, making discussions and files contextual."
      capabilitiesGrid={capabilities}
      checklistTitle="Keep your team in sync without the noise"
      checklistDesc="Eliminate status meetings. Integrated chat streams keep everyone aligned in real-time."
      checklistItems={checklist}
      currentIndex={5}
    />
  );
}
