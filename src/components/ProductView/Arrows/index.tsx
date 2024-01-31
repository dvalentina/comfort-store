import './styles.scss';

import Button from '@/components/Button';

import { ReactComponent as ArrowLeft } from '../../../../public/assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../../../public/assets/icons/chevron-right.svg';

interface IArrows {
  handleClickNext: () => void;
  handleClickPrevious: () => void;
  disabled?: boolean;
}

function Arrows({
  handleClickNext,
  handleClickPrevious,
  disabled = false,
}: IArrows) {
  return (
    <div className='arrows'>
      <Button
        iconLeading={<ArrowLeft />}
        variant='link'
        onClick={handleClickPrevious}
        disabled={disabled}
      />
      <Button
        iconLeading={<ArrowRight />}
        variant='link'
        onClick={handleClickNext}
        disabled={disabled}
      />
    </div>
  );
}

export default Arrows;
