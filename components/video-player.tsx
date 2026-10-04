"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  loop?: boolean;
  defaultMuted?: boolean;
  className?: string;
}

export function VideoPlayer({
  src,
  poster,
  loop = false,
  defaultMuted = false,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(defaultMuted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(percentage * 100);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const formatTime = (t: number) => {
    if (isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const remainingTime = duration - currentTime;

  return (
    <div
      className={
        className ??
        "w-full relative rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)] mt-4"
      }
    >
      <div className="relative w-full aspect-[16/9] bg-[#0c0d0e]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop={loop}
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover cursor-pointer"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={togglePlay}
        />

        {/* Gradient overlays for control readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Controls bar */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between gap-4 z-20 text-white select-none">
          {/* Left: play, mute, current time */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="hover:scale-105 active:scale-95 transition-all p-1 cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="size-4 fill-current" />
              ) : (
                <Play className="size-4 fill-current" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="hover:scale-105 active:scale-95 transition-all p-1 cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
            <span className="text-xs font-sans opacity-80">{formatTime(currentTime)}</span>
          </div>

          {/* Center: click-based progress bar */}
          <div
            onClick={handleProgressClick}
            className="flex-1 h-3 flex items-center cursor-pointer relative group/progress"
          >
            <div className="w-full h-1 bg-white/20 rounded-full group-hover/progress:h-1.5 transition-all overflow-hidden relative">
              <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <div
              className="absolute size-3 bg-white rounded-full scale-0 group-hover/progress:scale-100 shadow-md transition-transform pointer-events-none -translate-x-1/2"
              style={{ left: `${progress}%` }}
            />
          </div>

          {/* Right: remaining time, speed badge, fullscreen */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-sans opacity-80">-{formatTime(remainingTime)}</span>
            <span className="text-xs font-sans opacity-80 px-1 border border-white/20 rounded-sm select-none">
              1x
            </span>
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
  );
}
