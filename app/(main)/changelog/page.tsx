import { getChangelogs } from "@/lib/keystatic/changelog";
import { ChangelogClient } from "./changelog-client";

export default async function ChangelogPage() {
  const entries = await getChangelogs();
  return (
    <ChangelogClient entries={entries} />
  );
}
