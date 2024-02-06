import useSWR from 'swr';

import { API_URL } from '@/constants';
import { IProduct } from '@/types';

const fetcher = (URL: string) => fetch(URL).then((res) => res.json());

function useProduct({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR<IProduct>(
    `${API_URL}/products/${id}`,
    fetcher
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
}

export default useProduct;
