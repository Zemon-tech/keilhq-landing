"use client";

import Image from "next/image";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Lock, Layers, Grid, Sparkles } from "lucide-react";

export default function TaskManagementPage() {
  const [activeTab, setActiveTab] = React.useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", light: "/mockups/light/Task Overview Light.png", dark: "/mockups/dark/Task Overview Dark.png" },
    { id: "minimized", label: "Minimized Overview", light: "/mockups/light/Task Sidebar overview Light.png", dark: "/mockups/dark/Task Sidebar overview Dark.png" },
    { id: "activity", label: "Activity", light: "/mockups/light/Task Activity Light.png", dark: "/mockups/dark/Task Activity Dark.png" },
    { id: "dependency", label: "Dependency", light: "/mockups/light/Task Dependency Light.png", dark: "/mockups/dark/Task Dependency Dark.png" },
    { id: "history", label: "History", light: "/mockups/light/Task History Light.png", dark: "/mockups/dark/Task History Dark.png" },
  ];

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
    <div className="w-full relative flex flex-col items-center">
      {/* Floating Selector Pill */}
      <div className="absolute top-4 z-20 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-zinc-900/60 dark:bg-black/40 backdrop-blur-md border border-zinc-200/10 dark:border-white/5 rounded-full shadow-lg max-w-[95%]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-tight transition-all duration-300 ease-in-out cursor-pointer ${
              activeTab === tab.id
                ? "bg-white text-zinc-950 dark:bg-zinc-800 dark:text-white"
                : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-[#F7F8F8] bg-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-full relative overflow-hidden rounded-lg" style={{ aspectRatio: "1.6 / 1" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              activeTab === tab.id ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={tab.light}
              alt={tab.label}
              width={1600}
              height={1000}
              className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
              priority
            />
            <Image
              src={tab.dark}
              alt={tab.label}
              width={1600}
              height={1000}
              className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
              priority
            />
          </div>
        ))}
      </div>
    </div>
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
