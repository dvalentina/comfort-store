import './styles.scss';

import Typography from '@/components/Typography';

function APIHome() {
  return (
    <div className='api-page'>
      <Typography role='h1' type='headline' size='large'>
        Comfort Store API
      </Typography>
      <div>
        <Typography role='h3' type='title' size='medium'>
          Available routes:
        </Typography>
        <ul>
          <li>
            <Typography type='label' role='span'>
              GET{' '}
            </Typography>
            <Typography size='large' role='span'>
              <a href='api/products'>/api/products</a>
            </Typography>
          </li>
          <li>
            <Typography type='label' role='span'>
              GET{' '}
            </Typography>
            <Typography size='large' role='span'>
              <a href='api/products/1'>/api/products/:id</a>
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default APIHome;
