'use client';

import './styles.scss';

import useProduct from '@/hooks/useProduct';

function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { product, isLoading, isError } = useProduct({ id });

  if (!product) {
    return <p>loading...</p>;
  }

  return (
    <div className='product-page'>
      <div className='product-page__left'>
        <h1 className='product-title product-page__product-title'>
          {product.name}
        </h1>
        <h4 className='product-price'>${product.priceUSD}</h4>
        <p className='product-description'>{product.description}</p>
        <p className='product-bonuses'>{product.bonuses.join(' • ')}</p>
      </div>
    </div>
  );
}

export default ProductPage;
