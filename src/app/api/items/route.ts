import { promises as fs } from 'fs';

export async function GET(request: Request) {
  const file = await fs.readFile(
    process.cwd() + '/src/app/api/db.json',
    'utf8'
  );
  const data = JSON.parse(file);

  return Response.json(data);
}
