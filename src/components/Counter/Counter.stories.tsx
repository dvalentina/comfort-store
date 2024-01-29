import type { Meta, StoryObj } from '@storybook/react';

import Counter from '.';

const meta = {
  component: Counter,
  title: 'Counter',
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 1,
    maxCount: 98,
    handleChange: () => {},
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const MaximumCount: Story = {
  args: {
    ...Default.args,
    count: Default.args.maxCount,
  },
};

export const MinimumCount: Story = {
  args: {
    ...Default.args,
    count: 1,
  },
};
