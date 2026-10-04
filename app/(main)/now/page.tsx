import type { Metadata } from "next";
import { getNowFeed, NOW_TABS, type NowTab } from "@/lib/now";
import { NowClient } from "./now-client";

const PAGE_TITLE = "Now — Changelog, Updates & Stories";
const PAGE_DESCRIPTION =
  "Product launches, changelog, engineering stories, and press from the KeilHQ team — everything happening at KeilHQ, in one place.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://keilhq.in/now",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://keilhq.in/now",
    siteName: "KeilHQ",
    images: [
      {
        url: "/brand/keilhq-rise.png",
        width: 1600,
        height: 1000,
        alt: "KeilHQ Now — Changelog & Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/brand/keilhq-rise.png"],
  },
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
