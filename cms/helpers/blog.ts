import { cache } from 'react';
import rawBlogData from '../__generated__/blog.json';

type BlogPostRecord = { slug: string; entry: Record<string, any> };

// Typed explicitly so an empty generated file (no posts yet) doesn't
// collapse to never[] and break every consumer.
const blogData = rawBlogData as BlogPostRecord[];

export const getBlogPosts = cache(async () => {
  return blogData;
});

export const getBlogPost = cache(async (slug: string): Promise<Record<string, any> | null> => {
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return null;
  // Return entry with a content() method matching the Reader API shape.
  // NOTE: entry.content must keep pointing at the resolved array — do NOT
  // assign the closure onto `entry` itself (it would return itself forever).
  const entry = { ...post.entry };
  return {
    ...entry,
    content: async () => entry.content as any,
  };
});
