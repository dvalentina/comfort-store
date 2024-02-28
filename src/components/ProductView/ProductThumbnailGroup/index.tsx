import './styles.scss';

import ProductThumbnail from '../ProductThumbnail';

interface IProductThumbnailGroup {
  imageURLs: string[];
  activeImageURL: string;
  handleChange: (newActiveURL: string) => void;
}

function ProductThumbnailGroup({
  imageURLs,
  activeImageURL,
  handleChange,
}: IProductThumbnailGroup) {
  const handleThumbnailClick = (newActiveURL: string) => {
    handleChange(newActiveURL);
  };

  return (
    <div className='product-thumbnail-group'>
      {imageURLs.length > 0
        ? imageURLs.map((imageURL, index) => (
            <ProductThumbnail
              active={imageURL === activeImageURL}
              imageURL={imageURL}
              handleClick={handleThumbnailClick}
              key={index}
            />
          ))
        : [...Array(3)].map((element, index) => (
            <ProductThumbnail
              active={false}
              imageURL=''
              handleClick={() => {}}
              key={index}
            />
          ))}
    </div>
  );
}

export default ProductThumbnailGroup;
