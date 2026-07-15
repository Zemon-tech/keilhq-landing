"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

// Team database using only the 9 authentic KeilHQ team members
const coreTeam = [
  {
    name: "Shivang Kandoi",
    role: "Co-founder & CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Satyajit Jena",
    role: "Co-founder & CTO",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Harshit Kundra",
    role: "COO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Disha Jain",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Akshat Chowdhary",
    role: "AI Engineer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Naveen",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Krishna Jaiswal",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Rohan Vashisth",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Shivansh Tiwari",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Play/pause handler
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch((err) => console.error(err));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Mute handler
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(cur);
    setProgress(dur > 0 ? (cur / dur) * 100 : 0);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, clickX / width));
    const newTime = percentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(percentage * 100);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Calculate remaining time
  const remainingTime = duration - currentTime;

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

        {/* ── SECTION 1: HERO ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-16 lg:pb-24 flex flex-col gap-12 text-left">
          <div className="max-w-[1000px] flex flex-col gap-6">
            <h1
              className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-semibold tracking-[-0.03em] leading-[1.05] text-zinc-900 dark:text-[#F7F8F8]"
              style={{ textWrap: "balance" }}
            >
              Building tools for the next era of product development
            </h1>
            <p className="text-[15px] sm:text-base font-normal text-zinc-500 dark:text-[#8A8F98] leading-relaxed max-w-[65ch]">
              AI is fundamentally changing how products get built. We are shaping what comes next.
            </p>
          </div>

          {/* Large Video Player with custom overlay controls */}
          <div className="w-full relative rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)] mt-4">
            <div className="relative w-full aspect-[16/9] bg-[#0c0d0e]">
              <video
                ref={videoRef}
                src="/launch.mp4"
                className="w-full h-full object-cover cursor-pointer"
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
              />
              
              {/* Subtle top/bottom overlay gradients for control readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Controls Bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between gap-4 z-20 text-white select-none">
                {/* Left Controls: Play, Mute, Time */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="hover:scale-105 active:scale-95 transition-all p-1 cursor-pointer"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="hover:scale-105 active:scale-95 transition-all p-1 cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                  </button>
                  <span className="text-xs font-mono opacity-80">
                    {formatTime(currentTime)}
                  </span>
                </div>

                {/* Center Progress Slider */}
                <div
                  onClick={handleProgressClick}
                  className="flex-1 h-3 flex items-center cursor-pointer relative group/progress"
                >
                  <div className="w-full h-1 bg-white/20 rounded-full group-hover/progress:h-1.5 transition-all overflow-hidden relative">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div
                    className="absolute size-3 bg-white rounded-full scale-0 group-hover/progress:scale-100 shadow-md transition-transform pointer-events-none -translate-x-1/2"
                    style={{ left: `${progress}%` }}
                  />
                </div>

                {/* Right Controls: Remaining, speed, full screen */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono opacity-80">
                    -{formatTime(remainingTime)}
                  </span>
                  <span className="text-xs font-mono opacity-80 px-1 border border-white/20 rounded-xs select-none">
                    1x
                  </span>
                  <button
                    className="hover:scale-105 transition-all opacity-80"
                    title="Cast / PIP"
                  >
                    <svg viewBox="0 0 24 24" className="size-4 fill-current">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11z" />
                    </svg>
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="hover:scale-105 active:scale-95 transition-all p-1 cursor-pointer"
                    title="Fullscreen"
                  >
                    {isFullscreen ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 2: EDITORIAL ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col lg:flex-row gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
          <div className="w-full lg:w-1/3 shrink-0">
            <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.08] text-zinc-900 dark:text-[#F7F8F8]">
              A new species of product tool
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <p className="font-sans text-[20px] sm:text-[22px] font-normal leading-[1.4] tracking-tight text-zinc-800 dark:text-zinc-200">
              Software development is at an inflection point. Artificial intelligence is fundamentally reshaping how products are built.
            </p>
            <div className="flex flex-col gap-6 text-[14px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed max-w-[650px]">
              <p>
                AI increases what teams can create, but it also raises the bar for clarity and coordination. At KeilHQ, we are building the tools for this new era of product development. A purpose-built system where teams and agents operate together in a shared, structured environment.
              </p>
              <p>
                Founded in 2025, KeilHQ has become the tool of choice for thousands of fast-growing teams to plan, build, and ship their products.
              </p>
              <p>
                Our team is distributed across North America and India, and we&apos;re continuing to grow internationally. What unites us is relentless focus, fast execution, and a deep care for software craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: TEAM ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
          
          {/* Header */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="w-full lg:w-1/3 shrink-0">
              <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.08] text-zinc-900 dark:text-[#F7F8F8]">
                Meet the team behind KeilHQ
              </h2>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <p className="font-sans text-[15px] sm:text-base font-normal leading-relaxed text-zinc-500 dark:text-[#8A8F98] max-w-[48ch]">
                We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals, all makers at heart.
              </p>
              <Link 
                href="/careers" 
                className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8] hover:text-zinc-600 dark:hover:text-white transition-colors w-fit"
              >
                We&apos;re hiring →
              </Link>
            </div>
          </div>

          {/* Portrait Grid — Grayscale portraits of the 9 authentic team members */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 w-full">
            {coreTeam.map((m) => (
              <div key={m.name} className="flex flex-col gap-4">
                <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-zinc-200/50 dark:border-white/[0.06] bg-zinc-100 dark:bg-white/[0.01]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[14px] font-semibold text-zinc-900 dark:text-[#F7F8F8]">{m.name}</span>
                  <span className="text-[12px] font-mono tracking-wide text-zinc-400 dark:text-zinc-600 uppercase">{m.role}</span>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ── SECTION 4: BACKED BY THE BEST ── */}
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col lg:flex-row gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
          
          {/* Left Column: Heading */}
          <div className="w-full lg:w-1/3 shrink-0">
            <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.08] text-zinc-900 dark:text-[#F7F8F8]">
              Backed by<br />the best
            </h2>
          </div>

          {/* Right Column: Institutional Cards */}
          <div className="flex-1 flex flex-col gap-16">
            
            {/* Top Cards: Accel & Sequoia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Accel */}
              <div className="flex flex-col gap-4 text-left">
                <div className="w-full h-36 rounded-md bg-[#D2E2FB]/40 dark:bg-[#1E293B]/60 border border-zinc-200/60 dark:border-white/[0.05] flex items-center justify-center">
                  <span className="font-sans text-xl font-bold tracking-tight text-zinc-900 dark:text-white select-none">
                    Accel
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pl-1">
                  <span className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8]">Miles Clements</span>
                  <span className="text-[11px] font-mono tracking-wide text-zinc-400 dark:text-zinc-600 uppercase">Partner, Accel</span>
                </div>
              </div>

              {/* Sequoia */}
              <div className="flex flex-col gap-4 text-left">
                <div className="w-full h-36 rounded-md bg-[#F9F7F2]/50 dark:bg-[#27272A]/50 border border-zinc-200/60 dark:border-white/[0.05] flex items-center justify-center">
                  <span className="font-sans text-lg font-extrabold tracking-widest uppercase text-zinc-900 dark:text-white select-none">
                    Sequoia
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pl-1">
                  <span className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8]">Stephanie Zhan</span>
                  <span className="text-[11px] font-mono tracking-wide text-zinc-400 dark:text-zinc-600 uppercase">Partner, Sequoia</span>
                </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
