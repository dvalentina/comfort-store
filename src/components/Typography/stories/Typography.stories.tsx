import './styles.scss';

import type { Meta, StoryObj } from '@storybook/react';

import Typography from '..';
import { TypographyItem } from './TypographyItem';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Tokens/Typography',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const exampleString = 'The quick brown fox jumps over the lazy dog';

const TypographyTemplate: Story = {
  render: ({ children, ...args }) => {
    return (
      <div className='stories-typography'>
        <TypographyItem {...args} size='large' key={`${args.type}-large`}>
          {children}
        </TypographyItem>
        <TypographyItem {...args} size='medium' key={`${args.type}-medium`}>
          {children}
        </TypographyItem>
        <TypographyItem {...args} size='small' key={`${args.type}-small`}>
          {children}
        </TypographyItem>
      </div>
    );
  },
};

export const Headline: Story = {
  ...TypographyTemplate,
  args: {
    children: exampleString,
    type: 'headline',
  },
};

export const Title: Story = {
  ...TypographyTemplate,
  args: {
    children: exampleString,
    type: 'title',
  },
};

export const Label: Story = {
  ...TypographyTemplate,
  args: {
    children: exampleString,
    type: 'label',
  },
};

export const Body: Story = {
  ...TypographyTemplate,
  args: {
    children: exampleString,
    type: 'body',
  },
};
