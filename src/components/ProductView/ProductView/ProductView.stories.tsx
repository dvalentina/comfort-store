import type { Meta, StoryObj } from '@storybook/react';

import ProductView from '.';

const meta = {
  component: ProductView,
  title: 'Components/Product View/Product View',
  tags: ['autodocs'],
} satisfies Meta<typeof ProductView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageURLs: [
      '/items/wooden_speaker_1.jpg',
      '/items/wooden_speaker_2.jpg',
      '/items/wooden_speaker_3.jpg',
      '/items/wooden_speaker_4.jpg',
      '/items/wooden_speaker_5.jpg',
    ],
  },
};
