import './styles.scss';

import BreadcrumbItem, { IBreadcrumbItem } from '../BreadcrumbItem';
import Typography from '../Typography';

interface IBreadcrumbs {
  items: IBreadcrumbItem[];
}

function Breadcrumbs({ items }: IBreadcrumbs) {
  const breadcrumbs = items.map((item, index) => {
    const isLast = index === items.length - 1;
    const isBeforeLast = index === items.length - 2;

    return (
      <>
        <BreadcrumbItem {...item} isLast={isLast} key={item.text} />
        {!isLast ? (
          <Typography
            type='label'
            size='small'
            color={isBeforeLast ? 'primary' : 'secondary'}
          >
            /
          </Typography>
        ) : null}
      </>
    );
  });

  return <div className='breadcrumbs'>{breadcrumbs}</div>;
}

export default Breadcrumbs;
