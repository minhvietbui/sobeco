import client from '@/utils/prismadb';
import type { IProduct } from '~/utils/IProduct';

export default defineEventHandler(async (event): Promise<IProduct[]> => {
  let products = await client.product.findMany();
  return products;
});
