import './styles.scss';

import { useState } from 'react';

import Typography from '../Typography';

interface ITooltip {
  position?: 'top' | 'right' | 'bottom' | 'left';
  text: string;
  children: React.ReactNode;
}

function Tooltip({ children, text, position = 'bottom' }: ITooltip) {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className='tooltip-wrapper'
    >
      {children}
      {visible ? (
        <div className={`tooltip tooltip--${position}`}>
          <Typography>{text}</Typography>
        </div>
      ) : null}
    </div>
  );
}

export default Tooltip;
