import { cache } from 'react';
import blogData from '../__generated__/blog.json';

export const getBlogPosts = cache(async () => {
  return blogData;
});

export const getBlogPost = cache(async (slug: string) => {
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return null;
  // Return entry with a content() method matching the Reader API shape
  const entry = { ...post.entry };
  return {
    ...entry,
    content: async () => entry.content as any,
  };
});
