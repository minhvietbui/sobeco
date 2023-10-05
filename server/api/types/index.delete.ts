import client from '@/utils/prismadb';
import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user || useRuntimeConfig().user.indexOf(user.email) === -1) {
    throw new Error('Please login first');
  }
  const query = getQuery(event);
  const type = await client.type.delete({ where: { id: parseInt(query.id) } });
  return type;
});
