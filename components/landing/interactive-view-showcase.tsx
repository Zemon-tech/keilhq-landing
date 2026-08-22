"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export interface ViewItem {
  id: string;
  title: string;
  summary: string;
  lightImage: string;
  darkImage: string;
}

const viewsData: ViewItem[] = [
  {
    id: "list-pane",
    title: "List Pane",
    summary: "Persistent command shortcut bar listing all active tasks, events, and sprint items for rapid access without context switching.",
    lightImage: "/mockups/project-tasks-events/tasks-sidebar-overview-light.png",
    darkImage: "/mockups/project-tasks-events/tasks-sidebar-overview-dark.png",
  },
  {
    id: "calendar-view",
    title: "Calendar View",
    summary: "Day, Week, and Month schedule grids with auto-slotting, event scheduling, and two-way Google Calendar synchronization.",
    lightImage: "/mockups/project-tasks-events/tasks-calendarview-light.png",
    darkImage: "/mockups/project-tasks-events/tasks-calendarview-dark.png",
  },
  {
    id: "list-view",
    title: "List View",
    summary: "Comprehensive task listing with instant temporal filters to slice tasks across Day, Week, Month, and Year perspectives.",
    lightImage: "/mockups/project-tasks-events/tasks-listview-light.png",
    darkImage: "/mockups/project-tasks-events/tasks-listview-dark.png",
  },
  {
    id: "kanban-view",
    title: "Kanban View",
    summary: "Visual drag-and-drop workflow status boards for tracking tasks across backlog, to-do, in-progress, and completed states.",
    lightImage: "/mockups/project-tasks-events/tasks-kanbanview-light.png",
    darkImage: "/mockups/project-tasks-events/tasks-kanbanview-dark.png",
  },
  {
    id: "track-view",
    title: "Track View",
    summary: "Real-time progress monitoring, change audit logs, in-progress state tracking, and active execution status oversight.",
    lightImage: "/mockups/project-tasks-events/tasks-trackview-light.png",
    darkImage: "/mockups/project-tasks-events/tasks-activity-dark.png",
  },
];

export function InteractiveViewShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Interactive Showcase Row: Left text tabs (5 cols), Right reduced mockup image (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: View Selection Cards */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {viewsData.map((view, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={view.id}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-4 rounded-xl transition-all duration-300 border ${
                  isActive
                    ? "border-zinc-300 dark:border-white/15 bg-zinc-100/80 dark:bg-white/[0.04] shadow-sm"
                    : "border-transparent hover:bg-zinc-100/50 dark:hover:bg-white/[0.02] text-zinc-500 dark:text-zinc-400"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ChevronRight
                    className={`size-4 transition-transform duration-300 shrink-0 ${
                      isActive
                        ? "text-zinc-900 dark:text-zinc-100 translate-x-0.5"
                        : "text-zinc-400 dark:text-zinc-600 opacity-50"
                    }`}
                  />
                  <span
                    className={`font-sans text-[15px] font-medium tracking-tight ${
                      isActive
                        ? "text-zinc-900 dark:text-[#F7F8F8] font-semibold"
                        : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    {view.title}
                  </span>
                </div>

                {isActive && (
                  <p className="text-[13px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed mt-2 pl-6 transition-all duration-300">
                    {view.summary}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column: Reduced Mockup Container with cross-fade */}
        <div className="lg:col-span-7 relative w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.52)] border border-zinc-200/50 dark:border-white/[0.06] bg-zinc-950/40">
          <div className="w-full relative aspect-[16/10] overflow-hidden">
            {viewsData.map((view, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={view.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={view.lightImage}
                    alt={view.title}
                    fill
                    className="object-cover object-top dark:hidden rounded-xl"
                    priority={idx === 0}
                  />
                  <Image
                    src={view.darkImage}
                    alt={view.title}
                    fill
                    className="object-cover object-top hidden dark:block rounded-xl"
                    priority={idx === 0}
                  />
                </div>
              );
            })}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none z-20" />
          </div>
        </div>

      </div>
    </div>
  );
}
