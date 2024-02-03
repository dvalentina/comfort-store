import type { Meta, StoryObj } from '@storybook/react';

import Arrows from '.';

const meta: Meta<typeof Arrows> = {
  component: Arrows,
  title: 'Components: Organisms/Product View/Arrows',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
