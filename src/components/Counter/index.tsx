import './styles.scss';

import { useEffect } from 'react';

import Typography from '@/components/Typography';

import { ReactComponent as MinusIcon } from '../../../public/assets/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/assets/icons/plus.svg';

export interface ICounter {
  count: number;
  maxCount: number;
  handleChange: (newCount: number) => void;
  disabled?: boolean;
}

function Counter({
  count,
  maxCount,
  handleChange,
  disabled = false,
}: ICounter) {
  const handleDecrement = () => {
    const newCount = count - 1;
    if (newCount < 1) {
      return;
    }
    handleChange(newCount);
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    if (newCount > maxCount) {
      return;
    }
    handleChange(count + 1);
  };

  useEffect(() => {
    if (count > maxCount && maxCount > 0) {
      handleChange(maxCount);
    }
    if (maxCount <= 0 || count < 0) {
      handleChange(0);
    }
    if (count === 0 && maxCount > 0) {
      handleChange(1);
    }
  }, [maxCount, count]);

  const counterDisabled = disabled || maxCount <= 0;

  return (
    <div className='counter'>
      <button
        className='icon-button'
        onClick={handleDecrement}
        disabled={count <= 1 || counterDisabled}
      >
        <MinusIcon className='icon-button__icon' />
      </button>
      <Typography
        type='label'
        size='large'
        color={counterDisabled ? 'secondary' : 'primary'}
      >
        {count}
      </Typography>
      <button
        className='icon-button'
        onClick={handleIncrement}
        disabled={count === maxCount || counterDisabled}
      >
        <PlusIcon className='icon-button__icon' />
      </button>
    </div>
  );
}

export default Counter;
