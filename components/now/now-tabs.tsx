"use client";

import Link from "next/link";
import { Search, Rss } from "lucide-react";
import { NOW_TABS, type NowTab } from "@/lib/now";

interface NowTabsProps {
  activeTab: NowTab;
  onTabChange: (tab: NowTab) => void;
  query: string;
  onQueryChange: (query: string) => void;
}

/**
 * Now header: arrival-calm title, quiet text tabs, carved search pill.
 * No eyebrow kicker, no accent color — hierarchy from weight and size.
 */
export function NowTabs({ activeTab, onTabChange, query, onQueryChange }: NowTabsProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-[clamp(2.75rem,5vw,4rem)] font-semibold tracking-tight text-balance text-foreground">
        Now
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <nav aria-label="Now sections" className="flex items-center gap-5 overflow-x-auto [scrollbar-width:none]">
          {NOW_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              aria-pressed={activeTab === tab}
              className={`whitespace-nowrap text-[15px] transition-colors duration-200 cursor-pointer active:scale-[0.97] ${
                activeTab === tab
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div className="relative w-full lg:w-72">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search..."
              aria-label="Search Now"
              className="w-full pl-11 pr-5 py-2.5 rounded-full bg-card border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors duration-200"
            />
          </div>
          <Link
            href="/now/rss.xml"
            aria-label="RSS feed"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-95"
          >
            <Rss className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
