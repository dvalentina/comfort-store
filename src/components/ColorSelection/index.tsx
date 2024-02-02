import './styles.scss';

import { useState } from 'react';

interface IColorSelection {
  colors: string[];
  activeColor: string;
  handleChange: (newColor: string) => void;
}

function ColorSelection({
  colors,
  activeColor,
  handleChange,
}: IColorSelection) {
  const handleChoose = (newColor: string) => {
    handleChange(newColor);
  };

  const colorItems = colors.map((color) => (
    <div
      className={`item item--${color} ${
        color === activeColor ? 'item--active' : ''
      }`}
      onClick={() => handleChoose(color)}
      key={color}
    />
  ));

  return <div className='color-selection'>{colorItems}</div>;
}

export default ColorSelection;
