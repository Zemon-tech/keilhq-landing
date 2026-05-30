import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const posts = [
  {
    slug: "clarity-before-action",
    tag: "Product",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Why clarity before action is the most important feature we ever built",
    excerpt: "Most task managers let you create a task called 'Fix the thing.' KielHQ doesn't. Here's why the Clarity Engine changes everything.",
    date: "May 20, 2026",
    readTime: "5 min read",
  },
  {
    slug: "replace-your-stack",
    tag: "Guide",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "How to replace Slack + Asana + Notion with one tool in a weekend",
    excerpt: "A step-by-step migration guide for teams switching to KielHQ. Import your data, connect your calendar, and invite your team in under 10 minutes.",
    date: "May 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "ai-that-knows-your-work",
    tag: "AI",
    tagColor: "bg-violet-100 text-violet-700",
    title: "KielHQ AI isn't built on top of your work — it's built into it",
    excerpt: "Generic AI chatbots give generic advice. KielHQ AI reads your actual tasks, workload, and sprint state before answering. Here's how it works.",
    date: "May 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "meeting-transcription",
    tag: "Feature",
    tagColor: "bg-amber-100 text-amber-700",
    title: "Stop losing decisions after meetings — KielHQ's recorder does the work",
    excerpt: "The average team wastes 31 hours a month in unproductive meetings. KielHQ ensures the decisions that come out of those meetings never disappear.",
    date: "April 28, 2026",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Blog</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 mt-3">
              Ideas, guides, and product updates
            </h1>
          </div>

          <div className="flex flex-col divide-y divide-zinc-100">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-8 flex flex-col sm:flex-row sm:items-start gap-6 hover:bg-zinc-50/50 -mx-4 px-4 rounded-xl transition-colors"
              >
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-zinc-400">{post.date} · {post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
