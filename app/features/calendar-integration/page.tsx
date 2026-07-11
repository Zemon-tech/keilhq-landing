"use client";

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
    <div className="w-full bg-[#08090A] p-6 sm:p-8 flex flex-col gap-6 text-left">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">Calendar View · March 2026</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <RefreshCw className="size-3 text-emerald-500 animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-[10px] text-emerald-400 font-medium">Google Calendar Sync Active</span>
          </div>
        </div>
      </div>

      {/* Calendar Grid Mockup */}
      <div className="grid grid-cols-7 gap-2">
        {/* Week header */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center text-[10px] font-semibold text-zinc-600 p-2 select-none">
            {day}
          </div>
        ))}

        {/* Calendar days with events */}
        {Array.from({ length: 35 }, (_, i) => {
          const dayNumber = i - 6; // Start from a Monday
          const isCurrentMonth = dayNumber >= 1 && dayNumber <= 31;
          const hasEvent = [3, 7, 12, 15, 20, 24, 28].includes(dayNumber);

          return (
            <div key={i} className={`aspect-square border border-white/[0.03] rounded-sm p-1 flex flex-col gap-1 ${isCurrentMonth ? 'bg-zinc-950/20' : 'bg-transparent opacity-30'}`}>
              {isCurrentMonth && (
                <>
                  <span className="text-[9px] text-zinc-600">{dayNumber}</span>
                  {hasEvent && (
                    <div className="flex flex-col gap-0.5">
                      {dayNumber === 12 && (
                        <>
                          <div className="text-[7px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-1 py-0.5 rounded-xs">Task: Fix login bug</div>
                          <div className="text-[7px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1 py-0.5 rounded-xs">Meeting: Sprint Review</div>
                        </>
                      )}
                      {dayNumber === 15 && (
                        <div className="text-[7px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1 py-0.5 rounded-xs">Event: Client Demo</div>
                      )}
                      {dayNumber === 20 && (
                        <div className="text-[7px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1 py-0.5 rounded-xs">Task: DB migration</div>
                      )}
                      {(dayNumber === 3 || dayNumber === 7 || dayNumber === 24 || dayNumber === 28) && (
                        <div className="text-[7px] bg-zinc-800 text-zinc-300 border border-white/[0.05] px-1 py-0.5 rounded-xs">Meeting</div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-[10px] pt-4 border-t border-white/[0.05]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-blue-500 rounded-xs"></div>
          <span className="text-zinc-500">KeilHQ Tasks</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-emerald-500 rounded-xs"></div>
          <span className="text-zinc-500">Google Calendar Events</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-purple-500 rounded-xs"></div>
          <span className="text-zinc-500">Shared Events</span>
        </div>
      </div>
    </div>
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