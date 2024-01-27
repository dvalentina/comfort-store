import { DATABASE_URL } from '@/constants';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const res = await fetch(DATABASE_URL);
  const data = await res.json();

  return Response.json(data);
}
