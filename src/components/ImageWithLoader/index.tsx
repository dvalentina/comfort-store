import './styles.scss';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

import Skeleton from '../Skeleton';

interface IImageWithLoader extends ImageProps {
  iconSize?: 'small' | 'large';
}

function ImageWithLoader({
  src,
  alt,
  onLoad,
  iconSize = 'small',
  ...props
}: IImageWithLoader) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!src || (typeof src === 'string' && src.includes('undefined'))) {
      setLoading(true);
    }
  }, [src]);

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoading(false);

    if (onLoad) {
      onLoad(event);
    }
  };

  return (
    <div
      className={`image-with-loader ${props.className ? props.className : ''}`}
      style={{
        width: props.fill ? '100%' : props.width,
        height: props.fill ? '100%' : props.height,
      }}
    >
      {src || (typeof src === 'string' && !src.includes('undefined')) ? (
        <Image
          src={src}
          alt={alt}
          {...props}
          onLoad={handleLoad}
          style={{ ...props.style }}
          className={`image-with-loader__image image-with-loader__image--${
            loading ? 'hidden' : 'visible'
          }`}
        />
      ) : null}
      <div
        className={`image-with-loader__skeleton image-with-loader__skeleton--${
          loading ? 'visible' : 'hidden'
        }`}
      >
        <Skeleton
          image
          width='100%'
          height='100%'
          className='skeleton'
          iconSize={iconSize}
        />
      </div>
    </div>
  );
}

export default ImageWithLoader;
