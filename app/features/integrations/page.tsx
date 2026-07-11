"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Shield, Zap, Plug, Settings, Calendar, Code2, FileText } from "lucide-react";

export default function IntegrationsPage() {
  const capabilities = [
    {
      icon: Shield,
      title: "OAuth Security",
      desc: "All integrations use secure OAuth 2.0 flows. KeilHQ never stores your passwords or sensitive credentials.",
    },
    {
      icon: Zap,
      title: "Real-time Sync",
      desc: "Changes sync instantly across platforms. Create a task in KeilHQ, see it in Google Calendar immediately.",
    },
    {
      icon: Plug,
      title: "AI Integration",
      desc: "AI agents can interact with connected services on your behalf - create GitHub issues, schedule meetings, search documents.",
    },
    {
      icon: Settings,
      title: "Granular Control",
      desc: "Configure sync preferences, manage permissions, and control exactly how data flows between your tools.",
    },
  ];

  const checklist = [
    "Google Workspace single OAuth unlocks Calendar, Gmail, Drive, Docs, Sheets, Slides, and Meet integrations.",
    "GitHub integration enables AI agents to list issues/PRs, get details, create issues from tasks, and manage workflows.",
    "Notion OAuth or manual token connections for importing pages, exporting Motion docs, and bidirectional content sync.",
    "Enterprise integrations with Slack notifications, Linear project sync, Jira board connections, and ChronicleHQ presentations.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 sm:p-8 flex flex-col gap-6 text-left">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">Connected Integrations</span>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">OAuth Secured</span>
      </div>

      {/* Active Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Google Workspace */}
        <div className="p-4 bg-zinc-950/20 border border-white/[0.05] rounded-sm shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded bg-blue-950/50 flex items-center justify-center">
                <Calendar className="size-4 text-blue-400" />
              </div>
              <span className="text-sm font-semibold text-zinc-300">Google Workspace</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] text-emerald-400 font-medium">Connected</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {['Calendar', 'Gmail', 'Drive', 'Docs', 'Sheets', 'Meet'].map((service) => (
              <span key={service} className="text-[9px] bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded-xs font-medium">
                {service}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-zinc-500">Two-way sync active • Auto-generate Meet links • Document references</p>
        </div>

        {/* GitHub */}
        <div className="p-4 bg-zinc-950/20 border border-white/[0.05] rounded-sm shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded bg-zinc-900 flex items-center justify-center">
                <Code2 className="size-4 text-zinc-300" />
              </div>
              <span className="text-sm font-semibold text-zinc-300">GitHub</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] text-emerald-400 font-medium">Connected</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {['Issues', 'Pull Requests', 'Contributors'].map((service) => (
              <span key={service} className="text-[9px] bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded-xs font-medium">
                {service}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-zinc-500">Create issues from tasks • AI agent integration • Repository workflows</p>
        </div>

        {/* Notion */}
        <div className="p-4 bg-zinc-950/20 border border-white/[0.05] rounded-sm shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded bg-zinc-900 flex items-center justify-center">
                <FileText className="size-4 text-zinc-300" />
              </div>
              <span className="text-sm font-semibold text-zinc-300">Notion</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] text-emerald-400 font-medium">Connected</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {['Import', 'Export', 'Sync'].map((service) => (
              <span key={service} className="text-[9px] bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded-xs font-medium">
                {service}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-zinc-500">Bidirectional sync • Import pages • Export Motion docs • OAuth or token auth</p>
        </div>
      </div>

      {/* Planned Integrations */}
      <div className="pt-4 border-t border-white/[0.05]">
        <h3 className="text-xs font-semibold text-zinc-500 mb-3">Coming Soon</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {['Slack', 'Linear', 'Jira', 'ChronicleHQ'].map((integration) => (
            <div key={integration} className="p-2 bg-zinc-950/30 border border-white/[0.03] rounded-sm text-center">
              <span className="text-[10px] text-zinc-600 font-medium">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="8.0"
      eyebrowText="Integrations"
      title="Connect with your entire tech stack"
      subHeroTitle="Secure OAuth connections for seamless developer data flow"
      subHeroDesc="Native integrations with Google Workspace, GitHub, Notion, and more. Connect with your favorite tools to sync events, link code files, and build autonomous AI agents."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Integrations"
      mockup={mockup}
      capabilitiesTitle="Secure connections. Seamless workflows."
      capabilitiesDesc="KeilHQ integrates with your favorite tools using secure OAuth flows and API connections to create unified workflows."
      capabilitiesGrid={capabilities}
      checklistTitle="One workspace. All your tools."
      checklistDesc="Stop switching between dozens of apps. Bring your entire toolkit into KeilHQ's unified interface."
      checklistItems={checklist}
      currentIndex={7}
    />
  );
}