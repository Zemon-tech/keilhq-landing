import Link from "next/link";
import type { NowItem } from "@/lib/now";
import { NowCover } from "./now-cover";

/**
 * Changelog card. The release version is the eyebrow in JetBrains Mono;
 * Harvest Marigold marks the newest release only — one accent per surface.
 */
export function NowChangelogCard({ item, isLatest }: { item: NowItem; isLatest?: boolean }) {
  return (
    <Link
      href={item.href ?? "/now"}
      className="group flex h-full flex-col text-left transition-transform duration-150 ease-out active:scale-[0.98]"
    >
      <NowCover
        src={item.image}
        alt={item.title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="flex flex-1 flex-col gap-2.5 pt-6">
        {item.badge && (
          <p className="flex items-center gap-2 font-mono text-[12px] tracking-wide text-muted-foreground">
            {isLatest && (
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]"
              />
            )}
            {item.badge}
          </p>
        )}
        <h3 className="font-display text-[22px] font-semibold leading-[1.25] tracking-tight text-balance text-foreground transition-colors duration-200 group-hover:text-muted-foreground line-clamp-2">
          {item.title}
        </h3>
        {item.excerpt && (
          <p className="text-[15px] leading-[1.65] text-muted-foreground line-clamp-3">
            {item.excerpt}
          </p>
        )}
        <p className="mt-auto pt-4 font-mono text-[12px] tracking-wide text-muted-foreground">
          {item.date}
        </p>
      </div>
    </Link>
  );
}
