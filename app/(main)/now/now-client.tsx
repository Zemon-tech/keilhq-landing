"use client";

import { useMemo, useRef, useState } from "react";
import { type NowItem, type NowTab } from "@/lib/now";
import { NowTabs } from "@/components/now/now-tabs";
import { AllSections, NowGrid } from "@/components/now/now-grids";

function matchesQuery(item: NowItem, q: string): boolean {
  return (
    item.title.toLowerCase().includes(q) ||
    item.excerpt.toLowerCase().includes(q) ||
    item.author.toLowerCase().includes(q)
  );
}

export function NowClient({ items, initialTab = "All" }: { items: NowItem[]; initialTab?: NowTab }) {
  const [activeTab, setActiveTab] = useState<NowTab>(initialTab);
  const [query, setQuery] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const tabItems = useMemo(() => {
    const inTab = activeTab === "All" ? items : items.filter((item) => item.channel === activeTab);
    if (!searching) return inTab;
    return inTab.filter((item) => matchesQuery(item, q));
  }, [items, activeTab, q, searching]);

  const handleViewAll = (tab: NowTab) => {
    setActiveTab(tab);
    setQuery("");
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex-1 flex flex-col">
      <section className="w-full pt-28 md:pt-36 pb-8 px-5 sm:px-8 lg:px-12">
        <div ref={topRef} className="max-w-[1400px] mx-auto w-full scroll-mt-24">
          <NowTabs
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setQuery("");
            }}
            query={query}
            onQueryChange={setQuery}
          />
        </div>
      </section>

      <section className="w-full pb-28 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto w-full">
          {tabItems.length > 0 ? (
            searching || activeTab !== "All" ? (
              <NowGrid
                items={tabItems}
                variant={
                  activeTab === "Changelog" ? "timeline" : activeTab === "Press" ? "press" : "editorial"
                }
              />
            ) : (
              <AllSections items={tabItems} onViewAll={handleViewAll} />
            )
          ) : (
            <div className="py-24 px-6 text-center flex flex-col items-center justify-center border border-dashed border-border rounded-lg bg-card/50">
              <p className="font-display text-xl font-medium text-foreground">
                A quiet shelf — nothing here yet.
              </p>
              <p className="mt-2 text-sm text-muted-foreground max-w-[45ch]">
                Try a different section or search. New entries arrive here first.
              </p>
              <button
                onClick={() => {
                  setActiveTab("All");
                  setQuery("");
                }}
                className="mt-6 text-sm font-semibold text-foreground hover:underline cursor-pointer active:scale-[0.97] transition-transform"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
