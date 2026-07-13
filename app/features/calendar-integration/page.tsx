"use client";

import Image from "next/image";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { RefreshCw, Clock, Video, MapPin } from "lucide-react";

export default function CalendarIntegrationPage() {
  const capabilities = [
    {
      icon: RefreshCw,
      title: "Two-way Sync",
      desc: "Tasks with dates automatically become Google Calendar events. GCal events appear in KeilHQ calendar view with full details.",
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      desc: "AI scheduler analyzes your calendar, finds free slots, and auto-schedules unscheduled tasks based on priority and time estimates.",
    },
    {
      icon: Video,
      title: "Google Meet Integration",
      desc: "Toggle \"Schedule Google Meet\" when creating events to automatically generate video links for meetings and calls.",
    },
    {
      icon: MapPin,
      title: "Event Details",
      desc: "Rich event creation with location, agenda, guest lists, and event types. All data syncs bidirectionally with Google Calendar.",
    },
  ];

  const checklist = [
    "Multiple view modes: monthly calendar, weekly timeline, and daily agenda with drag-to-select date ranges.",
    "Click any day to create tasks or events with that date pre-filled for rapid scheduling.",
    "Event detail pane shows overview, activity comments, and full Google Calendar integration status.",
    "Manual sync button plus automatic background sync ensures your calendar is always up to date.",
  ];

  const mockup = (
    <>
      <Image
        src="/mockups/light/Calendar overview Light.png"
        alt="Calendar & Scheduling"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Calendar Overview Dark.png"
        alt="Calendar & Scheduling"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
  );

  return (
    <FeatureLayout
      eyebrowIndex="5.0"
      eyebrowText="Smart Calendar"
      title="Two-way Google Calendar sync with smart scheduling"
      subHeroTitle="Your tasks, meetings, and availability in one unified view"
      subHeroDesc="Tasks automatically become calendar events. The AI scheduler finds free slots and auto-schedules your tasks based on priority and availability. Google Meet links are generated automatically."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Smart Calendar"
      mockup={mockup}
      capabilitiesTitle="Unified scheduling. Seamless sync."
      capabilitiesDesc="KeilHQ integrates deeply with Google Calendar to provide unified time management across tasks and meetings."
      capabilitiesGrid={capabilities}
      checklistTitle="One calendar. Complete visibility."
      checklistDesc="See your tasks, meetings, and availability in one unified view. Never double-book or miss a deadline again."
      checklistItems={checklist}
      currentIndex={4}
    />
  );
}