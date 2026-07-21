import { getChangelogs } from "@/cms/helpers/changelog";
import { ChangelogClient } from "./changelog-client";

export default async function ChangelogPage() {
  const entries = await getChangelogs();
  return (
    <ChangelogClient entries={entries} />
  );
}
