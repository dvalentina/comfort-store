import './styles.scss';

import Typography from '../../Typography';

function NumberView({
  number,
  maxNumber,
}: {
  number: number;
  maxNumber: number;
}) {
  if (number <= 0 || maxNumber <= 0) {
    return null;
  }

  function numberToTwoDigits(number: number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  const numberView = numberToTwoDigits(number > maxNumber ? maxNumber : number);
  const maxNumberView = numberToTwoDigits(maxNumber);

  return (
    <div className='number-view'>
      <div className='number'>
        <Typography type='headline' size='medium' role='span'>
          {numberView}
        </Typography>
      </div>
      <Typography type='title' size='medium' role='span' color='secondary'>
        / {maxNumberView}
      </Typography>
    </div>
  );
}

export default NumberView;
