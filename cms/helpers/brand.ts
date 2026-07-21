import { cache } from 'react';
import brandData from '../../content/globals/brand/index.json';

export const getBrandPage = cache(async () => {
  return brandData as any;
});
