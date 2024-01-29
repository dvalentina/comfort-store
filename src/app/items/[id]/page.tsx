'use client';

import './styles.scss';

import useItem from '@/hooks/useItem';

function ItemPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { item, isLoading, isError } = useItem({ id });

  if (!item) {
    return <p>loading...</p>;
  }

  return (
    <div className='item-page'>
      <div className='item-page__left'>
        <h1 className='item-title item-page__item-title'>{item.name}</h1>
        <h4 className='item-price'>${item.priceUSD}</h4>
        <p className='item-description'>{item.description}</p>
        <p className='item-shipping'>
          Free 3-5 day shipping • Tool-free assembly • 30-day trial
        </p>
      </div>
    </div>
  );
}

export default ItemPage;
