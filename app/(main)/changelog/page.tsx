import type { Metadata } from "next";
import { getChangelogs } from "@/cms/helpers/changelog";
import { ChangelogClient } from "./changelog-client";

export const metadata: Metadata = {
  title: "Changelog",
  description: "The latest updates, new features, and improvements shipped to KeilHQ.",
};

export default async function ChangelogPage() {
  const entries = await getChangelogs();
  return <ChangelogClient entries={entries} />;
}
