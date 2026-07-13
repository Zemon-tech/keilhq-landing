"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface BlogListItem {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const tags = [
  { label: "Latest", value: "All" },
  { label: "User Stories", value: "User Stories" },
  { label: "Productivity", value: "Productivity" },
  { label: "Company", value: "Company" },
  { label: "Product", value: "Product" },
  { label: "Guides", value: "Guide" },
];

import { Search } from "lucide-react";

export function BlogPageClient({ posts }: { posts: BlogListItem[] }) {
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
                      <div className="flex flex-col gap-1.5 flex-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-semibold text-muted-foreground tracking-wider uppercase">
                            {post.tag}
                          </span>
                        </div>
                        <h4 className="font-display text-sm font-semibold text-zinc-900 dark:text-white leading-snug line-clamp-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-muted-foreground">
                          {post.date} &middot; {post.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 2: ARTICLES FILTER GRID ── */}
      <section className="w-full pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">
          
          {/* Controls Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/30 pb-6">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {tags.map((tag) => (
                <button
                  key={tag.value}
                  onClick={() => setActiveTag(tag.value)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wide cursor-pointer transition-all duration-150 active:scale-[0.97] border whitespace-nowrap ${
                    activeTag === tag.value
                      ? "bg-foreground border-foreground text-background"
                      : "bg-secondary/40 border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 rounded-sm bg-secondary/20 border border-border/50 text-xs focus:outline-none focus:border-foreground/30 focus:bg-secondary/40 text-foreground placeholder-muted-foreground transition-all"
              />
            </div>
          </div>

          {/* Grid Layout */}
          {filteredGridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
              {filteredGridPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-4 text-left">
                  <div className="overflow-hidden rounded-md bg-muted aspect-[1.6/1] relative border border-border/50 shadow-xs">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {post.tag}
                      </span>
                      <span className="text-[11px] text-muted-foreground">&middot; {post.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="size-6 rounded-full overflow-hidden bg-muted border border-border/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="text-[11px]">
                        <span className="font-semibold text-foreground">{post.author.name}</span>
                        <span className="text-muted-foreground"> &middot; {post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center justify-center border border-dashed border-border/50 rounded-lg bg-secondary/10">
              <span className="text-sm font-semibold text-muted-foreground">No articles match your search criteria.</span>
              <button 
                onClick={() => { setActiveTag("All"); setSearchQuery(""); }} 
                className="mt-4 text-xs font-semibold text-foreground hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── SECTION 3: NEWSLETTER CTA ── */}
      <section className="w-full py-20 px-5 sm:px-8 lg:px-12 bg-secondary/15 dark:bg-white/[0.01] border-t border-border/40">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Subscribe to the KeilHQ newsletter
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md">
            Get the latest updates on new features, deep dives into our engineering workflow, and templates for high-performing product teams.
          </p>
          <form className="flex w-full max-w-md gap-2.5 mt-2">
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
      </section>

    </main>
  );
}
