import { cache } from 'react';
import navigationData from '../../content/globals/navigation/index.json';

export const getNavigation = cache(async () => {
  return navigationData as any;
});
