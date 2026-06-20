"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

export function Vision() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync play/pause state
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch((err) => console.log(err));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Sync mute state
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Explicitly unmute and play
  const handlePlayWithSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    setIsMuted(false);
    videoRef.current.play().catch((err) => console.log(err));
    setIsPlaying(true);
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
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        // Fallback direct to video element
        videoRef.current?.requestFullscreen();
      });
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

  return (
    <section className="w-full min-h-screen bg-background flex items-center justify-center py-24">
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/*
          Contained card — almost full-screen width, rounded corners, with video player chrome.
          Matches the reference: large rounded rectangle, not edge-to-edge.
        */}
        <div
          ref={containerRef}
          className="relative w-full rounded-sm overflow-hidden shadow-2xl border border-white/10 group"
          style={{ height: "calc(100vh - 48px)" }}
        >
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          src="/launch.mp4"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={togglePlay}
        />

        {/* Subtle vignette overlay (gradient) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40 pointer-events-none" />

        {/* Top actions: Mute Toggle + Brand Icon */}
        <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
          <button
            onClick={toggleMute}
            className="p-2.5 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/35 hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
          </button>
        </div>

        {/* Center overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          {isMuted ? (
            <button
              onClick={handlePlayWithSound}
              className="pointer-events-auto flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold hover:bg-white/25 hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              <Volume2 className="size-4 animate-pulse" />
              Play with sound
            </button>
          ) : (
            !isPlaying && (
              <button
                onClick={togglePlay}
                className="pointer-events-auto p-5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer"
              >
                <Play className="size-8 fill-current translate-x-[2px]" />
              </button>
            )
          )}
        </div>

        {/* Large heading — bottom left */}
        <div className="absolute bottom-24 left-8 sm:left-10 z-10 max-w-2xl pointer-events-none">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] text-white leading-tight drop-shadow-lg" style={{ letterSpacing: "-0.02em" }}>
            7,000+ teams<br />ship with KielHQ
          </h2>
        </div>

        {/* Video player controls bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-5 flex items-center gap-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="text-white hover:text-white/80 hover:scale-105 active:scale-95 transition-all shrink-0 p-1 cursor-pointer"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="size-5 fill-current" />
            ) : (
              <Play className="size-5 fill-current" />
            )}
          </button>

          {/* Time Display */}
          <span className="text-white/90 text-xs font-mono shrink-0 select-none">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Interactive Progress Bar */}
          <div
            onClick={handleProgressClick}
            className="flex-1 h-3 flex items-center cursor-pointer group/progress relative"
          >
            {/* Track */}
            <div className="w-full h-1 bg-white/20 rounded-full group-hover/progress:h-1.5 transition-all overflow-hidden relative">
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Handle dot on hover */}
            <div
              className="absolute size-3 bg-white rounded-full scale-0 group-hover/progress:scale-100 shadow-md transition-transform pointer-events-none -translate-x-1/2"
              style={{ left: `${progress}%` }}
            />
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4 shrink-0 text-white">
            {/* Volume Toggle */}
            <button
              onClick={toggleMute}
              className="hover:text-white/80 hover:scale-105 transition-all p-1 cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="hover:text-white/80 hover:scale-105 transition-all p-1 cursor-pointer"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="size-5" /> : <Maximize className="size-5" />}
            </button>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
