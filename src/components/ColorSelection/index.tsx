import './styles.scss';

import Tooltip from '../Tooltip';

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
    <Tooltip text={color} key={color}>
      <div
        className={`item item--${color} ${
          color === activeColor ? 'item--active' : ''
        }`}
        onClick={() => handleChoose(color)}
      />
    </Tooltip>
  ));

  return <div className='color-selection'>{colorItems}</div>;
}

export default ColorSelection;
