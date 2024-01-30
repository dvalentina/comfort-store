import type { Meta, StoryObj } from '@storybook/react';

import Typography from '.';

const meta = {
  component: Typography,
  title: 'Typography',
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleString = 'The quick brown fox jumps over the lazy dog';

export const Default: Story = {
  args: {
    children: exampleString,
  },
};
