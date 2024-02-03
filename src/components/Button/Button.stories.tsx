import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as PlusIcon } from '../../../public/assets/icons/plus.svg';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components: Atoms/Button',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

// Filled

export const Filled: Story = {
  args: {
    label: 'Button',
    variant: 'filled',
  },
};

export const FilledDisabled: Story = {
  args: {
    label: 'Button',
    variant: 'filled',
    disabled: true,
  },
};

export const FilledWithLeadingIcon: Story = {
  args: {
    label: 'Button with Icon',
    variant: 'filled',
    iconLeading: <PlusIcon />,
  },
};

export const FilledOnlyIcon: Story = {
  args: {
    variant: 'filled',
    iconLeading: <PlusIcon />,
  },
};

export const FilledFullWidth: Story = {
  args: {
    label: 'Button',
    variant: 'filled',
    fullWidth: true,
  },
};

// Outline

export const Outline: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
  },
};

export const OutlineDisabled: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
    disabled: true,
  },
};

export const OutlineWithTrailingIcon: Story = {
  args: {
    label: 'Button with Icon',
    variant: 'outline',
    iconTrailing: <PlusIcon />,
  },
};

export const OutlineOnlyIcon: Story = {
  args: {
    variant: 'outline',
    iconLeading: <PlusIcon />,
  },
};

// Link

export const Link: Story = {
  args: {
    label: 'Button',
    variant: 'link',
  },
};

export const LinkDisabled: Story = {
  args: {
    label: 'Button',
    variant: 'link',
    disabled: true,
  },
};

export const LinkWithLeadingIcon: Story = {
  args: {
    label: 'Button with Icon',
    variant: 'link',
    iconLeading: <PlusIcon />,
  },
};

export const LinkOnlyIcon: Story = {
  args: {
    variant: 'link',
    iconLeading: <PlusIcon />,
  },
};
