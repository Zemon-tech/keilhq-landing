import { getBlogPosts } from "@/lib/keystatic/blog";
import { getPressItems } from "@/lib/keystatic/press";
import { PressPageClient, BlogListItem, PressListItem } from "./press-client";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const authorDetailsMap: Record<string, { role: string; avatar: string }> = {
  "Michael Sand": {
    role: "Head of Marketing",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Jordan Lee": {
    role: "Head of Design",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Alex Rivera": {
    role: "Co-founder & CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Priya Nair": {
    role: "Co-founder & CTO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Sam Okafor": {
    role: "Head of Engineering",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop&crop=face"
  },
  "Leah Daniel": {
    role: "Senior Software Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&crop=face"
  }
};

export default async function BlogPage() {
  const [posts, pressItems] = await Promise.all([
    getBlogPosts(),
    getPressItems(),
  ]);

  const mappedPosts: BlogListItem[] = posts.map((post: any) => {
    const authorName = post.entry.author || "Unknown";
    const authorInfo = authorDetailsMap[authorName] || {
      role: "KeilHQ Team",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&crop=face"
    };

    return {
      slug: post.slug,
      tag: post.entry.category || "Uncategorized",
      title: post.entry.title || "",
      excerpt: post.entry.excerpt || "",
      date: post.entry.publishedDate ? new Date(post.entry.publishedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }) : "",
      image: post.entry.coverImage || "/mockups/blog1.png",
      readTime: post.entry.readingTime || "5 min read",
      author: {
        name: authorName,
        role: authorInfo.role,
        avatar: authorInfo.avatar,
      }
    };
  });

  const mappedPress: PressListItem[] = pressItems.map((item: any) => ({
    slug: item.slug,
    platform: item.entry.platform || "linkedin",
    title: item.entry.title || "",
    excerpt: item.entry.excerpt || "",
    url: item.entry.url || "#",
    thumbnail: item.entry.thumbnail || null,
    date: item.entry.publishedDate ? new Date(item.entry.publishedDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) : "",
    featured: item.entry.featured || false,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />
      <PressPageClient posts={mappedPosts} pressItems={mappedPress} />
      <Footer />
    </div>
  );
}
