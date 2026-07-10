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
    author: {
      name: "Michael Sand",
      role: "Head of Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&crop=face"
    }
  },
  {
    slug: "what-meeting-notes-could-be",
    tag: "Productivity",
    title: "What Meeting Notes Could Be",
    excerpt: "Why every meeting notes app feels like it's missing something.",
    date: "May 1, 2026",
    image: "/mockups/blog2.png",
    readTime: "5 min read",
    author: {
      name: "Jordan Lee",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop&crop=face"
    }
  },
  {
    slug: "clarity-before-action",
    tag: "Product",
    title: "Why clarity before action is the most important feature we ever built",
    excerpt: "Most task managers let you create a task called 'Fix the thing.' KeilHQ doesn't. Here's why the Clarity Engine changes everything about how teams execute.",
    date: "May 20, 2026",
    image: "/mockups/blog3.png",
    readTime: "5 min read",
    author: {
      name: "Alex Rivera",
      role: "Co-founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face"
    }
  },
  {
    slug: "ai-that-knows-your-work",
    tag: "AI",
    title: "KeilHQ AI isn't built on top of your work — it's built into it",
    excerpt: "Generic AI chatbots give generic advice. KeilHQ AI reads your actual tasks, workload, and sprint state before answering. Here's how it works.",
    date: "May 5, 2026",
    image: "/mockups/light/Tasks.png",
    readTime: "6 min read",
    author: {
      name: "Priya Nair",
      role: "Co-founder & CTO",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop&crop=face"
    }
  },
  {
    slug: "meeting-transcription",
    tag: "Feature",
    title: "Stop losing decisions after meetings — KeilHQ's recorder does the work",
    excerpt: "The average team wastes 31 hours a month in unproductive meetings. KeilHQ ensures the decisions that come out of those meetings never disappear.",
    date: "April 28, 2026",
    image: "/mockups/light/Meeting.png",
    readTime: "4 min read",
    author: {
      name: "Sam Okafor",
      role: "Head of Engineering",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop&crop=face"
    }
  },
  {
    slug: "dependency-blocking",
    tag: "Product",
    title: "Hard dependency blocking: why soft reminders weren't enough",
    excerpt: "We tried warning banners. We tried color coding. None of it worked. So we built hard blocking — tasks that literally cannot be completed until their blockers are resolved.",
    date: "April 14, 2026",
    image: "/mockups/light/Motion.png",
    readTime: "5 min read",
    author: {
      name: "Alex Rivera",
      role: "Co-founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face"
    }
  },
  {
    slug: "smart-dashboard-design",
    tag: "Design",
    title: "Designing a dashboard that tells you what to do next",
    excerpt: "The hardest part of building the Smart Dashboard wasn't the AI ranking — it was designing something that felt instant, obvious, and never overwhelming.",
    date: "March 30, 2026",
    image: "/mockups/light/Dashboard.png",
    readTime: "7 min read",
    author: {
      name: "Jordan Lee",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop&crop=face"
    }
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

import { Search } from "lucide-react";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Latest / Featured Post
  const featuredPost = posts[0];
  // Editor's picks (next 3 posts)
  const editorsPicks = posts.slice(1, 4);

  // Filter logic for main grid
  const filteredGridPosts = posts.filter((post) => {
    // Exclude featured posts from main grid if we are on the default home view (no filters active)
    if (activeTag === "All" && searchQuery === "") {
      if (post.slug === featuredPost.slug || editorsPicks.some((ep) => ep.slug === post.slug)) {
        return false;
      }
    }

    // Match tag filter
    const matchesTag = activeTag === "All" || post.tag === activeTag;

    // Match search query
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tag.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  const showFeaturedSection = activeTag === "All" && searchQuery === "";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ── SECTION 1: BLOG HERO ── */}
        <section className="w-full pt-28 md:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
            <div className="text-left w-full flex flex-col gap-4">
              <span className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase">
                KeilHQ Editorial
              </span>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.08] text-zinc-900 dark:text-white max-w-3xl" style={{ letterSpacing: "-0.025em" }}>
                Stories &amp; insights from the team.
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                Thoughts on build speeds, remote alignment, engineering culture, and how we are building a workspace you&apos;ll actually use.
              </p>
            </div>

            {/* Asymmetric Featured Posts Section */}
            {showFeaturedSection && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start w-full border-t border-border/40 pt-12">
                {/* Latest Post Card (Left 2/3) */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <h2 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Latest Post
                  </h2>
                  <Link href={`/blog/${featuredPost.slug}`} className="group flex flex-col gap-6 w-full">
                    <div className="overflow-hidden rounded-lg bg-muted aspect-[16/9] relative border border-border/50 shadow-md">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </div>
                    <div className="flex flex-col gap-3 text-left">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 rounded-sm bg-secondary/80 border border-border/40 text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                          {featuredPost.tag}
                        </span>
                        <span className="text-[11px] text-muted-foreground">{featuredPost.readTime}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white leading-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150">
                        {featuredPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-3 pt-4 border-t border-border/40">
                        <div className="size-9 rounded-full overflow-hidden bg-muted shrink-0 border border-border/20">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-full h-full object-cover object-center" />
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-foreground">{featuredPost.author.name}</p>
                          <p className="text-[11px] text-muted-foreground">{featuredPost.date}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Editor's Picks (Right 1/3) */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Editor&apos;s Picks
                  </h2>
                  <div className="flex flex-col gap-8">
                    {editorsPicks.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex items-start gap-4 text-left">
                        <div className="size-20 rounded-md overflow-hidden bg-muted relative border border-border/50 shrink-0 shadow-sm">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="80px"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                            {post.tag}
                          </span>
                          <h4 className="font-display text-sm font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-[11px] text-muted-foreground mt-1">{post.date} · {post.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-b border-border/40 py-6 w-full">
              {/* Category Pills List */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full md:w-auto -mx-5 px-5 sm:mx-0 sm:px-0">
                {tags.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setActiveTag(t.value)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                      activeTag === t.value
                        ? "bg-foreground text-background border-foreground"
                        : "bg-secondary/40 text-muted-foreground border-border/50 hover:border-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Search Input Box */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full bg-secondary/25 border border-border/50 focus:outline-none focus:border-foreground/40 text-xs transition-colors"
                />
              </div>
            </div>

            {/* Main Post Grid */}
            <div className="w-full">
              {filteredGridPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-left">
                  {filteredGridPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col justify-between h-full bg-secondary/10 dark:bg-[#161616]/20 border border-border/40 rounded-lg p-5 hover:border-border/80 transition-all duration-300 hover:shadow-md shadow-sm"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-md bg-muted aspect-[16/10] relative border border-border/40">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold text-muted-foreground tracking-wide uppercase">
                              {post.tag}
                            </span>
                            <span className="text-[10px] text-muted-foreground/60">·</span>
                            <span className="text-[10px] text-muted-foreground/60">{post.readTime}</span>
                          </div>
                          <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/40 w-full">
                        <div className="size-8 rounded-full overflow-hidden bg-muted shrink-0 border border-border/20">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover object-center" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-foreground">{post.author.name}</p>
                          <p className="text-[10px] text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center text-sm text-zinc-400 dark:text-zinc-500">
                  No articles found matching your criteria.
                </div>
              )}
            </div>

            {/* Newsletter Dispatch Signup Block */}
            <div className="w-full bg-secondary/15 dark:bg-[#161616]/30 border border-border/40 rounded-lg p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="flex flex-col gap-2 text-left max-w-xl">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Subscribe to KeilHQ Dispatch
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The best tips, guides, and engineering updates delivered weekly to your inbox. No spam, unsubscribe anytime.
                </p>
              </div>
              <form className="flex gap-2 w-full md:w-auto md:min-w-[400px]" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-sm bg-background border border-border/50 text-xs focus:outline-none focus:border-foreground/40"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-sm bg-foreground text-background text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
