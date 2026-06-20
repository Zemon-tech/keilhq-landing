"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const posts = [
  {
    slug: "the-plan-behind-the-315",
    tag: "User Stories",
    title: "The Plan Behind the 3:15",
    excerpt: "Maddie had a number to hit. Littlebird made the plan.",
    date: "May 7, 2026",
    image: "/mockups/blog1.png",
    readTime: "4 min read",
  },
  {
    slug: "what-meeting-notes-could-be",
    tag: "Productivity",
    title: "What Meeting Notes Could Be",
    excerpt: "Why every meeting notes app feels like it's missing something.",
    date: "May 1, 2026",
    image: "/mockups/blog2.png",
    readTime: "5 min read",
  },
  {
    slug: "clarity-before-action",
    tag: "Product",
    title: "Why clarity before action is the most important feature we ever built",
    excerpt: "Most task managers let you create a task called 'Fix the thing.' KielHQ doesn't. Here's why the Clarity Engine changes everything about how teams execute.",
    date: "May 20, 2026",
    image: "/mockups/blog3.png",
    readTime: "5 min read",
  },
  {
    slug: "ai-that-knows-your-work",
    tag: "AI",
    title: "KielHQ AI isn't built on top of your work — it's built into it",
    excerpt: "Generic AI chatbots give generic advice. KielHQ AI reads your actual tasks, workload, and sprint state before answering. Here's how it works.",
    date: "May 5, 2026",
    image: "/mockups/light/Tasks.png",
    readTime: "6 min read",
  },
  {
    slug: "meeting-transcription",
    tag: "Feature",
    title: "Stop losing decisions after meetings — KielHQ's recorder does the work",
    excerpt: "The average team wastes 31 hours a month in unproductive meetings. KielHQ ensures the decisions that come out of those meetings never disappear.",
    date: "April 28, 2026",
    image: "/mockups/light/Meeting.png",
    readTime: "4 min read",
  },
  {
    slug: "dependency-blocking",
    tag: "Product",
    title: "Hard dependency blocking: why soft reminders weren't enough",
    excerpt: "We tried warning banners. We tried color coding. None of it worked. So we built hard blocking — tasks that literally cannot be completed until their blockers are resolved.",
    date: "April 14, 2026",
    image: "/mockups/light/Motion.png",
    readTime: "5 min read",
  },
  {
    slug: "smart-dashboard-design",
    tag: "Design",
    title: "Designing a dashboard that tells you what to do next",
    excerpt: "The hardest part of building the Smart Dashboard wasn't the AI ranking — it was designing something that felt instant, obvious, and never overwhelming.",
    date: "March 30, 2026",
    image: "/mockups/light/Dashboard.png",
    readTime: "7 min read",
  },
];

const tags = [
  { label: "Latest", value: "All" },
  { label: "User Stories", value: "User Stories" },
  { label: "Productivity", value: "Productivity" },
  { label: "Company", value: "Company" },
  { label: "Product", value: "Product" },
  { label: "Guides", value: "Guide" },
];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = posts.filter(
    (p) => activeTag === "All" || p.tag === activeTag
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col pt-28">

        {/* ── SECTION 1: BLOG PAGE ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
            
            {/* Title */}
            <div className="text-left w-full">
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Blog
              </h1>
            </div>

            {/* 2-Column Sidebar Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start w-full">
              
              {/* Left Column: Category Navigation */}
              <div className="flex flex-col gap-4 text-left lg:border-r lg:border-border/10 lg:pr-4">
                {tags.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setActiveTag(t.value)}
                    className={`text-[14px] font-medium transition-colors text-left cursor-pointer hover:text-foreground active:scale-[0.98] ${
                      activeTag === t.value
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Right Column: Grid of posts */}
              <div className="lg:col-span-3">
                {filtered.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 w-full text-left">
                    {filtered.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col gap-4 select-none"
                      >
                        <div className="overflow-hidden rounded-md bg-muted aspect-[1.6/1] relative border border-border/50">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5 text-left">
                          <span className="text-[11px] font-semibold text-muted-foreground tracking-wide uppercase">
                            {post.tag}
                          </span>
                          <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-white leading-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150">
                            {post.title}
                          </h3>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-16 text-center text-sm text-zinc-400 dark:text-zinc-500">
                    No posts in this category yet.
                  </div>
                )}
              </div>

            </div>

          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
