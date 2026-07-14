import { cache } from 'react';
import { getReader } from './reader';

export const getFeatures = cache(async () => {
  const reader = await getReader();
  if (!reader) return [];
  return await (reader.collections as any).features.all();
});

export const getFeature = cache(async (slug: string) => {
  const reader = await getReader();
  if (!reader) return null;
  return await (reader.collections as any).features.read(slug);
});
