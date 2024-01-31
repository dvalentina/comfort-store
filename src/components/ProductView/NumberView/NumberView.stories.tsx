import type { Meta, StoryObj } from '@storybook/react';

import NumberView from '.';

const meta = {
  component: NumberView,
  title: 'Components/Product View/Number View',
  tags: ['autodocs'],
} satisfies Meta<typeof NumberView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 1,
    maxNumber: 5,
  },
};
