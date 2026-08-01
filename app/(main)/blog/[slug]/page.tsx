import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/cms/helpers/blog";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { VideoPlayer } from "./video-player";

// Authors Mapping
const authorDetailsMap: Record<string, { role: string; avatar: string }> = {
  "Michael Sand": {
    role: "Head of Marketing",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Jordan Lee": {
    role: "Head of Design",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Alex Rivera": {
    role: "Co-founder & CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Priya Nair": {
    role: "Co-founder & CTO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Sam Okafor": {
    role: "Head of Engineering",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Leah Daniel": {
    role: "Senior Software Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&crop=face"
  }
};

// Chat Mockup Component 1
const ChatMockup1 = () => {
  return (
    <div className="w-full max-w-lg mx-auto my-8 border border-border bg-card rounded-md p-6 flex flex-col gap-4 font-sans select-none shadow-xs text-left">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-current" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-foreground font-display">KeilHQ AI</span>
        </div>
        <span className="text-[10px] text-muted-foreground font-sans">active just now</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="self-end max-w-[85%] bg-primary text-primary-foreground rounded-lg px-3 py-2 text-[13px] shadow-xs">
          Hey KeilHQ! Help me plan for the marathon I registered for please!
        </div>

        <div className="self-start max-w-[85%] bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-[13px] border border-border flex flex-col gap-1 shadow-xs">
          <span className="font-semibold text-foreground text-[11px] uppercase tracking-wider block font-display">KeilHQ</span>
          <span>Got it — I pulled everything up for you.</span>
        </div>
      </div>
    </div>
  );
};

// Chat Mockup Component 2
const ChatMockup2 = () => {
  return (
    <div className="w-full max-w-lg mx-auto my-8 border border-border bg-card rounded-md p-6 flex flex-col gap-4 font-sans select-none shadow-xs text-left">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-current" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-foreground font-display">KeilHQ AI</span>
        </div>
        <span className="text-[10px] text-muted-foreground font-sans">active just now</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="self-end max-w-[85%] bg-primary text-primary-foreground rounded-lg px-3 py-2 text-[13px] shadow-xs">
          My goal is 3:15. Can you map out my mile by mile splits?
        </div>

        <div className="self-start max-w-[90%] bg-secondary text-secondary-foreground rounded-lg px-3.5 py-3.5 text-[13px] border border-border flex flex-col gap-3 shadow-xs">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-foreground text-[11px] uppercase tracking-wider block font-display">KeilHQ</span>
            <span>Based on Chicago&apos;s elevation and a 3:15 goal, here are your key splits:</span>
          </div>

          <table className="w-full border-collapse text-left text-xs mt-1">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="py-1.5 font-semibold">Mile</th>
                <th className="py-1.5 font-semibold">Pace</th>
                <th className="py-1.5 font-semibold">Clock</th>
              </tr>
            </thead>
            <tbody>
              {[
                { mile: "1", pace: "7:20", clock: "7:20" },
                { mile: "2", pace: "7:23", clock: "14:43" },
                { mile: "3", pace: "7:22", clock: "22:05" },
                { mile: "4-10", pace: "7:25", clock: "1:13:40" },
                { mile: "11-20", pace: "7:26", clock: "2:28:00" },
                { mile: "21-25", pace: "7:28", clock: "3:05:20" },
                { mile: "26.2", pace: "7:20", clock: "3:14:55" },
              ].map((row) => (
                <tr key={row.mile} className="border-b border-border/40 text-foreground">
                  <td className="py-1.5">{row.mile}</td>
                  <td className="py-1.5">{row.pace}</td>
                  <td className="py-1.5">{row.clock}</td>
                </tr>
              ))}
              <tr className="font-semibold text-foreground border-t border-border">
                <td className="py-1.5">Avg/Total</td>
                <td className="py-1.5">7:26/mi</td>
                <td className="py-1.5">3:14:55</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postData = await getBlogPost(slug);

  if (!postData) {
    notFound();
  }

  // Bind key details
  const authorName = postData.author || "Unknown";
  const mappedAuthor = authorDetailsMap[authorName] || {
    role: "Contributor",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop&crop=face"
  };

  const authorInfo = {
    name: authorName,
    ...mappedAuthor
  };

  const post = {
    slug,
    tag: postData.category || "Uncategorized",
    title: postData.title || "",
    excerpt: postData.excerpt || "",
    date: postData.publishedDate ? new Date(postData.publishedDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) : "",
    image: postData.coverImage || "/mockups/blog1.png",
    readTime: postData.readingTime || "5 min read",
  };

  const contentAST = await postData.content();

  // Fetch pagination neighbors
  const allPosts = await getBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <main className="flex-1 flex flex-col items-center">
      {/* Ambient top mesh glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, oklch(0.55 0.18 250 / 0.05), transparent)",
        }}
      />

      {/* ── SECTION 1: HEADER ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-6 flex flex-col gap-4 text-center items-center">
        <div className="flex flex-col items-center gap-2 mb-2 text-center select-none">
          <span className="text-[12px] font-semibold text-muted-foreground uppercase tracking-widest font-sans">
            Blog &nbsp;/&nbsp; {post.tag}
          </span>
        </div>
        <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.1] text-foreground tracking-tight text-balance text-center max-w-4xl">
          {post.title}
        </h1>
      </section>

      {/* ── SECTION 2: HERO MEDIA ── */}
      <section className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="w-full relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-[16/9] z-10">
          {slug === "the-plan-behind-the-315" ? (
            <VideoPlayer src="/launch.mp4" poster="/mockups/blog1.png" />
          ) : (
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1000px, 1200px"
              className="object-cover object-center"
            />
          )}
        </div>
      </section>

      {/* ── SECTION 3: SUMMARY & METADATA GRID ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-10 select-text">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-center items-center">
          <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-muted-foreground text-balance">
            {post.excerpt}
          </p>

          {/* Metadata Table-like Grid */}
          <div className="w-full border-y border-border py-8 mt-6 grid grid-cols-3 gap-6 text-left font-sans text-[13px] select-text">
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Author</span>
              <span className="text-foreground font-semibold font-display text-[13px]">{authorInfo.name}</span>
              <span className="text-muted-foreground text-[11px]">{authorInfo.role}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Category</span>
              <span className="text-foreground font-semibold font-display text-[13px]">{post.tag}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Reading Time</span>
              <span className="text-foreground font-semibold font-display text-[13px]">{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ARTICLE PROSE CONTENT ── */}
      <section className="w-full pb-24 px-5 sm:px-8 lg:px-12 select-text">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-10">

          <div className="max-w-2xl mx-auto w-full flex flex-col gap-8 text-left leading-relaxed text-foreground/90">
            {/* Author name and date header inside prose column */}
            <div className="text-center text-[12px] text-muted-foreground tracking-widest uppercase font-sans mb-8 select-none">
              {authorInfo.name} &nbsp;&middot;&nbsp; {post.date}
            </div>

            {slug === "the-plan-behind-the-315" ? (
              <div className="flex flex-col gap-6 w-full text-[15px] leading-[1.6]">
                <p>
                  The first time Maddie really misjudged her running pace, it was Chicago.
                </p>
                <p>
                  Sixteen weeks of training had gone into that day - early mornings, long runs, consistency and discipline. Her race day fueling plan wasn&apos;t ready and the race turned painful early. She finished well off her goal time, and it stung.
                </p>
                <p>
                  The harder problem was one she didn&apos;t realize until later. In a marathon, your pace per mile - your splits - have to be almost surgically consistent. A few seconds off in either direction compounds across 26.2 miles into minutes you can&apos;t get back. The pace that felt steady on her hilly San Francisco routes meant something different on Chicago&apos;s flat asphalt, and she&apos;d guessed wrong on the conversion.
                </p>
                <p>
                  This time would be different. She had a coach who already knew her entire history, without any setup.
                </p>
                <p>
                  Two years and a few marathons later, she had a new number to chase: 3:15, the time she needed to qualify for the Boston Marathon with a safe buffer. The course was again flat and net-downhill. The same conversion problem was waiting for her.
                </p>
                <p>
                  This time she didn&apos;t guess. She asked KeilHQ.
                </p>

                {/* Interactive SMS Mockup 1 */}
                <ChatMockup1 />

                <p>
                  She didn&apos;t paste in the course profile. She didn&apos;t re-type her recent run history. She didn&apos;t explain that she lives in San Francisco but the race was elsewhere. KeilHQ had been quietly building context from the things she was already doing - the registration email in her inbox, the training plan open in another tab, the elevation map she&apos;d pulled up the week before. By the time she asked, the picture was already there. A short, half-thought question was enough to get back a mile-by-mile training plan, adjusted for the terrain.
                </p>
                <p className="border-l-2 border-primary pl-4 font-display text-lg font-medium text-foreground italic my-2">
                  &ldquo;I asked it one question and it knew everything else. I didn&apos;t have to re-explain my life.&rdquo;
                </p>
                <p>
                  The pace plan was the headline, but it wasn&apos;t the only thing. Across the sixteen weeks, KeilHQ filled in the smaller decisions she didn&apos;t want to keep making from scratch: what to eat the night before a long run, when to take her last real meal before a 5 a.m. start, how many recovery days a peak week actually needed. A steady second opinion, in the background, that knew her training block as well as she did.
                </p>
                <p>
                  When race day came, she turned the mile-by-mile plan into a phone lock screen so she could glance at it mid-race without unlocking. The numbers held.
                </p>

                {/* Interactive SMS Mockup 2 */}
                <ChatMockup2 />
              </div>
            ) : (
              // Default Generic Blog rendering for other articles
              <div className="prose prose-zinc dark:prose-invert max-w-none text-[15px] leading-[1.6] flex flex-col gap-6">
                <DocumentRenderer document={contentAST || []} />
              </div>
            )}
          </div>

          {/* ── SECTION 5: PAGINATION NEIGHBORS ── */}
          <div className="max-w-3xl mx-auto w-full border-t border-border pt-10 mt-16 flex justify-between items-center text-sm font-semibold gap-6 select-none">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="group flex items-center gap-3 text-left max-w-[45%]">
                <div className="size-9 rounded-sm bg-card border border-border flex items-center justify-center font-bold text-sm text-foreground shrink-0 uppercase font-display shadow-2xs group-hover:border-muted-foreground/30 transition-colors">
                  {prevPost.entry.category?.[0] || "B"}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[11px] text-muted-foreground font-sans uppercase tracking-widest text-[9px]">Previous</span>
                  <span className="text-sm font-semibold text-foreground font-display group-hover:text-muted-foreground transition-colors truncate">{prevPost.entry.title}</span>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="group flex items-center gap-3 text-right justify-end ml-auto max-w-[45%]">
                <div className="flex flex-col overflow-hidden items-end">
                  <span className="text-[11px] text-muted-foreground font-sans uppercase tracking-widest text-[9px]">Next</span>
                  <span className="text-sm font-semibold text-foreground font-display group-hover:text-muted-foreground transition-colors truncate">{nextPost.entry.title}</span>
                </div>
                <div className="size-9 rounded-sm bg-card border border-border flex items-center justify-center font-bold text-sm text-foreground shrink-0 uppercase font-display shadow-2xs group-hover:border-muted-foreground/30 transition-colors">
                  {nextPost.entry.category?.[0] || "B"}
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
