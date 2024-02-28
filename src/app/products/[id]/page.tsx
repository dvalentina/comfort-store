'use client';

import './styles.scss';

import { useEffect, useRef, useState } from 'react';

import { IBreadcrumbItem } from '@/components/BreadcrumbItem';
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';
import ColorSelection from '@/components/ColorSelection';
import Counter from '@/components/Counter';
import ProductView from '@/components/ProductView/ProductView';
import Skeleton from '@/components/Skeleton';
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

  if (isError) {
    console.log(isError);
    return <Typography>Some error occured</Typography>;
  }

  const breadcrumbItems: IBreadcrumbItem[] = product
    ? [
        {
          text: capitalizeFirstLetter(product.tags[0]),
        },
        { text: product.name },
      ]
    : [];

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
          {product ? (
            <Breadcrumbs items={breadcrumbItems} />
          ) : (
            <Skeleton width='100%' height='16px' />
          )}
        </div>
        <div className='title-zone product-page__title-zone'>
          {product ? (
            <Typography type='headline' size='large'>
              {product.name}
            </Typography>
          ) : (
            <Skeleton width='100%' height='56px' />
          )}
          {product ? (
            <Typography type='title' size='medium'>
              ${product.priceUSD}
            </Typography>
          ) : (
            <Skeleton width='30%' height='32px' />
          )}
        </div>
        <div className='description-zone'>
          {product ? (
            <Typography type='body' size='large'>
              {product.description}
            </Typography>
          ) : (
            <Skeleton width='100%' height='100px' />
          )}
          {product ? (
            <ColorSelection
              colors={product.colors}
              activeColor={chosenColor}
              handleChange={handleChooseColor}
            />
          ) : (
            <Skeleton width='50%' height='28px' />
          )}
          <div className='product-add-to-cart'>
            <Counter
              count={product ? quantity : 1}
              maxCount={product ? product.available_qty : 1}
              handleChange={handleChangeQuantity}
              disabled={!product}
            />
            <Tooltip text='Coming soon!' position='right'>
              <Button label='Add to Cart' disabled />
            </Tooltip>
          </div>
          {product ? (
            <Typography type='body' size='large'>
              {product.bonuses.join(' • ')}
            </Typography>
          ) : (
            <Skeleton width='100%' height='24px' />
          )}
        </div>
      </div>
      <div className='product-page__right' ref={productViewRef}>
        <ProductView imageURLs={product ? product.images : []} />
        <div className='rectangle' ref={rectangleRef} />
      </div>
    </div>
  );
}

export default ProductPage;
