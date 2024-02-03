import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography';
import Tooltip from '.';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '20px 60px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Tooltip',
    children: <Typography>Hover me</Typography>,
  },
};

export const Top: Story = {
  args: {
    position: 'top',
    text: 'Tooltip',
    children: <Typography>Top Tooltip: hover me!</Typography>,
  },
};

export const Right: Story = {
  args: {
    position: 'right',
    text: 'Tooltip',
    children: <Typography>Right Tooltip: hover me!</Typography>,
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    text: 'Tooltip',
    children: <Typography>Bottom Tooltip: hover me!</Typography>,
  },
};

export const Left: Story = {
  args: {
    position: 'left',
    text: 'Tooltip',
    children: <Typography>Left Tooltip: hover me!</Typography>,
  },
};
