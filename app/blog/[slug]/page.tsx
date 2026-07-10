"use client";

import React, { useState, useRef, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Sparkles,
  Lock,
} from "lucide-react";

// Mock Database of Blog Posts content
const articlesData: Record<
  string,
  {
    tag: string;
    title: string;
    date: string;
    readTime: string;
    author: { name: string; role: string; avatar: string };
    excerpt: string;
    image: string;
  }
> = {
  "the-plan-behind-the-315": {
    tag: "User Stories",
    title: "The Plan Behind the 3:15",
    date: "May 7, 2026",
    readTime: "4 min read",
    author: {
      name: "Michael Sand",
      role: "Head of Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&crop=face",
    },
    excerpt: "Maddie had a number to hit. Littlebird made the plan.",
    image: "/mockups/blog1.png",
  },
  "what-meeting-notes-could-be": {
    tag: "Productivity",
    title: "What Meeting Notes Could Be",
    date: "May 1, 2026",
    readTime: "5 min read",
    author: {
      name: "Jordan Lee",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop&crop=face",
    },
    excerpt: "Why every meeting notes app feels like it's missing something.",
    image: "/mockups/blog2.png",
  },
  "clarity-before-action": {
    tag: "Product",
    title: "Why clarity before action is the most important feature we ever built",
    date: "May 20, 2026",
    readTime: "5 min read",
    author: {
      name: "Alex Rivera",
      role: "Co-founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face",
    },
    excerpt: "Most task managers let you create a task called 'Fix the thing.' KeilHQ doesn't. Here's why the Clarity Engine changes everything about how teams execute.",
    image: "/mockups/blog3.png",
  },
  "ai-that-knows-your-work": {
    tag: "AI",
    title: "KeilHQ AI isn't built on top of your work — it's built into it",
    date: "May 5, 2026",
    readTime: "6 min read",
    author: {
      name: "Priya Nair",
      role: "Co-founder & CTO",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop&crop=face",
    },
    excerpt: "Generic AI chatbots give generic advice. KeilHQ AI reads your actual tasks, workload, and sprint state before answering. Here's how it works.",
    image: "/mockups/light/Tasks.png",
  },
  "meeting-transcription": {
    tag: "Feature",
    title: "Stop losing decisions after meetings — KeilHQ's recorder does the work",
    date: "April 28, 2026",
    readTime: "4 min read",
    author: {
      name: "Sam Okafor",
      role: "Head of Engineering",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop&crop=face",
    },
    excerpt: "The average team wastes 31 hours a month in unproductive meetings. KeilHQ ensures the decisions that come out of those meetings never disappear.",
    image: "/mockups/light/Meeting.png",
  },
  "dependency-blocking": {
    tag: "Product",
    title: "Hard dependency blocking: why soft reminders weren't enough",
    date: "April 14, 2026",
    readTime: "5 min read",
    author: {
      name: "Alex Rivera",
      role: "Co-founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face",
    },
    excerpt: "We tried warning banners. We tried color coding. None of it worked. So we built hard blocking — tasks that literally cannot be completed until their blockers are resolved.",
    image: "/mockups/light/Motion.png",
  },
  "smart-dashboard-design": {
    tag: "Design",
    title: "Designing a dashboard that tells you what to do next",
    date: "March 30, 2026",
    readTime: "7 min read",
    author: {
      name: "Jordan Lee",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop&crop=face",
    },
    excerpt: "The hardest part of building the Smart Dashboard wasn't the AI ranking — it was designing something that felt instant, obvious, and never overwhelming.",
    image: "/mockups/light/Dashboard.png",
  },
};

// Custom Video Player Component
const VideoPlayer = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => { });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="relative w-full rounded-md overflow-hidden bg-black aspect-[16/9] group/player border border-border/50 select-none">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Control Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col gap-2 transition-opacity duration-300 opacity-0 group-hover/player:opacity-100">

        {/* Progress Slider */}
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
        />

        {/* Buttons & Labels */}
        <div className="flex items-center justify-between text-white text-xs mt-1">
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} className="hover:text-zinc-300 transition-colors cursor-pointer active:scale-95">
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" fill="currentColor" />}
            </button>
            <span>{formatTime(currentTime)} / {formatTime(duration || 58)}</span>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleMute} className="hover:text-zinc-300 transition-colors cursor-pointer active:scale-95">
              {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
            <Settings className="size-4 text-zinc-300 cursor-pointer" />
            <Maximize
              onClick={() => videoRef.current?.requestFullscreen()}
              className="size-4 text-zinc-300 cursor-pointer hover:text-white transition-colors"
            />
          </div>
        </div>

      </div>
    </div>
  );
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

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const post = articlesData[slug];

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24">
          <h1 className="font-display text-3xl font-semibold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-sm underline">Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

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
              <div className="size-10 rounded-full overflow-hidden bg-muted border border-border/50">
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
                  <p>
                    At KeilHQ, we believe in building software that makes work visible, unified, and actionable. Traditional tools create silos where decisions are lost in chat histories, sprint updates are manual, and documents have no relationship to active tasks.
                  </p>
                  <p>
                    This article covers our core research and guidelines for how teams can streamline their delivery workflow. By integrating real-time calendars, contextual AI assistants, and hard blocking logic directly into the database level, we enforce clarity without sacrificing velocity.
                  </p>
                  <p>
                    We will continue sharing updates, design documentation, and client success stories as we expand our integrations. Sign up for our newsletter to stay informed.
                  </p>
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

      <Footer />
    </div>
  );
}
