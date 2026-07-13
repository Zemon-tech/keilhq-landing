import { cache } from 'react';
import { getReader } from './reader';

export const getNavigation = cache(async () => {
  const reader = await getReader();
  if (!reader) return null;
  return await reader.singletons.navigation.read();
});
