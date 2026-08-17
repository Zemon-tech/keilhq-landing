import type { Metadata } from "next";
import { DemoClient } from "./demo-client";

export const metadata: Metadata = {
  title: "Demo",
  description: "Book a live 30-minute walkthrough of KeilHQ. See how tasks, docs, chat, meeting intelligence, CRM, finance, and AI agents unify your workspace.",
};

export default function DemoPage() {
  return <DemoClient />;
}
