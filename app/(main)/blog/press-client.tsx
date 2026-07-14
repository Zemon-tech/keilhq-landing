"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ExternalLink } from "lucide-react";

/* ────────────────────────────────────────── Types ─── */

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

export interface PressListItem {
  slug: string;
  platform: "linkedin" | "instagram" | "x" | "news";
  title: string;
  excerpt: string;
  url: string;
  thumbnail: string | null;
  date: string;
  featured: boolean;
}

/* ────────────────────────────────────────── Constants ─── */

const BLOG_TAGS = [
  { label: "All", value: "All" },
  { label: "User Stories", value: "User Stories" },
  { label: "Productivity", value: "Productivity" },
  { label: "Company", value: "Company" },
  { label: "Product", value: "Product" },
  { label: "Guides", value: "Guide" },
];

const PLATFORM_LABELS: Record<PressListItem["platform"], string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  x: "X (Twitter)",
  news: "Press",
};

/* ────────────────────────────────────────── Platform Icons ─── */

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function NewsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function PlatformIcon({ platform, className }: { platform: PressListItem["platform"]; className?: string }) {
  switch (platform) {
    case "linkedin": return <LinkedInIcon className={className} />;
    case "x":        return <XIcon className={className} />;
    case "instagram":return <InstagramIcon className={className} />;
    case "news":     return <NewsIcon className={className} />;
  }
}

/* ────────────────────────────────────────── Press Card ─── */

