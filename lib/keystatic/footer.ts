import { cache } from 'react';
import footerData from '../../content/globals/footer/index.json';

export const getFooter = cache(async () => {
  return footerData as any;
});
