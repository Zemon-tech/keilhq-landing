import { getChangelogs } from "@/lib/keystatic/changelog";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ChangelogClient } from "./changelog-client";

export default async function ChangelogPage() {
  const entries = await getChangelogs();
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />
      <ChangelogClient entries={entries} />
      <Footer />
    </div>
  );
}
