import { cache } from 'react';
import lovedByData from '../../content/globals/loved-by/index.json';

export const getLovedBy = cache(async () => {
  return lovedByData as any;
});
