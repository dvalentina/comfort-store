import './styles.scss';

import { ReactComponent as ImageIcon } from '../../../public/assets/icons/image.svg';

interface ISkeleton {
  children?: React.ReactNode;
  loading?: boolean;
  height?: string;
  width?: string;
  image?: boolean;
  iconSize?: 'small' | 'large';
  className?: string;
}

function Skeleton({
  children,
  loading = true,
  height,
  width,
  image = false,
  iconSize = 'small',
  className,
}: ISkeleton) {
  if (loading) {
    return (
      <div
        className={`skeleton ${image ? '' : 'skeleton--loading'} ${
          className ? className : ''
        }`}
        style={{ height: height, width: width }}
      >
        {image ? (
          <div className={`skeleton-icon skeleton-icon--${iconSize}`}>
            <ImageIcon />
          </div>
        ) : null}
        <div className='skeleton__children'>{children}</div>
      </div>
    );
  }
  return children;
}

export default Skeleton;
