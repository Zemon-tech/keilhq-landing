import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    <div className="w-full max-w-lg mx-auto my-8 border border-border/60 dark:border-white/5 bg-secondary/20 dark:bg-white/[0.01] rounded-md p-6 flex flex-col gap-4 font-sans select-none shadow-xs text-left">
      <div className="flex items-center justify-between pb-3 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-current" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-zinc-900 dark:text-white">Littlebird AI</span>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono">active just now</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="self-end max-w-[85%] bg-primary text-primary-foreground rounded-lg px-3 py-2 text-[13px] shadow-xs">
          Hey Littlebird! Help me plan for the marathon I registered for please!
        </div>

        <div className="self-start max-w-[85%] bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-[13px] border border-border/50 flex flex-col gap-1 shadow-xs">
          <span className="font-semibold text-zinc-900 dark:text-white text-[11px] uppercase tracking-wider block">Littlebird</span>
          <span>Got it — I pulled everything up for you.</span>
        </div>
      </div>
    </div>
  );
};

// Chat Mockup Component 2
const ChatMockup2 = () => {
  return (
    <div className="w-full max-w-lg mx-auto my-8 border border-border/60 dark:border-white/5 bg-secondary/20 dark:bg-white/[0.01] rounded-md p-6 flex flex-col gap-4 font-sans select-none shadow-xs text-left">
      <div className="flex items-center justify-between pb-3 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-current" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-zinc-900 dark:text-white">Littlebird AI</span>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono">active just now</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="self-end max-w-[85%] bg-primary text-primary-foreground rounded-lg px-3 py-2 text-[13px] shadow-xs">
          My goal is 3:15. Can you map out my mile by mile splits?
        </div>

        <div className="self-start max-w-[90%] bg-secondary text-secondary-foreground rounded-lg px-3.5 py-3.5 text-[13px] border border-border/50 flex flex-col gap-3 shadow-xs">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-zinc-900 dark:text-white text-[11px] uppercase tracking-wider block">Littlebird</span>
            <span>Based on Chicago&apos;s elevation and a 3:15 goal, here are your key splits:</span>
          </div>

          <table className="w-full border-collapse text-left text-xs mt-1">
            <thead>
              <tr className="border-b border-border/60 text-zinc-800 dark:text-zinc-200">
                <th className="py-1.5 font-semibold">Mile</th>
                <th className="py-1.5 font-semibold">Pace</th>
                <th className="py-1.5 font-semibold">Clock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20 text-muted-foreground">
              <tr>
                <td className="py-1">1</td>
                <td className="py-1">7:40</td>
                <td className="py-1">7:40</td>
              </tr>
              <tr>
                <td className="py-1">5</td>
                <td className="py-1">7:28</td>
                <td className="py-1">37:20</td>
              </tr>
              <tr>
                <td className="py-1">10</td>
                <td className="py-1">7:31</td>
                <td className="py-1">1:15:10</td>
              </tr>
              <tr>
                <td className="py-1">20</td>
                <td className="py-1">7:24</td>
                <td className="py-1">2:28:00</td>
              </tr>
              <tr className="font-semibold text-zinc-900 dark:text-white">
                <td className="py-1">26.2</td>
                <td className="py-1">7:26</td>
                <td className="py-1">3:14:48</td>
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
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const postData = await getBlogPost(slug);

  if (!postData) {
    notFound();
  }

  // Get author details
  const authorName = postData.author || "Unknown";
  const authorInfo = authorDetailsMap[authorName] || {
    role: "KeilHQ Team",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&crop=face"
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
    author: {
      name: authorName,
      role: authorInfo.role,
      avatar: authorInfo.avatar,
    }
  };

  // Resolve content Markdoc AST
  const contentAST = await postData.content();

  return (
    <main className="flex-1 flex flex-col">

        {/* ── ARTICLE HEADER ── */}
        <section className="w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-6">

            {/* Meta Eyebrow */}
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
              Published {post.date} in{" "}
              <Link href="/blog" className="underline underline-offset-2 hover:opacity-85">
                {post.tag}
              </Link>
            </span>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-semibold leading-[1.1] text-zinc-900 dark:text-white max-w-3xl" style={{ letterSpacing: "-0.02em" }}>
              {post.title}
            </h1>

            {/* Author details */}
            <div className="flex items-center gap-3 mt-4 text-left">
              <div className="size-10 rounded-full overflow-hidden bg-muted border border-border/50 animate-pulse-subtle">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-zinc-900 dark:text-white leading-tight">
                  {post.author.name}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {post.author.role}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border/40 mt-8" />
          </div>
        </section>

        {/* ── ARTICLE CONTENT ── */}
        <section className="w-full pb-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-8">

            {/* Render Maddie Running Specific Story (from the mockups) */}
            {slug === "the-plan-behind-the-315" ? (
              <div className="flex flex-col gap-6 w-full">

                {/* Custom Video Player rendering the launch video */}
                <div className="mb-6">
                  <VideoPlayer src="/launch.mp4" poster="/mockups/blog1.png" />
                </div>

                {/* Prose block */}
                <div className="max-w-2xl mx-auto flex flex-col gap-6 text-[15px] leading-relaxed text-zinc-800 dark:text-zinc-200">
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
                    This time she didn&apos;t guess. She asked Littlebird.
                  </p>
                </div>

                {/* Interactive SMS Mockup 1 */}
                <ChatMockup1 />

                <div className="max-w-2xl mx-auto flex flex-col gap-6 text-[15px] leading-relaxed text-zinc-800 dark:text-zinc-200">
                  <p>
                    She didn&apos;t paste in the course profile. She didn&apos;t re-type her recent run history. She didn&apos;t explain that she lives in San Francisco but the race was elsewhere. Littlebird had been quietly building context from the things she was already doing - the registration email in her inbox, the training plan open in another tab, the elevation map she&apos;d pulled up the week before. By the time she asked, the picture was already there. A short, half-thought question was enough to get back a mile-by-mile training plan, adjusted for the terrain.
                  </p>
                  <p className="border-l-2 border-primary pl-4 font-display text-lg font-medium text-zinc-900 dark:text-white italic">
                    &ldquo;I asked it one question and it knew everything else. I didn&apos;t have to re-explain my life.&rdquo;
                  </p>
                  <p>
                    The pace plan was the headline, but it wasn&apos;t the only thing. Across the sixteen weeks, Littlebird filled in the smaller decisions she didn&apos;t want to keep making from scratch: what to eat the night before a long run, when to take her last real meal before a 5 a.m. start, how many recovery days a peak week actually needed. A steady second opinion, in the background, that knew her training block as well as she did.
                  </p>
                  <p>
                    When race day came, she turned the mile-by-mile plan into a phone lock screen so she could glance at it mid-race without unlocking. The numbers held.
                  </p>
                </div>

                {/* Interactive SMS Mockup 2 */}
                <ChatMockup2 />

              </div>
            ) : (
              // Default Generic Blog rendering for other articles
              <div className="flex flex-col gap-6 w-full">

                {/* Featured Image */}
                <div className="relative w-full rounded-md overflow-hidden aspect-[2/1] border border-border/50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 1000px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="max-w-2xl mx-auto flex flex-col gap-6 text-[15px] leading-relaxed text-zinc-800 dark:text-zinc-200">
                  <p className="font-semibold text-zinc-900 dark:text-white text-lg">
                    {post.excerpt}
                  </p>
                  <div className="prose prose-zinc dark:prose-invert max-w-none text-[15px] leading-relaxed text-zinc-800 dark:text-zinc-200 flex flex-col gap-6">
                    <DocumentRenderer document={contentAST || []} />
                  </div>
                </div>

              </div>
            )}

            {/* Back to Blog footer links */}
            <div className="max-w-2xl mx-auto w-full border-t border-border/30 pt-10 mt-8 flex justify-between items-center text-sm font-semibold">
              <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="size-4" />
                Back to Blog
              </Link>
              <Link href="/" className="text-primary hover:opacity-85 transition-opacity">
                KeilHQ Home
              </Link>
            </div>

          </div>
        </section>

      </main>
  );
}
