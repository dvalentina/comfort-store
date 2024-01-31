import './styles.scss';

import Typography from '../Typography';

function ColorItem({ name, hex }: { name: string; hex: string }) {
  const color = name.toLowerCase().replace(' ', '-');

  return (
    <div className={`color-item color-item--${color}`}>
      <div className='color-details color-item__color-details'>
        <Typography type='label' size='large'>
          {name}
        </Typography>
        <Typography type='label' size='small' color='secondary'>
          {hex.toUpperCase()}
        </Typography>
      </div>
    </div>
  );
}

export default ColorItem;
