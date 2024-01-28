'use client';

import useItem from '@/hooks/useItem';

function ItemPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { item, isLoading, isError } = useItem({ id });

  console.log(item);
  if (!item) {
    return <p>loading...</p>;
  }

  return (
    <>
      <p>Id: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Images: {...item.images}</p>
      <p>Available Q-ty: {item.available_qty}</p>
      <p>Price, USD: {item.priceUSD}</p>
      <p>Colors: {...item.colors}</p>
      <p>Tags: {...item.tags}</p>
      <p>Sale: {item.sale ? 'yes' : 'no'}</p>
      <p>Sale price, USD: {item.salePriceUSD ? item.salePriceUSD : 'none'}</p>
    </>
  );
}

export default ItemPage;
