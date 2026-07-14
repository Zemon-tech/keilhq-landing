"use client";

import Image from "next/image";

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
    <>
      <Image
        src="/mockups/light/Notifications Light.png"
        alt="Smart Notifications"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Notifications Dark.png"
        alt="Smart Notifications"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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
