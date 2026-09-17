import { Play } from "lucide-react";
import type { NowItem } from "@/lib/now";
import { NowCover } from "./now-cover";
import { PlatformIcon } from "./platform-icon";

/**
 * Press card — one skeleton for every platform (LinkedIn, X, YouTube,
 * News, Podcast). Only the eyebrow glyph changes:
 * [platform icon] Source · date (JetBrains Mono) above the title,
 * carved play badge on video covers. No excerpt — matches the reference.
 */
export function NowPressCard({ item }: { item: NowItem }) {
  const body = (
    <>
      {item.image ? (
        <NowCover
          src={item.image}
          alt={item.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
          objectPosition="object-center"
        >
          {item.isVideo && item.href && (
            <span
              className={`absolute left-3 top-3 flex size-9 items-center justify-center rounded-md border shadow-sm ${
                item.featured
                  ? "border-transparent bg-[var(--color-marigold)] text-[#171514]"
                  : "border-border bg-foreground text-background"
              }`}
            >
              <Play className="size-4" fill="currentColor" aria-hidden="true" />
              <span className="sr-only">Play video</span>
            </span>
          )}
        </NowCover>
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-[16/10] w-full items-center justify-center rounded-md border border-border bg-card"
        >
          <PlatformIcon platform={item.platform} className="size-10 text-muted-foreground/40" />
        </div>
      )}
      <div className="flex flex-col gap-2.5 pt-5">
        <p className="flex items-center gap-1.5 font-mono text-[12px] tracking-wide text-muted-foreground">
          <PlatformIcon platform={item.platform} className="size-3.5 shrink-0" />
          {item.author} · {item.date}
        </p>
        <h3 className="font-display text-[19px] font-semibold leading-[1.3] tracking-tight text-balance text-foreground transition-colors duration-200 group-hover:text-muted-foreground line-clamp-2">
          {item.title}
        </h3>
      </div>
    </>
  );

  if (!item.href) return <article className="flex h-full flex-col text-left">{body}</article>;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col text-left transition-transform duration-150 ease-out active:scale-[0.98]"
    >
      {body}
    </a>
  );
}
