'use client';

import './styles.scss';

import { useEffect, useRef, useState } from 'react';

import { IBreadcrumbItem } from '@/components/BreadcrumbItem';
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';
import ColorSelection from '@/components/ColorSelection';
import Counter from '@/components/Counter';
import ProductView from '@/components/ProductView/ProductView';
import Tooltip from '@/components/Tooltip';
import Typography from '@/components/Typography';
import useProduct from '@/hooks/useProduct';
import { capitalizeFirstLetter } from '@/utils';

import { ReactComponent as BackIcon } from '../../../../public/assets/icons/back.svg';

function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { product, isLoading, isError } = useProduct({ id });

  const productViewRef = useRef<HTMLDivElement>(null);
  const rectangleRef = useRef<HTMLDivElement>(null);

  const [chosenColor, setChosenColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleChooseColor = (newColor: string) => {
    setChosenColor(newColor);
  };

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  useEffect(() => {
    if (product) {
      setChosenColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return <p>loading...</p>;
  }

  const breadcrumbItems: IBreadcrumbItem[] = [
    {
      text: capitalizeFirstLetter(product.tags[0]),
    },
    { text: product.name },
  ];

  const productViewRect = productViewRef.current?.getBoundingClientRect();
  if (productViewRect && rectangleRef.current) {
    rectangleRef.current.style.width = 'auto';
    rectangleRef.current.style.left = `${
      (productViewRect?.left + productViewRect?.right) / 2
    }px`;
  }

  return (
    <div className='product-page'>
      <div className='product-page__left'>
        <div className='navigation'>
          <Button variant='link' iconLeading={<BackIcon />} disabled />
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className='title-zone product-page__title-zone'>
          <Typography type='headline' size='large'>
            {product.name}
          </Typography>
          <Typography type='title' size='medium'>
            ${product.priceUSD}
          </Typography>
        </div>
        <div className='description-zone'>
          <Typography type='body' size='large'>
            {product.description}
          </Typography>
          <ColorSelection
            colors={product.colors}
            activeColor={chosenColor}
            handleChange={handleChooseColor}
          />
          <div className='product-add-to-cart'>
            <Counter
              count={quantity}
              maxCount={product.available_qty}
              handleChange={handleChangeQuantity}
            />
            <Tooltip text='Coming soon!' position='right'>
              <Button label='Add to Cart' disabled />
            </Tooltip>
          </div>
          <Typography type='body' size='large'>
            {product.bonuses.join(' • ')}
          </Typography>
        </div>
      </div>
      <div className='product-page__right' ref={productViewRef}>
        <ProductView imageURLs={product.images} />
        <div className='rectangle' ref={rectangleRef} />
      </div>
    </div>
  );
}

export default ProductPage;
