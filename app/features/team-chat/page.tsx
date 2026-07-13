"use client";

import Image from "next/image";

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
    <>
      <Image
        src="/mockups/light/Chat Light.png"
        alt="Team Chat"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Chat Dark.png"
        alt="Team Chat"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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
