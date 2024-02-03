import './styles.scss';

import Typography from '../Typography';

export interface IBreadcrumbItem {
  text: string;
  isLast?: boolean;
  link?: string;
}

function BreadcrumbItem({ text, link, isLast = false }: IBreadcrumbItem) {
  return (
    <li className='breadcrumb-item'>
      {isLast ? (
        <Typography type='label' size='small' color='primary'>
          {text}
        </Typography>
      ) : (
        <a href={link} className='link'>
          <Typography type='label' size='small' color='secondary'>
            {text}
          </Typography>
        </a>
      )}
    </li>
  );
}

export default BreadcrumbItem;
