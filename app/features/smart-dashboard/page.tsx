"use client";

import Image from "next/image";

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
    <>
      <Image
        src="/mockups/light/Dashboard light.png"
        alt="Smart Dashboard"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Dashboard Dark.png"
        alt="Smart Dashboard"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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
