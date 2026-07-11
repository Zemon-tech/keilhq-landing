"use client";

import React from "react";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { Mic, Sparkles, Database, Search } from "lucide-react";

export default function MeetingRecorderPage() {
  const capabilities = [
    {
      icon: Mic,
      title: "Sarvam AI Transcription",
      desc: "Primary batch transcription powered by Sarvam AI (Saaras v3), optimized for 23 Indian languages + English.",
    },
    {
      icon: Sparkles,
      title: "AI Action Extraction",
      desc: "Automatically translates conversation notes into task cards, specifications, and action summaries with one click.",
    },
    {
      icon: Database,
      title: "AWS S3 Storage",
      desc: "Upload audio clips securely to AWS S3 storage buckets with high-grade data encryption boundaries.",
    },
    {
      icon: Search,
      title: "Speaker Diarization",
      desc: "Diarization models automatically identify and assign spoken blocks to individual speakers.",
    },
  ];

  const checklist = [
    "Record audio directly inside the app using the built-in frontend voice recorder.",
    "Multi-lingual auto-detection and transcription with ElevenLabs as fallback provider.",
    "Transcripts are stored, fully searchable, and tied to their respective project spaces.",
    "Ask KeilHQ AI to scan and summarize historical meeting records for quick references.",
  ];

  const mockup = (
    <div className="w-full bg-[#08090A] p-6 flex flex-col gap-5 text-left">
      {/* Audio Controls Mockup */}
      <div className="flex items-center justify-between bg-zinc-950/40 border border-white/[0.05] p-4 rounded-sm shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center animate-pulse">
            <Mic className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-300">Client Kickoff Sync.wav</span>
            <span className="text-[10px] text-zinc-500">Elapsed: 42:15 · Recording active</span>
          </div>
        </div>

        {/* Animated wave bars */}
        <div className="flex items-center gap-0.5 h-6">
          <div className="w-0.5 h-4 bg-zinc-600 rounded-sm animate-bounce" style={{ animationDelay: '100ms' }} />
          <div className="w-0.5 h-6 bg-zinc-400 rounded-sm animate-bounce" style={{ animationDelay: '200ms' }} />
          <div className="w-0.5 h-3 bg-zinc-500 rounded-sm animate-bounce" style={{ animationDelay: '300ms' }} />
          <div className="w-0.5 h-5 bg-zinc-400 rounded-sm animate-bounce" style={{ animationDelay: '400ms' }} />
          <div className="w-0.5 h-2 bg-zinc-600 rounded-sm animate-bounce" style={{ animationDelay: '500ms' }} />
        </div>
      </div>

      {/* Transcript Extract */}
      <div className="flex flex-col gap-3 font-sans text-xs text-zinc-400">
        <div className="flex gap-2">
          <span className="font-bold text-zinc-300 shrink-0">12:15 (Alex):</span>
          <span>We will push staging deployment to Wednesday, since the migration validation script is still blocked.</span>
        </div>
        <div className="flex gap-2 border-l-2 border-emerald-500/35 pl-3 py-1 bg-emerald-500/[0.01]">
          <span className="font-bold text-zinc-300 shrink-0">12:30 (AI):</span>
          <span className="text-emerald-300 font-medium">Auto-extracted action: Sam Okafor to verify migration script by Monday.</span>
        </div>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      eyebrowIndex="7.0"
      eyebrowText="Meeting Recorder"
      title="Meeting Recordings & Transcription"
      subHeroTitle="Hands-off capture. Immediate specifications."
      subHeroDesc="Record conversations directly inside KeilHQ, transcribe discussions automatically with speaker diarization, and turn decisions into tasks in one click."
      subHeroLink="https://app.Keilhq.in/login"
      subHeroLinkText="Try Meeting Recorder"
      mockup={mockup}
      capabilitiesTitle="Hands-off capture. Immediate specs."
      capabilitiesDesc="KeilHQ uploads and transcribes meeting audio using high-fidelity pipelines, linking discussions directly to tasks."
      capabilitiesGrid={capabilities}
      checklistTitle="Make meetings actionable again"
      checklistDesc="Eliminate manual documentation. Turn voice recordings directly into team deliverables."
      checklistItems={checklist}
      currentIndex={6}
    />
  );
}
