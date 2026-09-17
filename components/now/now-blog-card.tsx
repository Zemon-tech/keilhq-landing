import Link from "next/link";
import type { NowItem } from "@/lib/now";
import { NowCover } from "./now-cover";

/**
 * Editorial card for blog + community stories.
 * Brand: Linen resting surface, hairline Limestone border, DM Sans title,
 * Inter body, JetBrains Mono meta. Motion breathes; rests under reduced motion.
 * Items without an href render as a static article (paste real URLs in lib/now.ts).
 */
export function NowBlogCard({ item }: { item: NowItem }) {
  const body = (
    <>
      <NowCover
        src={item.image}
        alt={item.title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="flex flex-1 flex-col gap-2.5 pt-6">
        <h3 className="font-display text-[22px] font-semibold leading-[1.25] tracking-tight text-balance text-foreground transition-colors duration-200 group-hover:text-muted-foreground line-clamp-2">
          {item.title}
        </h3>
        {item.excerpt && (
          <p className="text-[15px] leading-[1.65] text-muted-foreground line-clamp-3">
            {item.excerpt}
          </p>
        )}
        <p className="mt-auto pt-4 font-mono text-[12px] tracking-wide text-muted-foreground">
          {item.author} · {item.date}
        </p>
      </div>
    </>
  );

  if (!item.href) return <article className="flex h-full flex-col text-left">{body}</article>;

  return (
    <Link
      href={item.href}
      className="group flex h-full flex-col text-left transition-transform duration-150 ease-out active:scale-[0.98]"
    >
      {body}
    </Link>
  );
}
