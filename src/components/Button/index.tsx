import './styles.scss';

interface IButton {
  onClick?: (event: React.MouseEvent) => void;
  label?: string;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  disabled?: boolean;
  variant?: 'filled' | 'outline' | 'link';
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

function Button({
  iconLeading,
  iconTrailing,
  label,
  variant = 'filled',
  fullWidth = false,
  ...args
}: IButton) {
  return (
    <button
      className={`button button--${variant} ${
        fullWidth ? 'button--full-width' : ''
      } ${!label ? 'button--no-label' : ''}`}
      {...args}
    >
      {iconLeading ? <div className='button-icon'>{iconLeading}</div> : null}
      {label ? <span className='button-label'>{label}</span> : null}
      {iconTrailing ? <div className='button-icon'>{iconTrailing}</div> : null}
    </button>
  );
}

export default Button;
