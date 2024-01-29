import './styles.scss';

import { ReactComponent as MinusIcon } from '../../../public/assets/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/assets/icons/plus.svg';

interface ICounter {
  count?: number;
  maxCount: number;
  handleChange: (newCount: number) => void;
  disabled: boolean;
}

function Counter({ count = 1, maxCount, handleChange, disabled }: ICounter) {
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

  return (
    <div className='counter'>
      <button
        className='icon-button'
        onClick={handleDecrement}
        disabled={count === 1 || disabled}
      >
        <MinusIcon className='icon-button__icon' />
      </button>
      <p className={`count ${disabled ? 'count--disabled' : ''}`}>{count}</p>
      <button
        className='icon-button'
        onClick={handleIncrement}
        disabled={count === maxCount || disabled}
      >
        <PlusIcon className='icon-button__icon' />
      </button>
    </div>
  );
}

export default Counter;
