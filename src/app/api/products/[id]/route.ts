import { DATABASE_URL } from '@/constants';
import { IProduct } from '@/types';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const res = await fetch(DATABASE_URL);
  const data = await res.json();

  const product = data.find((product: IProduct) => product.id === parseInt(id));

  return Response.json(product);
}
