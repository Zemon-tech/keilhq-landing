import type { Metadata } from "next";
import { getNowFeed, NOW_TABS, type NowTab } from "@/lib/now";
import { NowClient } from "./now-client";

export const metadata: Metadata = {
  title: "Now",
  description:
    "Changelog, product launches, stories from the team and community, and press — everything happening at KeilHQ, in one place.",
};

function parseTabParam(value: string | string[] | undefined): NowTab {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return "All";
  const match = NOW_TABS.find((tab) => tab.toLowerCase() === raw.toLowerCase());
  return match ?? "All";
}

export default async function NowPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string | string[] }>;
}) {
  const items = await getNowFeed();
  const initialTab = parseTabParam((await searchParams).tab);
  return <NowClient items={items} initialTab={initialTab} />;
}
