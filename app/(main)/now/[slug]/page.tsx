import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "@/cms/helpers/blog";
import { getChangelogs } from "@/cms/helpers/changelog";
import { BlogArticle } from "@/components/now/blog-article";
import { ChangelogArticle } from "@/components/now/changelog-article";

export async function generateStaticParams() {
  const [posts, changelogs] = await Promise.all([getBlogPosts(), getChangelogs()]);
  return [
    ...(posts as any[]).map((p) => ({ slug: p.slug })),
    ...(changelogs as any[]).map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);
  if (post) {
    return { title: (post as any).title || slug, description: (post as any).excerpt || undefined };
  }
  const changelogs = (await getChangelogs()) as any[];
  const entry = changelogs.find((c) => c.slug === slug);
  if (entry) {
    return { title: entry.title, description: entry.summaryText || undefined };
  }
  return { title: "Now" };
}

export default async function NowDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getBlogPost(slug).catch(() => null);
  if (post) return <BlogArticle slug={slug} />;

  const changelogs = (await getChangelogs()) as any[];
  if (changelogs.some((c) => c.slug === slug)) return <ChangelogArticle slug={slug} />;

  notFound();
}
