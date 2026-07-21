import { cache } from 'react';
import pricingData from '../../content/globals/pricing/index.json';

export const getPricingPage = cache(async () => {
  return pricingData as any;
});
