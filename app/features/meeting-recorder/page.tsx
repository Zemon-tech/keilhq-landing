"use client";

import Image from "next/image";

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
    <>
      <Image
        src="/mockups/light/Meetings Light.png"
        alt="Meeting Recorder"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src="/mockups/dark/Meetings Dark.png"
        alt="Meeting Recorder"
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
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
