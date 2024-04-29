import './styles.scss';

import { useEffect, useRef, useState } from 'react';

import ImageWithLoader from '@/components/ImageWithLoader';
import Skeleton from '@/components/Skeleton';
import { API_URL } from '@/constants';

import Arrows from '../Arrows';
import NumberView from '../NumberView';
import ProductThumbnailGroup from '../ProductThumbnailGroup';

function ProductView({ imageURLs }: { imageURLs: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageURL, setActiveImageURL] = useState(imageURLs[activeIndex]);
  const [canScroll, setCanScroll] = useState(true);
  const viewRef = useRef<HTMLDivElement>(null);

  const handleChange = (newActiveImageURL: string) => {
    setActiveImageURL(newActiveImageURL);
    setActiveIndex(imageURLs.indexOf(newActiveImageURL));
  };

  const handleClickNext = () => {
    const incrementedIndex = activeIndex + 1;
    if (imageURLs.length > 0) {
      const nextIndex = incrementedIndex % imageURLs.length;
      setActiveIndex(nextIndex);
      setActiveImageURL(imageURLs[nextIndex]);
    }
  };

  const handleClickPrevious = () => {
    const decrementedIndex = activeIndex - 1;
    const previousIndex =
      decrementedIndex < 0
        ? imageURLs.length + decrementedIndex
        : decrementedIndex;

    setActiveIndex(previousIndex);
    setActiveImageURL(imageURLs[previousIndex]);
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    const delta = Math.sign(event.deltaY);
    if (canScroll) {
      if (delta > 0) {
        handleClickNext();
      } else {
        handleClickPrevious();
      }
    }
    setCanScroll(false);
    setTimeout(() => {
      setCanScroll(true);
    }, 800);
  };

  useEffect(() => {
    const view = viewRef.current;
    if (view) {
      view.addEventListener('wheel', handleWheel, {
        passive: false,
      });
      return () => view.removeEventListener('wheel', handleWheel);
    }
  }, [activeIndex, canScroll]);

  useEffect(() => {
    setActiveImageURL(imageURLs[0]);
  }, [imageURLs]);

  return (
    <div className='product-view' ref={viewRef}>
      <div className='image-number product-view__image-number'>
        <div className='image-number__number-view'>
          <NumberView number={activeIndex + 1} maxNumber={imageURLs.length} />
        </div>
        {imageURLs.length > 1 ? (
          <Arrows
            handleClickNext={handleClickNext}
            handleClickPrevious={handleClickPrevious}
          />
        ) : null}
      </div>
      <div className='image product-view__image'>
        {activeImageURL ? (
          <ImageWithLoader
            src={`${API_URL}${activeImageURL}`}
            alt={'product preview'}
            fill
            sizes='840px'
            priority
            iconSize='large'
          />
        ) : (
          <Skeleton image iconSize='large' className='skeleton' />
        )}
      </div>
      <ProductThumbnailGroup
        imageURLs={imageURLs}
        activeImageURL={activeImageURL}
        handleChange={handleChange}
      />
    </div>
  );
}

export default ProductView;
