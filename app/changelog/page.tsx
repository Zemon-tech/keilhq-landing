"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Search, Bell, ChevronRight, ChevronDown } from "lucide-react";

interface ChangelogEntry {
  version: string;
  date: string;
  dateStr: string;
  dotColor: string;
  title: string;
  mockup: string;
  summary: string;
  improvements: string[];
  fixes: string[];
  api: string[];
  shortcuts: string[];
}

const changelogEntries: ChangelogEntry[] = [
  {
    version: "v2.4.0",
    date: "May 20, 2026",
    dateStr: "May 2026",
    dotColor: "bg-orange-500",
    title: "v2.4.0 — Diarization & AI Sprints",
    mockup: "/mockups/dark/Meeting.png",
    summary: "This update introduces speaker diarization for the meeting recorder, permitting multi-speaker transcript sorting. KeilHQ AI can now create structured sprints directly from conversations. We've also added a Gantt timeline view to all spaces and established conflict-free Google Calendar sync.",
    improvements: [
      "Meeting recorder now supports speaker diarization — transcripts show who said what",
      "KeilHQ AI can now create tasks directly from a conversation",
      "Gantt timeline view added to all spaces",
      "Google Calendar 2-way sync with smart conflict detection",
    ],
    fixes: [
      "Fixed overlapping task labels on the calendar view",
      "Resolved audio rendering glitches during long recordings",
    ],
    api: [
      "Added diarization metadata support to the transcripts webhooks API",
    ],
    shortcuts: [
      "Press R to start/stop meeting recorder from anywhere",
    ]
  },
  {
    version: "v2.3.0",
    date: "April 15, 2026",
    dateStr: "April 2026",
    dotColor: "bg-emerald-500",
    title: "v2.3.0 — Collaborative Motion Docs",
    mockup: "/mockups/dark/Motion.png",
    summary: "We have fully overhauled the block-based rich text editor to support real-time collaborative editing. Document links can now be shared publicly without login requirements, and pages can be frozen to read-only state. We've also added granular notification preferences.",
    improvements: [
      "Motion (docs) now supports real-time collaborative editing",
      "Public shareable links for tasks and docs — no login required",
      "Lock/unlock pages to freeze docs to read-only",
      "Notification preferences per user",
    ],
    fixes: [
      "Fixed simultaneous editor cursors jumping on list creation",
      "Resolved search index discrepancies for locked docs",
    ],
    api: [
      "Added collaboration endpoints to page lock operations",
    ],
    shortcuts: [
      "Press Cmd/Ctrl L to lock or unlock documents",
    ]
  },
  {
    version: "v2.2.0",
    date: "March 10, 2026",
    dateStr: "March 2026",
    dotColor: "bg-emerald-500",
    title: "v2.2.0 — Smart Dashboard Sprints",
    mockup: "/mockups/dark/Dashboard.png",
    summary: "Introducing Smart Dashboard priority buckets to segment work into Immediate, Today, Blocked, and Backlog piles. You can now prompt the AI assistant directly from the dashboard and lock tasks until block dependencies are fully resolved.",
    improvements: [
      "Smart Dashboard priority buckets: Immediate, Today, Blocked, Backlog",
      "Inline AI chat on the dashboard — ask what to tackle first",
      "Task dependency blocking logic — tasks cannot be marked done if blockers are open",
      "Derived Blocked state — automatically computed, no manual tagging",
    ],
    fixes: [
      "Fixed infinite dependency loops from blocking states",
      "Resolved dashboard metrics showing stale blocker percentages",
    ],
    api: [
      "Exposed blocker stats in workspace metrics endpoint",
    ],
    shortcuts: [
      "Press Cmd/Ctrl D to refocus the Smart Dashboard dashboard",
    ]
  },
  {
    version: "v2.1.0",
    date: "Feb 18, 2026",
    dateStr: "February 2026",
    dotColor: "bg-amber-500",
    title: "v2.1.0 — Real-time Socket Delivery",
    mockup: "/mockups/dark/Tasks.png",
    summary: "Overhauled Socket.io real-time message pipelines to deliver chat and alerts instantly. Badge counts are now synchronized across tabs in real-time, and performance for massive Kanban board rendering has been optimized.",
    improvements: [
      "Improved Socket.io real-time delivery for chat and notifications",
      "Unread badge counts now sync across devices instantly",
      "Performance improvements to Kanban board rendering",
      "Bug fixes for calendar event sync loop prevention",
    ],
    fixes: [
      "Fixed calendar loops where synced events duplicated in background",
      "Resolved socket connection loss during browser sleep states",
    ],
    api: [
      "Optimized payload footprint for WebSocket connection responses",
    ],
    shortcuts: [
      "Press N to open notification options dropdown",
    ]
  }
];

