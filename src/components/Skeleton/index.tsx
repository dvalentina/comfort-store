import './styles.scss';

interface ISkeleton {
  children?: React.ReactNode;
  loading?: boolean;
  height?: string;
  width?: string;
}

function Skeleton({ children, loading = true, height, width }: ISkeleton) {
  if (loading) {
    return (
      <div
        className={`skeleton skeleton--loading`}
        style={{ height: height, width: width }}
      >
        <div className='skeleton__children'>{children}</div>
      </div>
    );
  }
  return children;
}

export default Skeleton;
