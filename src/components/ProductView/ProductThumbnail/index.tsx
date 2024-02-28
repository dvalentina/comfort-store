'use client';

import './styles.scss';

import ImageWithLoader from '@/components/ImageWithLoader';
import Skeleton from '@/components/Skeleton';
import { API_URL } from '@/constants';

interface IProductThumbnail {
  imageURL: string;
  active: boolean;
  handleClick: (imageURL: string) => void;
}

function ProductThumbnail({
  imageURL,
  active,
  handleClick,
}: IProductThumbnail) {
  return (
    <div
      className={`product-thumbnail ${
        active ? 'product-thumbnail--active' : ''
      }`}
      onClick={() => handleClick(imageURL)}
    >
      {imageURL ? (
        <ImageWithLoader
          src={`${API_URL}${imageURL}`}
          alt='thumbnail'
          fill
          className='image'
          sizes='104px'
        />
      ) : (
        <Skeleton image width='70%' height='100%' className='skeleton' />
      )}
    </div>
  );
}

export default ProductThumbnail;
