import type { Meta, StoryObj } from '@storybook/react';

import { BASE_URL } from '@/constants';

import Breadcrumbs from '.';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Components: Atoms/Breadcrumbs',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { link: `${BASE_URL}/?path=/docs`, text: 'Storybook' },
      {
        link: `${BASE_URL}/?path=/docs/components-atoms`,
        text: 'Components: Atoms',
      },
      { text: 'Breadcrumbs' },
    ],
  },
};
