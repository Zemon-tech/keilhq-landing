"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  loop?: boolean;
  defaultMuted?: boolean;
  className?: string;
  autoPlay?: boolean;
}

export function VideoPlayer({
  src,
  poster,
  loop = false,
  defaultMuted = false,
  autoPlay = false,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(defaultMuted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch((err) => console.error("Playback error:", err));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setControlsVisible(true);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, []);

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
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen().catch((err) => console.error(err));
    }
  };

  const cyclePlaybackRate = () => {
    if (!videoRef.current) return;
    const rates = [1, 1.25, 1.5, 2];
    const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIndex];
    videoRef.current.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  };

  const handleMouseMove = () => {
    setControlsVisible(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    if (isPlaying) {
      hideControlsTimerRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 2500);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setControlsVisible(false);
    }
  };

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.muted = defaultMuted;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        hideControlsTimerRef.current = setTimeout(() => {
          setControlsVisible(false);
        }, 2500);
      }).catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [autoPlay, defaultMuted]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
    };
  }, []);

  const formatTime = (t: number) => {
    if (isNaN(t) || t < 0) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={
        className ??
        "relative w-full rounded-lg overflow-hidden border border-border bg-[#090A0B] shadow-[0_20px_50px_rgba(0,0,0,0.35)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.65)] select-none group"
      }
    >
      {/* 16:9 Aspect Ratio Container matching original 1920x1080 dimensions */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          poster={poster}
          loop={loop}
          muted={isMuted}
          playsInline
          autoPlay={autoPlay}
          width={1920}
          height={1080}
          className="w-full h-full object-contain cursor-pointer"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            setControlsVisible(true);
          }}
          onClick={togglePlay}
        >
          <source src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
          Your browser does not support the video tag.
        </video>

        {/* Big Center Play Button Overlay when paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto size-16 sm:size-20 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl cursor-pointer z-20 group/btn"
            aria-label="Play video"
          >
            <Play className="size-7 sm:size-8 fill-white text-white translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
          </button>
        )}

        {/* Ambient top and bottom gradient overlays for control readability */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0"
          } bg-gradient-to-t from-black/80 via-transparent to-black/20`}
        />

        {/* Controls Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-2 z-30 text-white transition-opacity duration-300 ${
            controlsVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Progress / Seek Bar */}
          <div
            onClick={handleProgressClick}
            className="w-full h-3 flex items-center cursor-pointer relative group/progress"
          >
            <div className="w-full h-1 bg-white/25 rounded-full group-hover/progress:h-1.5 transition-all overflow-hidden relative">
              <div
                className="h-full bg-white rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Scrubber Knob */}
            <div
              className="absolute size-3.5 bg-white rounded-full shadow-md scale-0 group-hover/progress:scale-100 transition-transform pointer-events-none -translate-x-1/2"
              style={{ left: `${progress}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between gap-3 text-xs font-sans text-neutral-200">
            {/* Left controls: Play/Pause, Mute/Unmute, Time */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={togglePlay}
                className="p-1 hover:text-white transition-colors cursor-pointer active:scale-95"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="size-4 sm:size-5 fill-current" />
                ) : (
                  <Play className="size-4 sm:size-5 fill-current" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="p-1 hover:text-white transition-colors cursor-pointer active:scale-95"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="size-4 sm:size-5" />
                ) : (
                  <Volume2 className="size-4 sm:size-5" />
                )}
              </button>

              <span className="font-mono text-[11px] sm:text-[12px] opacity-90 select-none">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Right controls: Playback rate, Fullscreen */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={cyclePlaybackRate}
                className="px-1.5 py-0.5 rounded text-[11px] font-mono border border-white/25 hover:border-white/50 hover:text-white transition-colors cursor-pointer active:scale-95"
                title="Change playback speed"
              >
                {playbackRate}x
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-1 hover:text-white transition-colors cursor-pointer active:scale-95"
                aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize className="size-4 sm:size-5" />
                ) : (
                  <Maximize className="size-4 sm:size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
