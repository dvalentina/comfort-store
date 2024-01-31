import type { Meta, StoryObj } from '@storybook/react';

import ColorItem from './ColorItem';

const meta = {
  component: ColorItem,
  title: 'Tokens/Colors',
} satisfies Meta<typeof ColorItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Verdigris: Story = {
  args: {
    name: 'Verdigris',
    hex: '#3aa39f',
  },
};

export const MikadoYellow: Story = {
  args: {
    name: 'Mikado Yellow',
    hex: '#ffc41f',
  },
};

export const ImperialRed: Story = {
  args: {
    name: 'Imperial Red',
    hex: '#e14b4b',
  },
};

export const SpaceCadet: Story = {
  args: {
    name: 'Space Cadet',
    hex: '#17183b',
  },
};

export const CoolGrey: Story = {
  args: {
    name: 'Cool Grey',
    hex: '#a2a3b1',
  },
};

export const FrenchGrey: Story = {
  args: {
    name: 'French Grey',
    hex: '#d1d1d8',
  },
};

export const White: Story = {
  args: {
    name: 'White',
    hex: '#ffffff',
  },
};