export default function ChangelogPage() {
  const [activeTab, setActiveTab] = useState("Changelog");
  const [expandedSections, setExpandedSections] = useState<Record<string, string[]>>({});

  const toggleSection = (version: string, section: string) => {
    setExpandedSections((prev) => {
      const current = prev[version] || [];
      const updated = current.includes(section)
        ? current.filter((s) => s !== section)
        : [...current, section];
      return { ...prev, [version]: updated };
    });
  };

  const isSectionExpanded = (version: string, section: string) => {
    return (expandedSections[version] || []).includes(section);
  };

  const navFilters = ["All", "Changelog", "Community", "News", "Craft", "AI", "Practices", "Press"];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col items-center">
        {/* Top Header */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-6 flex flex-col gap-8 text-left">
          
          <h1 className="font-sans text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-[-0.03em] leading-none text-zinc-900 dark:text-[#F7F8F8]">
            Now
          </h1>

          {/* Sub Navigation bar with search input and bell */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200/50 dark:border-white/[0.05] pb-4">
            
            {/* Filters */}
            <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveTab(filter)}
                  className={`text-[13px] font-medium tracking-wide transition-colors cursor-pointer shrink-0 ${
                    activeTab === filter
                      ? "text-zinc-900 dark:text-[#F7F8F8]"
                      : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-[#F7F8F8]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search + Bell */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="relative w-44 md:w-56">
                <Search className="absolute left-2.5 top-2.5 size-3.5 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-8 pl-8 pr-3 bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/[0.05] rounded-sm text-[12px] text-zinc-900 dark:text-[#F7F8F8] placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-hidden"
                />
              </div>
              <button className="size-8 flex items-center justify-center rounded-sm bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/[0.05] hover:bg-zinc-100 dark:hover:bg-white/[0.05] text-zinc-500 dark:text-zinc-400 cursor-pointer">
                <Bell className="size-3.5" />
              </button>
            </div>

          </div>

        </section>

        {/* ── SECTION 2: FEED LIST ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-24">
          <div className="w-full flex flex-col">
            {changelogEntries.map((entry) => (
              <div
                key={entry.version}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-t border-zinc-200/50 dark:border-white/[0.05] first:border-t-0"
              >
                
                {/* Left Date Side-bar */}
                <div className="col-span-12 lg:col-span-3 flex lg:flex-row items-center lg:items-start gap-2 lg:gap-3 text-left">
                  <span className={`size-1.5 rounded-full ${entry.dotColor} shrink-0 lg:mt-[5px]`} />
                  <span className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8] tracking-wide select-none">
                    {entry.date}
                  </span>
                </div>

                {/* Right Content */}
                <div className="col-span-12 lg:col-span-9 flex flex-col gap-6 text-left">
                  
                  {/* Version Header */}
                  <h2 className="font-sans text-2xl lg:text-[28px] font-semibold tracking-tight text-zinc-900 dark:text-[#F7F8F8] leading-snug">
                    {entry.title}
                  </h2>

                  {/* Containerless mockup with bottom fade shadow */}
                  <div className="w-full relative rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.48)] mt-2">
                    <div className="w-full relative rounded-lg overflow-hidden">
                      <Image
                        src={entry.mockup}
                        alt={entry.title}
                        width={1400}
                        height={850}
                        className="w-full h-auto object-cover object-top rounded-lg"
                      />
                      {/* Subtle hairline edge-lit boundary */}
                      <div className="absolute inset-0 rounded-lg border border-zinc-200/5 dark:border-white/[0.03] pointer-events-none" />
                      
                      {/* Bottom shadow blend */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-[15px] font-normal leading-[1.6] text-zinc-500 dark:text-[#8A8F98] max-w-[68ch] mt-2">
                    {entry.summary}
                  </p>

                  {/* Collapsible Categories Stack */}
                  <div className="flex flex-col w-full mt-4 border-b border-zinc-200/50 dark:border-white/[0.05]">
                    
                    {/* Improvements */}
                    {entry.improvements.length > 0 && (
                      <div className="border-t border-zinc-200/50 dark:border-white/[0.05]">
                        <button
                          onClick={() => toggleSection(entry.version, "improvements")}
                          className="w-full flex items-center justify-between py-3 text-[13px] font-semibold text-zinc-950 dark:text-[#F7F8F8] cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/[0.01] transition-colors pr-2"
                        >
                          <span>Improvements</span>
                          {isSectionExpanded(entry.version, "improvements") ? (
                            <ChevronDown className="size-4 text-zinc-400" />
                          ) : (
                            <ChevronRight className="size-4 text-zinc-400" />
                          )}
                        </button>
                        
                        {isSectionExpanded(entry.version, "improvements") && (
                          <div className="pl-4 pb-4 pt-1 flex flex-col gap-3">
                            {entry.improvements.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-[13px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                                <span className="mt-[7px] size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Fixes */}
                    {entry.fixes.length > 0 && (
                      <div className="border-t border-zinc-200/50 dark:border-white/[0.05]">
                        <button
                          onClick={() => toggleSection(entry.version, "fixes")}
                          className="w-full flex items-center justify-between py-3 text-[13px] font-semibold text-zinc-950 dark:text-[#F7F8F8] cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/[0.01] transition-colors pr-2"
                        >
                          <span>Fixes</span>
                          {isSectionExpanded(entry.version, "fixes") ? (
                            <ChevronDown className="size-4 text-zinc-400" />
                          ) : (
                            <ChevronRight className="size-4 text-zinc-400" />
                          )}
                        </button>
                        
                        {isSectionExpanded(entry.version, "fixes") && (
                          <div className="pl-4 pb-4 pt-1 flex flex-col gap-3">
                            {entry.fixes.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-[13px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                                <span className="mt-[7px] size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* API */}
                    {entry.api.length > 0 && (
                      <div className="border-t border-zinc-200/50 dark:border-white/[0.05]">
                        <button
                          onClick={() => toggleSection(entry.version, "api")}
                          className="w-full flex items-center justify-between py-3 text-[13px] font-semibold text-zinc-950 dark:text-[#F7F8F8] cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/[0.01] transition-colors pr-2"
                        >
                          <span>API</span>
                          {isSectionExpanded(entry.version, "api") ? (
                            <ChevronDown className="size-4 text-zinc-400" />
                          ) : (
                            <ChevronRight className="size-4 text-zinc-400" />
                          )}
                        </button>
                        
                        {isSectionExpanded(entry.version, "api") && (
                          <div className="pl-4 pb-4 pt-1 flex flex-col gap-3">
                            {entry.api.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-[13px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                                <span className="mt-[7px] size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Keyboard shortcuts */}
                    {entry.shortcuts.length > 0 && (
                      <div className="border-t border-zinc-200/50 dark:border-white/[0.05]">
                        <button
                          onClick={() => toggleSection(entry.version, "shortcuts")}
                          className="w-full flex items-center justify-between py-3 text-[13px] font-semibold text-zinc-950 dark:text-[#F7F8F8] cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/[0.01] transition-colors pr-2"
                        >
                          <span>Keyboard shortcuts</span>
                          {isSectionExpanded(entry.version, "shortcuts") ? (
                            <ChevronDown className="size-4 text-zinc-400" />
                          ) : (
                            <ChevronRight className="size-4 text-zinc-400" />
                          )}
                        </button>
                        
                        {isSectionExpanded(entry.version, "shortcuts") && (
                          <div className="pl-4 pb-4 pt-1 flex flex-col gap-3">
                            {entry.shortcuts.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-[13px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed">
                                <span className="mt-[7px] size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                </div>

              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
