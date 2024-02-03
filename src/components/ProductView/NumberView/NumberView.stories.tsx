import type { Meta, StoryObj } from '@storybook/react';

import NumberView from '.';

const meta: Meta<typeof NumberView> = {
  component: NumberView,
  title: 'Components: Organisms/Product View/Number View',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 1,
    maxNumber: 5,
  },
};
