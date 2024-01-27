import { IItem } from '@/types';
import { promises as fs } from 'fs';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const file = await fs.readFile(
    process.cwd() + '/src/app/api/db.json',
    'utf8'
  );
  const data = JSON.parse(file);

  const item = data.find((item: IItem) => item.id === parseInt(id));

  return Response.json(item);
}
