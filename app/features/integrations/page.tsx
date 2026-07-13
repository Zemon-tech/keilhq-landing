"use client";

import Image from "next/image";

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
    <>
      <Image
        src="/mockups/light/Settings Connectors Light.png"
        alt="Integrations"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Settings Connectors Dark.png"
        alt="Integrations"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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