"use client";

import Image from "next/image";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Lock, Layers, Grid, Sparkles } from "lucide-react";

export default function TaskManagementPage() {
  const capabilities = [
    {
      icon: Sparkles,
      title: "Clarity Engine",
      desc: "Every task has built-in Objectives and Success Criteria fields to define \"done\" before work begins.",
    },
    {
      icon: Lock,
      title: "Blocker Logic",
      desc: "Prevent tasks from being completed until their pre-selected dependency prerequisites are marked done.",
    },
    {
      icon: Layers,
      title: "Task Hierarchies",
      desc: "Organize work with parent-child task relationships to break complex epics into infinitely nested subtasks.",
    },
    {
      icon: Grid,
      title: "Derived Statuses",
      desc: "Task states automatically compute to \"Blocked\" based on active relationships, with zero manual tagging.",
    },
  ];

  const checklist = [
    "Switch seamlessly between Kanban Boards, Gantt Timelines, and shared team Calendars.",
    "Organize tasks through 4 workflow states (Backlog, To Do, In Progress, Done) and 4 priority levels (Low, Medium, High, Urgent).",
    "Assign work to multiple team members and collaborate using threaded comments with nested replies.",
    "Export complete task history audit trails and share progress externally using public links with no login required.",
  ];

  const mockup = (
    <>
      <Image
        src="/mockups/light/Task Overview Light.png"
        alt="Task Management"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Task Overview Dark.png"
        alt="Task Management"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
  );

  return (
    <FeatureLayout
      eyebrowIndex="3.0"
      eyebrowText="Task Management"
      title="Hard dependencies. Real-time delivery."
      subHeroTitle="Database-level blocker requirements and strict sprint state"
      subHeroDesc="Plan, track, and complete tasks with strict blocker validation and native sprint structures that prevent unfinished items from sliding by."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Task Management"
      mockup={mockup}
      capabilitiesTitle="The Clarity Engine. Enforced progress."
      capabilitiesDesc="KeilHQ eliminates vague task lists at the database schema level so you can rest assured execution matches design specs."
      capabilitiesGrid={capabilities}
      checklistTitle="Designed for high-speed engineering teams"
      checklistDesc="Unify workflows, switch context-free between layouts, and track exact changes with comprehensive audit logs."
      checklistItems={checklist}
      currentIndex={2}
    />
  );
}
