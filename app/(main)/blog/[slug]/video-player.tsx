"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from "lucide-react";

export const VideoPlayer = ({ src, poster }: { src: string; poster: string }) => {
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
