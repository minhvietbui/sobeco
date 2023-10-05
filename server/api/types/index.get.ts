import client from '@/utils/prismadb';
import { DType } from '~/utils/IType';

export default defineEventHandler(async (event): Promise<DType[]> => {  
  let types = await client.type.findMany();
  return types;
});
