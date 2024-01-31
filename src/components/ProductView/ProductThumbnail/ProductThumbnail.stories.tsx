import type { Meta, StoryObj } from '@storybook/react';

import ProductThumbnail from '.';

const meta = {
  component: ProductThumbnail,
  title: 'Components/Product View/Product Thumbnail',
  tags: ['autodocs'],
} satisfies Meta<typeof ProductThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: true,
    imageURL: '/items/wooden_speaker_1.jpg',
    handleClick: () => {},
  },
};
