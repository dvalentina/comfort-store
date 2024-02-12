import './styles.scss';

import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as PlusIcon } from '../../../../public/assets/icons/plus.svg';
import Button from '..';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components: Atoms/Button',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const FilledFullWidth: Story = {
  args: {
    label: 'Button',
    variant: 'filled',
    fullWidth: true,
  },
};

const VariantsTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <div className='button-stories'>
        <Button {...args} variant='filled' />
        <Button {...args} variant='outline' />
        <Button {...args} variant='link' />
      </div>
    );
  },
};

export const Variants: Story = {
  ...VariantsTemplate,
  args: {
    label: 'Button',
  },
};

export const Disabled: Story = {
  ...VariantsTemplate,
  args: {
    label: 'Button',
    disabled: true,
  },
};

// With Icons

export const IconLeading: Story = {
  ...VariantsTemplate,
  args: {
    label: 'Button with Icon',
    iconLeading: <PlusIcon />,
  },
};

export const IconTrailing: Story = {
  ...VariantsTemplate,
  args: {
    label: 'Button with Icon',
    iconTrailing: <PlusIcon />,
  },
};

export const IconOnly: Story = {
  ...VariantsTemplate,
  args: {
    iconTrailing: <PlusIcon />,
  },
};
