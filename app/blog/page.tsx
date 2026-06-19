"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "clarity-before-action",
    tag: "Product",
    tagColor: "bg-blue-100/80 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300",
    title: "Why clarity before action is the most important feature we ever built",
    excerpt:
      "Most task managers let you create a task called 'Fix the thing.' KielHQ doesn't. Here's why the Clarity Engine changes everything about how teams execute.",
    date: "May 20, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "replace-your-stack",
    tag: "Guide",
    tagColor: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
    title: "How to replace Slack + Asana + Notion with one tool in a weekend",
    excerpt:
      "A step-by-step migration guide for teams switching to KielHQ. Import your data, connect your calendar, and invite your team in under 10 minutes.",
    date: "May 12, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "ai-that-knows-your-work",
    tag: "AI",
    tagColor: "bg-violet-100/80 text-violet-800 dark:bg-violet-950/40 dark:text-violet-300",
    title: "KielHQ AI isn't built on top of your work — it's built into it",
    excerpt:
      "Generic AI chatbots give generic advice. KielHQ AI reads your actual tasks, workload, and sprint state before answering. Here's how it works.",
    date: "May 5, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "meeting-transcription",
    tag: "Feature",
    tagColor: "bg-amber-100/80 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
    title: "Stop losing decisions after meetings — KielHQ's recorder does the work",
    excerpt:
      "The average team wastes 31 hours a month in unproductive meetings. KielHQ ensures the decisions that come out of those meetings never disappear.",
    date: "April 28, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "dependency-blocking",
    tag: "Product",
    tagColor: "bg-blue-100/80 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300",
    title: "Hard dependency blocking: why soft reminders weren't enough",
    excerpt:
      "We tried warning banners. We tried color coding. None of it worked. So we built hard blocking — tasks that literally cannot be completed until their blockers are resolved.",
    date: "April 14, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "smart-dashboard-design",
    tag: "Design",
    tagColor: "bg-rose-100/80 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300",
    title: "Designing a dashboard that tells you what to do next",
    excerpt:
      "The hardest part of building the Smart Dashboard wasn't the AI ranking — it was designing something that felt instant, obvious, and never overwhelming.",
    date: "March 30, 2026",
    readTime: "7 min read",
    featured: false,
  },
];

const tags = ["All", "Product", "Guide", "AI", "Feature", "Design"];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");

  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeTag === "All" || p.tag === activeTag);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1">

        {/* ─── HERO ─── */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white">
                Blog
              </h1>
              <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400">
                Ideas, guides, and product updates from the KeilHQ team.
              </p>
            </div>
            {/* Tag filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
                    activeTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-zinc-100/80 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-white/10 border border-zinc-200/60 dark:border-white/5"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">

            {/* ─── FEATURED POST ─── */}
            {featured && (activeTag === "All" || activeTag === featured.tag) && (
              <>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block mb-10 p-8 sm:p-10 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/30 dark:bg-white/[0.015] hover:bg-zinc-100/40 dark:hover:bg-white/[0.025] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${featured.tagColor}`}>
                      {featured.tag}
                    </span>
                    <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 px-2 py-0.5 rounded-sm bg-zinc-100/60 dark:bg-white/5">
                      Featured
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 ml-1">{featured.date} · {featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors mb-3" style={{ textWrap: "balance" } as React.CSSProperties}>
                    {featured.title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-zinc-900 dark:text-white group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight className="size-4" />
                  </span>
                </Link>
                <div className="h-px bg-zinc-200/60 dark:bg-white/5 mb-10" />
              </>
            )}

            {/* ─── POSTS GRID ─── */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {filtered.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col p-7 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-white/[0.01] hover:bg-zinc-100/40 dark:hover:bg-white/[0.025] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${post.tagColor}`}>
                        {post.tag}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">{post.date} · {post.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:gap-2 transition-all">
                      Read <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-sm text-zinc-400 dark:text-zinc-500">
                No posts in this category yet.
              </div>
            )}

            {/* ─── NEWSLETTER ─── */}
            <div className="mb-16 p-8 sm:p-10 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/30 dark:bg-white/[0.015] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">Stay in the loop</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">New posts, product updates, and guides — no spam.</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto sm:min-w-80">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2.5 rounded-sm border border-zinc-200/80 dark:border-white/8 bg-white dark:bg-white/[0.03] text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="px-4 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shrink-0 cursor-pointer active:scale-[0.98]">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
