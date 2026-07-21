import { cache } from 'react';
import { getReader } from '../reader';

export const getPressItems = cache(async () => {
  const reader = await getReader();
  if (!reader) return [];
  const items = await (reader.collections as any).press.all();
  return items as Array<{
    slug: string;
    entry: {
      title: string;
      platform: 'linkedin' | 'instagram' | 'x' | 'news';
      url: string;
      thumbnail: string | null;
      excerpt: string | null;
      publishedDate: string | null;
      featured: boolean;
    };
  }>;
});

export const getPressItem = cache(async (slug: string) => {
  const reader = await getReader();
  if (!reader) return null;
  return await (reader.collections as any).press.read(slug);
});
