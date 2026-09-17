import Image from "next/image";
import Link from "next/link";
import { getChangelogs } from "@/cms/helpers/changelog";
import changelogData from "@/cms/__generated__/changelog.json";
import { DocumentRenderer } from "@keystatic/core/renderer";

/**
 * Changelog detail: sticky mono date rail on the left, release content
 * on the right. Marigold dot marks the entry — one accent per surface.
 */
export async function ChangelogArticle({ slug }: { slug: string }) {
  const changelogs = (await getChangelogs()) as any[];
  const entry = changelogs.find((c) => c.slug === slug);
  if (!entry) return null;

  const raw = (changelogData as any[]).find((c) => c.slug === slug);
  const longDate = raw?.entry?.releaseDate
    ? new Date(raw.entry.releaseDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      })
    : entry.date;

  return (
    <main className="flex-1 flex flex-col">
      <article className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 md:pt-40 pb-24">
        <Link
          href="/now"
          className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          ← Back to Now
        </Link>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32 flex items-center gap-2.5 text-[15px] text-foreground">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--color-marigold)] shrink-0" />
              <span className="font-mono text-[13px] tracking-wide">{longDate}</span>
            </div>
            {entry.version && (
              <p className="mt-2 pl-4 font-mono text-[12px] tracking-wide text-muted-foreground">
                {entry.version}
              </p>
            )}
          </div>
          <div className="lg:col-span-9 max-w-3xl flex flex-col">
            <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight text-balance text-foreground">
              {entry.title}
            </h1>
            {entry.mockup && (
              <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-card">
                <Image
                  src={entry.mockup}
                  alt={entry.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            )}
            <div className="prose prose-zinc dark:prose-invert max-w-none mt-8 text-[16px] leading-[1.7]">
              <DocumentRenderer document={raw?.entry?.content || []} />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
