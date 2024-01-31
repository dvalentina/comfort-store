'use client';

import './styles.scss';

import Image from 'next/image';

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
      <Image
        src={`${API_URL}${imageURL}`}
        alt='thumbnail'
        fill
        className='image'
        sizes='104px'
      />
    </div>
  );
}

export default ProductThumbnail;
