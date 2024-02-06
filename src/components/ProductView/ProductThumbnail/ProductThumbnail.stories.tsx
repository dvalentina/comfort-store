import type { Meta, StoryObj } from '@storybook/react';

import ProductThumbnail from '.';

const meta: Meta<typeof ProductThumbnail> = {
  component: ProductThumbnail,
  title: 'Components: Organisms/Product View/Product Thumbnail',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: true,
    imageURL: '/products/wooden_speaker_1.jpg',
    handleClick: () => {},
  },
};
