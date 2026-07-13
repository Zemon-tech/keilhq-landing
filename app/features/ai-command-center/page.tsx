"use client";

import React from "react";
import Image from "next/image";
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
    <>
      <Image
        src="/mockups/light/AI Light.png"
        alt="AI Command Center"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/AI Dark.png"
        alt="AI Command Center"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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