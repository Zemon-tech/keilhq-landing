"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Bell, ChevronRight, ChevronDown } from "lucide-react";
import { DocumentRenderer } from "@keystatic/core/renderer";

interface ChangelogEntry {
  slug: string;
  version: string;
  date: string;
  dateStr: string;
  dotColor: string;
  title: string;
  mockup: string;
  summaryNode: any;
  summaryText: string;
  improvements: string[];
  fixes: string[];
  api: string[];
  shortcuts: string[];
}

const NAV_FILTERS = ["All", "Changelog", "Community", "News", "Craft", "AI", "Practices", "Press"];

export function ChangelogClient({ entries }: { entries: ChangelogEntry[] }) {
  const [activeTab, setActiveTab] = useState("Changelog");
  const [searchQuery, setSearchQuery] = useState("");
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

  const isSectionExpanded = (version: string, section: string) =>
    (expandedSections[version] || []).includes(section);

  const filteredEntries = entries.filter((entry) => {
    if (searchQuery === "") return true;
    const q = searchQuery.toLowerCase();
    return (
      entry.title.toLowerCase().includes(q) ||
      entry.version.toLowerCase().includes(q) ||
      entry.summaryText.toLowerCase().includes(q)
    );
  });

  return (
    <main className="flex-1 flex flex-col items-center">
      {/* Top Header */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-6 flex flex-col gap-8 text-left">
        <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight leading-none text-foreground">
          Now
        </h1>

        {/* Sub Navigation */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveTab(filter)}
                className={`text-[13px] font-medium tracking-wide transition-colors cursor-pointer shrink-0 font-display ${
                  activeTab === filter
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="relative w-44 md:w-56">
              <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-8 pl-8 pr-3 bg-card border border-border rounded-sm text-[12px] text-foreground placeholder-muted-foreground focus:outline-hidden"
              />
            </div>
            <button className="size-8 flex items-center justify-center rounded-sm bg-card border border-border hover:bg-muted/50 text-muted-foreground cursor-pointer">
              <Bell className="size-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Feed List */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="w-full flex flex-col">
          {filteredEntries.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground text-sm">
              No changelog entries match your search.
            </div>
          ) : (
            filteredEntries.map((entry) => (
              <div
                key={entry.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-t border-border first:border-t-0"
              >
                {/* Left Date Sidebar */}
                <div className="col-span-12 lg:col-span-3 flex lg:flex-row items-center lg:items-start gap-2 lg:gap-3 text-left">
                  <span className={`size-1.5 rounded-full ${entry.dotColor} shrink-0 lg:mt-[5px]`} />
                  <span className="text-[13px] font-semibold text-foreground tracking-wide select-none">
                    {entry.date}
                  </span>
                </div>

                {/* Right Content */}
                <div className="col-span-12 lg:col-span-9 flex flex-col gap-6 text-left">
                  {/* Version Header */}
                  <h2 className="font-display text-2xl lg:text-[28px] font-semibold tracking-tight text-foreground leading-snug">
                    {entry.title}
                  </h2>

                  {/* Mockup */}
                  <div className="w-full relative rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.48)] mt-2">
                    <div className="w-full relative rounded-lg overflow-hidden">
                      <Image
                        src={entry.mockup}
                        alt={entry.title}
                        width={1400}
                        height={850}
                        className="w-full h-auto object-cover object-top rounded-lg"
                      />
                      <div className="absolute inset-0 rounded-lg border border-border pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="prose prose-zinc dark:prose-invert max-w-none text-[15px] font-normal leading-[1.6] text-muted-foreground mt-2">
                    <DocumentRenderer document={entry.summaryNode?.children || []} />
                  </div>

                  {/* Collapsible sections */}
                  <div className="flex flex-col w-full mt-4 border-b border-border">
                    {(
                      [
                        { key: "improvements", label: "Improvements", items: entry.improvements },
                        { key: "fixes",        label: "Fixes",        items: entry.fixes },
                        { key: "api",          label: "API",          items: entry.api },
                        { key: "shortcuts",    label: "Keyboard shortcuts", items: entry.shortcuts },
                      ] as const
                    ).map(({ key, label, items }) =>
                      items.length > 0 ? (
                        <div key={key} className="border-t border-border">
                          <button
                            onClick={() => toggleSection(entry.slug, key)}
                            className="w-full flex items-center justify-between py-3 text-[13px] font-semibold text-foreground cursor-pointer hover:bg-muted/30 transition-colors pr-2"
                          >
                            <span>{label}</span>
                            {isSectionExpanded(entry.slug, key) ? (
                              <ChevronDown className="size-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="size-4 text-muted-foreground" />
                            )}
                          </button>
                          {isSectionExpanded(entry.slug, key) && (
                            <div className="pl-4 pb-4 pt-1 flex flex-col gap-3">
                              {items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
                                  <span className="mt-[7px] size-1.5 rounded-full bg-muted-foreground/30 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : null
                    )}
                  </div>

                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
