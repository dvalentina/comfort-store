import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Components: Atoms/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>A child component</p>,
  },
};

export const HeadlineLarge: Story = {
  args: {
    height: '56px',
    width: '500px',
  },
};

export const TitleMedium: Story = {
  args: {
    height: '32px',
    width: '200px',
  },
};

export const HorizontalBlock: Story = {
  args: {
    height: '96px',
    width: '500px',
  },
};

export const ImageBlock: Story = {
  args: {
    height: '400px',
    width: '300px',
    image: true,
    iconSize: 'large',
  },
};
