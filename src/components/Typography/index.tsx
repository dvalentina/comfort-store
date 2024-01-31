import './styles.scss';

export interface ITypography {
  children?: React.ReactNode;
  role?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  type?: 'headline' | 'title' | 'label' | 'body';
  size?: 'large' | 'medium' | 'small';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'white';
}

function Typography({
  children,
  role = 'p',
  type = 'body',
  size = 'medium',
  color = 'primary',
}: ITypography) {
  const className = `typography typography__${type} typography__${type}--${size} typography--${color}`;
  switch (role) {
    case 'h1':
      return <h1 className={className}>{children}</h1>;
    case 'h2':
      return <h2 className={className}>{children}</h2>;
    case 'h3':
      return <h3 className={className}>{children}</h3>;
    case 'h4':
      return <h4 className={className}>{children}</h4>;
    case 'h5':
      return <h5 className={className}>{children}</h5>;
    case 'h6':
      return <h6 className={className}>{children}</h6>;
    case 'p':
      return <p className={className}>{children}</p>;
    case 'span':
      return <span className={className}>{children}</span>;
  }
}

export default Typography;
