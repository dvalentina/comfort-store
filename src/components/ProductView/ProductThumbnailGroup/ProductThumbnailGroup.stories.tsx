import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ProductThumbnailGroup from '.';

const meta = {
  component: ProductThumbnailGroup,
  title: 'Components/Product View/Product Thumbnail Group',
  tags: ['autodocs'],
} satisfies Meta<typeof ProductThumbnailGroup>;

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
    activeImageURL: '/items/wooden_speaker_1.jpg',
    imageURLs: [
      '/items/wooden_speaker_1.jpg',
      '/items/wooden_speaker_2.jpg',
      '/items/wooden_speaker_3.jpg',
      '/items/wooden_speaker_4.jpg',
      '/items/wooden_speaker_5.jpg',
    ],
    handleChange: () => {},
  },
  render: ({ imageURLs }) => (
    <ProductThumbnailGroupWithHooks imageURLs={imageURLs} />
  ),
};
