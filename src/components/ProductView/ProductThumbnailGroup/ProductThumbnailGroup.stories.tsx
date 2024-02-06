import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ProductThumbnailGroup from '.';

const meta: Meta<typeof ProductThumbnailGroup> = {
  component: ProductThumbnailGroup,
  title: 'Components: Organisms/Product View/Product Thumbnail Group',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ProductThumbnailGroupWithHooks = ({
  imageURLs,
}: {
  imageURLs: string[];
}) => {
  const [activeImageURL, setActiveImageURL] = useState(imageURLs[0]);

  const handleChange = (newActiveImageURL: string) => {
    setActiveImageURL(newActiveImageURL);
  };

  return (
    <ProductThumbnailGroup
      activeImageURL={activeImageURL}
      imageURLs={imageURLs}
      handleChange={handleChange}
    />
  );
};

export const Default: Story = {
  args: {
    activeImageURL: '/products/wooden_speaker_1.jpg',
    imageURLs: [
      '/products/wooden_speaker_1.jpg',
      '/products/wooden_speaker_2.jpg',
      '/products/wooden_speaker_3.jpg',
      '/products/wooden_speaker_4.jpg',
      '/products/wooden_speaker_5.jpg',
    ],
    handleChange: () => {},
  },
  render: ({ imageURLs }) => (
    <ProductThumbnailGroupWithHooks imageURLs={imageURLs} />
  ),
};
