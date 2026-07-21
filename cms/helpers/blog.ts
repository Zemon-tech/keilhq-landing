import { cache } from 'react';
import { getReader } from '../reader';

export const getBlogPosts = cache(async () => {
  const reader = await getReader();
  if (!reader) return [];
  return await reader.collections.blog.all();
});

export const getBlogPost = cache(async (slug: string) => {
  const reader = await getReader();
  if (!reader) return null;
  return await reader.collections.blog.read(slug);
});
