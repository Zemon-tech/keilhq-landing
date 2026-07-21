import type { Metadata } from "next";
import { DemoClient } from "./demo-client";

export const metadata: Metadata = {
  title: "Demo",
  description: "Book a live 30-minute walkthrough of KeilHQ. See how task tracking, block docs, real-time chat, meeting transcription, and AI agents unify your workspace.",
};

export default function DemoPage() {
  return <DemoClient />;
}
