import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { NowItem, NowTab } from "@/lib/now";
import { NowBlogCard } from "./now-blog-card";
import { NowChangelogCard } from "./now-changelog-card";
import { NowPressCard } from "./now-press-card";
import { NowCover } from "./now-cover";

function CardForItem({ item, latestChangelog }: { item: NowItem; latestChangelog?: string }) {
  if (item.kind === "changelog") {
    return <NowChangelogCard item={item} isLatest={item.slug === latestChangelog} />;
  }
  if (item.kind === "press") {
    return <NowPressCard item={item} />;
  }
  return <NowBlogCard item={item} />;
}

/**
 * Divider grid: hairline column dividers that stay correct on wrapped rows.
 * `divide-x` can't do this — it draws on every cell but the first, so a
 * 5-item grid gets a stray divider on row two. nth-child keeps dividers
 * (and edge padding) aligned to actual row starts/ends on lg.
 */
function DividerGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-20">
      {children}
    </div>
  );
}

function DividerCell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full lg:border-l lg:border-border lg:px-10 lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0">
      {children}
    </div>
  );
}

function EditorialGrid({ items }: { items: NowItem[] }) {
  const latestChangelog = items.find((item) => item.kind === "changelog")?.slug;
  return (
    <DividerGrid>
      {items.map((item) => (
        <DividerCell key={`${item.kind}-${item.slug}`}>
          <CardForItem item={item} latestChangelog={latestChangelog} />
        </DividerCell>
      ))}
    </DividerGrid>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-balance text-foreground">
      {title}
    </h2>
  );
}

function ViewAll({ label, onViewAll }: { label: string; onViewAll: () => void }) {
  return (
    <button
      onClick={onViewAll}
      className="mt-12 inline-flex items-center gap-1.5 text-[15px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer active:scale-[0.97]"
    >
      {label}
      <ArrowRight className="size-4" aria-hidden="true" />
    </button>
  );
}

/**
 * Changelog strip: horizontal dot timeline — connected hairline, Marigold
 * on the newest release, mono uppercase dates. Mirrors the reference.
 */
function ChangelogStrip({ items }: { items: NowItem[] }) {
  return (
    <div>
      <div className="relative hidden md:block" aria-hidden="true">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border" />
        <div className="relative grid grid-cols-4">
          {items.map((item, index) => (
            <div key={item.slug}>
              <span
                className={`block size-2.5 rounded-full ring-4 ring-background ${
                  index === 0 ? "bg-[var(--color-marigold)]" : "bg-muted-foreground/50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-0 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={item.href ?? "/now"}
            className="group flex flex-col text-left transition-transform duration-150 ease-out active:scale-[0.99]"
          >
            <span
              aria-hidden="true"
              className="mb-5 block size-2 rounded-full bg-muted-foreground/50 md:hidden"
            />
            <h3 className="font-display text-[17px] font-medium leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
              {item.title}
            </h3>
            {item.excerpt && (
              <p className="mt-2.5 text-[15px] leading-[1.6] text-muted-foreground line-clamp-2">
                {item.excerpt}
              </p>
            )}
            <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.08em] text-muted-foreground">
              {item.date}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function PressStrip({ items }: { items: NowItem[] }) {
  return (
    <DividerGrid>
      {items.map((item) => (
        <DividerCell key={`${item.kind}-${item.slug}`}>
          <NowPressCard item={item} />
        </DividerCell>
      ))}
    </DividerGrid>
  );
}

/**
 * The All view: separated sections over one feed — latest covers,
 * Changelog timeline strip, Press strip, then past stories in the same
 * editorial cards. Each list is disjoint; nothing repeats on the page.
 */
export function AllSections({
  items,
  onViewAll,
}: {
  items: NowItem[];
  onViewAll: (tab: NowTab) => void;
}) {
  // Latest covers span every kind — blogs, changelog, press, whatever is
  // newest. Kind strips below exclude these so no entry repeats on the page.
  const latest = items.slice(0, 3);
  const latestKeys = new Set(latest.map((item) => `${item.kind}-${item.slug}`));
  const changelogItems = items.filter(
    (item) => item.kind === "changelog" && !latestKeys.has(`${item.kind}-${item.slug}`)
  );
  const pressItems = items.filter(
    (item) => item.kind === "press" && !latestKeys.has(`${item.kind}-${item.slug}`)
  );
  const stripKeys = new Set(
    [...changelogItems, ...pressItems].map((item) => `${item.kind}-${item.slug}`)
  );
  const past = items.filter(
    (item) => !latestKeys.has(`${item.kind}-${item.slug}`) && !stripKeys.has(`${item.kind}-${item.slug}`)
  );

  return (
    <div className="flex flex-col gap-24 lg:gap-32">
      {latest.length > 0 && <EditorialGrid items={latest} />}

      {changelogItems.length > 0 && (
        <section aria-label="Changelog">
          <SectionHeader title="Changelog" />
          <div className="mt-10">
            <ChangelogStrip items={changelogItems} />
          </div>
          <ViewAll label="View all" onViewAll={() => onViewAll("Changelog")} />
        </section>
      )}

      {pressItems.length > 0 && (
        <section aria-label="Press">
          <SectionHeader title="Press" />
          <div className="mt-10">
            <PressStrip items={pressItems} />
          </div>
          <ViewAll label="View all" onViewAll={() => onViewAll("Press")} />
        </section>
      )}

      {past.length > 0 && <EditorialGrid items={past} />}
    </div>
  );
}

/**
 * Changelog tab: date rail on the left, release cover + title + summary
 * on the right. Every row carries its mockup, like the earlier Changelog page.
 */
function ChangelogTimeline({ items }: { items: NowItem[] }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, index) => (
        <li
          key={item.slug}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 first:pt-0 last:pb-0 border-t border-border first:border-t-0"
        >
          <div className="md:col-span-3">
            <p className="flex items-center gap-2.5 font-mono text-[13px] tracking-wide text-foreground">
              <span
                aria-hidden="true"
                className={`size-1.5 shrink-0 rounded-full ${
                  index === 0 ? "bg-[var(--color-marigold)]" : "bg-border"
                }`}
              />
              {item.date}
            </p>
            {item.badge && (
              <p className="mt-2 pl-4 font-mono text-[12px] tracking-wide text-muted-foreground">
                {item.badge}
              </p>
            )}
          </div>
          <div className="md:col-span-9 max-w-2xl">
            <Link
              href={item.href ?? "/now"}
              className="group flex flex-col text-left transition-transform duration-150 ease-out active:scale-[0.99]"
            >
              {item.image && (
                <NowCover
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              )}
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,1.9rem)] font-semibold tracking-tight text-balance text-foreground transition-colors duration-200 group-hover:text-muted-foreground mt-6">
                {item.title}
              </h3>
            </Link>
            {item.excerpt && (
              <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground line-clamp-2 max-w-[65ch]">
                {item.excerpt}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export type NowGridVariant = "editorial" | "timeline" | "press";

export function NowGrid({ items, variant }: { items: NowItem[]; variant: NowGridVariant }) {
  if (variant === "timeline") return <ChangelogTimeline items={items} />;
  if (variant === "press") return <PressStrip items={items} />;
  return <EditorialGrid items={items} />;
}
