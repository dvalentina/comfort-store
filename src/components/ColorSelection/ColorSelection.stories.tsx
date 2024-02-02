import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ColorSelection from '.';

const meta = {
  component: ColorSelection,
  title: 'Components/Color Selection',
  tags: ['autodocs'],
} satisfies Meta<typeof ColorSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSelectionWithHooks = ({ colors }: { colors: string[] }) => {
  const [activeColor, setActiveColor] = useState(colors[0]);

  const handleChange = (newColor: string) => {
    setActiveColor(newColor);
  };

  return (
    <ColorSelection
      activeColor={activeColor}
      colors={colors}
      handleChange={handleChange}
    />
  );
};

export const Default: Story = {
  args: {
    activeColor: 'black',
    colors: ['black', 'brown', 'grey', 'white', 'yellow', 'beige', 'blue'],
  },
  render: ({ colors }) => <ColorSelectionWithHooks colors={colors} />,
};
