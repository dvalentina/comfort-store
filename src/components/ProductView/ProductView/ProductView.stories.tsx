import type { Meta, StoryObj } from '@storybook/react';

import ProductView from '.';

const meta: Meta<typeof ProductView> = {
  component: ProductView,
  title: 'Components: Organisms/Product View',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageURLs: [
      '/products/wooden_speaker_1.jpg',
      '/products/wooden_speaker_2.jpg',
      '/products/wooden_speaker_3.jpg',
      '/products/wooden_speaker_4.jpg',
      '/products/wooden_speaker_5.jpg',
    ],
  },
};