function PressCard({ item }: { item: PressListItem }) {
  const platformColor: Record<PressListItem["platform"], string> = {
    linkedin: "text-[#0A66C2] bg-[#0A66C2]/8 border-[#0A66C2]/20",
    x:        "text-zinc-900 dark:text-[#F7F8F8] bg-zinc-100 dark:bg-white/5 border-zinc-200/50 dark:border-white/[0.08]",
    instagram:"text-pink-600 bg-pink-50 dark:bg-pink-500/8 border-pink-200/50 dark:border-pink-500/20",
    news:     "text-violet-600 bg-violet-50 dark:bg-violet-500/8 border-violet-200/50 dark:border-violet-500/20",
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-0 text-left rounded-lg border border-zinc-200/50 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:bg-zinc-50 dark:hover:bg-white/[0.04] transition-all duration-200 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-white/[0.04] relative">
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          /* Placeholder with platform branding */
          <div className="w-full h-full flex items-center justify-center">
            <PlatformIcon
              platform={item.platform}
              className="size-10 text-zinc-300 dark:text-zinc-700"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Platform badge */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide border ${platformColor[item.platform]}`}>
            <PlatformIcon platform={item.platform} className="size-3" />
            {PLATFORM_LABELS[item.platform]}
          </span>
          <ExternalLink className="size-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors" />
        </div>

        {/* Title */}
        <p className="text-sm font-semibold text-zinc-900 dark:text-[#F7F8F8] leading-snug line-clamp-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
          {item.title.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </p>

        {/* Excerpt */}
        {item.excerpt && (
          <p className="text-[12px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed line-clamp-3">
            {item.excerpt}
          </p>
        )}

        {/* Date */}
        {item.date && (
          <span className="text-[11px] text-zinc-400 dark:text-zinc-600 mt-auto pt-1">
            {item.date}
          </span>
        )}
      </div>
    </a>
  );
}

/* ────────────────────────────────────────── Main Client Component ─── */

type TabId = "blog" | "social";

export function PressPageClient({
  posts,
  pressItems,
}: {
  posts: BlogListItem[];
  pressItems: PressListItem[];
}) {
  const [activeTab, setActiveTab] = useState<TabId>("blog");
  const [activeBlogTag, setActiveBlogTag] = useState("All");
  const [activePressFilter, setActivePressFilter] = useState<"all" | PressListItem["platform"]>("all");
  const [searchQuery, setSearchQuery] = useState("");

  /* ── Blog filtering ── */
  const featuredPost = posts[0];
  const editorsPicks = posts.slice(1, 4);

  const filteredBlogPosts = posts.filter((post) => {
    if (activeBlogTag === "All" && searchQuery === "") {
      if (post.slug === featuredPost?.slug || editorsPicks.some((ep) => ep.slug === post.slug)) {
        return false;
      }
    }
    const matchesTag = activeBlogTag === "All" || post.tag === activeBlogTag;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const showFeaturedSection = activeTab === "blog" && activeBlogTag === "All" && searchQuery === "";

  /* ── Press filtering ── */
  const PRESS_FILTERS = [
    { label: "All", value: "all" as const },
    { label: "LinkedIn", value: "linkedin" as const },
    { label: "X (Twitter)", value: "x" as const },
    { label: "Instagram", value: "instagram" as const },
    { label: "Press", value: "news" as const },
  ];

  const filteredPressItems = pressItems.filter((item) => {
    const matchesPlatform = activePressFilter === "all" || item.platform === activePressFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  return (
    <main className="flex-1 flex flex-col">

      {/* ── HERO ── */}
      <section className="w-full pt-28 md:pt-32 pb-10 px-5 sm:px-8 lg:px-12 animate-fade-rise">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
          <span className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase">
            KeilHQ Editorial
          </span>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.08] text-zinc-900 dark:text-white max-w-3xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Stories, insights &amp; press.
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
            Deep-dives from the team, updates from the product, and mentions across the internet.
          </p>

          {/* Tab switcher */}
          <div className="flex items-center gap-1 border-b border-border/40 mt-2">
            {([
              { id: "blog" as TabId, label: "Blog" },
              { id: "social" as TabId, label: "Social & Press" },
            ]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSearchQuery(""); }}
                className={`px-4 py-2.5 text-[13px] font-semibold tracking-wide border-b-2 -mb-px transition-all duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TAB ── */}
      {activeTab === "blog" && (
        <>
          {/* Featured Hero (only on default "All" view) */}
          {showFeaturedSection && featuredPost && (
            <section className="w-full pb-10 px-5 sm:px-8 lg:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start w-full border-t border-border/40 pt-10">
                  {/* Latest Post */}
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    <h2 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider">Latest Post</h2>
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
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{featuredPost.excerpt}</p>
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

                  {/* Editor's Picks */}
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider">Editor&apos;s Picks</h2>
                    <div className="flex flex-col gap-8">
                      {editorsPicks.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex items-start gap-4 text-left">
                          <div className="size-20 rounded-md overflow-hidden bg-muted relative border border-border/50 shrink-0 shadow-sm">
                            <Image src={post.image} alt={post.title} fill sizes="80px" className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                          </div>
                          <div className="flex flex-col gap-1.5 flex-1 pr-2">
                            <span className="text-[9px] font-semibold text-muted-foreground tracking-wider uppercase">{post.tag}</span>
                            <h4 className="font-display text-sm font-semibold text-zinc-900 dark:text-white leading-snug line-clamp-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                              {post.title}
                            </h4>
                            <span className="text-[10px] text-muted-foreground">{post.date} &middot; {post.readTime}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Articles Grid */}
          <section className="w-full pb-24 px-5 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">

              {/* Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/30 pb-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 [scrollbar-width:none]">
                  {BLOG_TAGS.map((tag) => (
                    <button
                      key={tag.value}
                      onClick={() => setActiveBlogTag(tag.value)}
                      className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wide cursor-pointer transition-all duration-150 active:scale-[0.97] border whitespace-nowrap ${
                        activeBlogTag === tag.value
                          ? "bg-foreground border-foreground text-background"
                          : "bg-secondary/40 border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
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

              {/* Grid */}
              {filteredBlogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                  {filteredBlogPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-4 text-left">
                      <div className="overflow-hidden rounded-md bg-muted aspect-[1.6/1] relative border border-border/50 shadow-xs">
                        <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]" />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{post.tag}</span>
                          <span className="text-[11px] text-muted-foreground">&middot; {post.readTime}</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
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
                  <span className="text-sm font-semibold text-muted-foreground">No articles match your search.</span>
                  <button
                    onClick={() => { setActiveBlogTag("All"); setSearchQuery(""); }}
                    className="mt-4 text-xs font-semibold text-foreground hover:underline cursor-pointer"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* ── SOCIAL & PRESS TAB ── */}
      {activeTab === "social" && (
        <section className="w-full pb-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">

            {/* Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-border/40 pt-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 [scrollbar-width:none]">
                {PRESS_FILTERS.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActivePressFilter(f.value)}
                    className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wide cursor-pointer transition-all duration-150 active:scale-[0.97] border whitespace-nowrap ${
                      activePressFilter === f.value
                        ? "bg-foreground border-foreground text-background"
                        : "bg-secondary/40 border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="w-full pl-9 pr-4 py-2 rounded-sm bg-secondary/20 border border-border/50 text-xs focus:outline-none focus:border-foreground/30 focus:bg-secondary/40 text-foreground placeholder-muted-foreground transition-all"
                />
              </div>
            </div>

            {/* Featured press item (full-width) */}
            {activePressFilter === "all" && searchQuery === "" && (() => {
              const featured = filteredPressItems.find((i) => i.featured);
              if (!featured) return null;
              return (
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full border border-zinc-200/50 dark:border-white/[0.06] rounded-lg overflow-hidden flex flex-col md:flex-row bg-white dark:bg-white/[0.02] hover:bg-zinc-50 dark:hover:bg-white/[0.04] transition-all duration-200"
                >
                  <div className="md:w-1/2 aspect-[16/9] md:aspect-auto relative bg-zinc-100 dark:bg-white/[0.04] overflow-hidden">
                    {featured.thumbnail ? (
                      <Image src={featured.thumbnail} alt={featured.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <PlatformIcon platform={featured.platform} className="size-16 text-zinc-200 dark:text-zinc-700" />
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col gap-4 justify-center">
                    <span className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide border ${
                      {
                        linkedin: "text-[#0A66C2] bg-[#0A66C2]/8 border-[#0A66C2]/20",
                        x: "text-zinc-900 dark:text-[#F7F8F8] bg-zinc-100 dark:bg-white/5 border-zinc-200/50 dark:border-white/[0.08]",
                        instagram: "text-pink-600 bg-pink-50 dark:bg-pink-500/8 border-pink-200/50 dark:border-pink-500/20",
                        news: "text-violet-600 bg-violet-50 dark:bg-violet-500/8 border-violet-200/50 dark:border-violet-500/20",
                      }[featured.platform]
                    }`}>
                      <PlatformIcon platform={featured.platform} className="size-3.5" />
                      {PLATFORM_LABELS[featured.platform]}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-zinc-900 dark:text-[#F7F8F8] leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      {featured.title.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </h3>
                    {featured.excerpt && (
                      <p className="text-sm text-zinc-500 dark:text-[#8A8F98] leading-relaxed line-clamp-3">{featured.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      {featured.date && <span className="text-[11px] text-zinc-400 dark:text-zinc-600">{featured.date}</span>}
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-[#F7F8F8] transition-colors">
                        View post <ExternalLink className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })()}

            {/* Press grid */}
            {filteredPressItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPressItems
                  .filter((i) => !(activePressFilter === "all" && searchQuery === "" && i.featured))
                  .map((item) => (
                    <PressCard key={item.slug} item={item} />
                  ))}
              </div>
            ) : (
              <div className="py-20 text-center flex flex-col items-center justify-center border border-dashed border-border/50 rounded-lg bg-secondary/10">
                <span className="text-sm font-semibold text-muted-foreground">No posts match your filter.</span>
                <button
                  onClick={() => { setActivePressFilter("all"); setSearchQuery(""); }}
                  className="mt-4 text-xs font-semibold text-foreground hover:underline cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* CTA to add more via CMS */}
            <div className="text-center pt-8 border-t border-border/30">
              <p className="text-xs text-muted-foreground">
                Add more social posts and press mentions via the{" "}
                <Link href="/keystatic/collections/press" className="underline underline-offset-2 hover:text-foreground transition-colors">
                  CMS admin
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER CTA ── */}
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
