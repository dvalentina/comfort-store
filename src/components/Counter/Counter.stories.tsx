import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import Counter from '.';
import { ICounter } from '.';

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: 'Components/Counter',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Counter>;

const CounterWithHooks = ({
  count: outerCount = 1,
  maxCount,
  disabled = false,
}: {
  count?: number;
  maxCount: number;
  disabled?: boolean;
}) => {
  const [count, setCount] = useState(outerCount);

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
  };

  useEffect(() => {
    setCount(outerCount);
  }, [outerCount]);

  return (
    <Counter
      count={count}
      handleChange={handleCountChange}
      maxCount={maxCount}
      disabled={disabled}
    />
  );
};

export const Default: Story = {
  args: {
    count: 1,
    maxCount: 12,
    disabled: false,
    handleChange: () => {},
  },
  render: ({ ...args }) => <CounterWithHooks {...args} />,
};

export const Disabled: Story = {
  args: { ...Default.args },
  render: ({ ...args }) => <CounterWithHooks {...args} disabled={true} />,
};

export const MaximumCount: Story = {
  args: { ...Default.args },
  render: ({ ...args }) => <CounterWithHooks {...args} count={12} />,
};

export const MinimumCount: Story = {
  args: { ...Default.args },
  render: ({ ...args }) => <CounterWithHooks {...args} count={1} />,
};
