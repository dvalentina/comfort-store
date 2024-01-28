import useSWR from 'swr';

import { API_URL } from '@/constants';
import { IItem } from '@/types';

const fetcher = (URL: string) => fetch(URL).then((res) => res.json());

function useItem({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR<IItem>(
    `${API_URL}/items/${id}`,
    fetcher
  );

  return {
    item: data,
    isLoading,
    isError: error,
  };
}

export default useItem;
