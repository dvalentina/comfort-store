import type { Meta, StoryObj } from '@storybook/react';

import Arrows from '.';

const meta = {
  component: Arrows,
  title: 'Components/Product View/Arrows',
  tags: ['autodocs'],
} satisfies Meta<typeof Arrows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
