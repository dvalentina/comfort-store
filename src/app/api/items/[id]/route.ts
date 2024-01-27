import { DATABASE_URL } from '@/constants';
import { IItem } from '@/types';
import { promises as fs } from 'fs';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const res = await fetch(DATABASE_URL);
  const data = await res.json();

  const item = data.find((item: IItem) => item.id === parseInt(id));

  return Response.json(item);
}
