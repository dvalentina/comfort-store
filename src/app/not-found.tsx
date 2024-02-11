'use client';

import './not-found.scss';
import '@/components/Button/styles.scss';

import Link from 'next/link';

import Button from '@/components/Button';
import Typography from '@/components/Typography';

import { ReactComponent as BackIcon } from '../../public/assets/icons/back.svg';

export default function NotFound() {
  return (
    <div className='not-found'>
      <div className='text'>
        <Typography type='headline' size='large'>
          Ooops...
        </Typography>
        <Typography type='title' size='large'>
          Page not found
        </Typography>
        <Link href='/' className='link not-found__link button button--filled'>
          <BackIcon className='button-icon' />
          <span className='button-label'>Return Home</span>
        </Link>
      </div>
      <div className='error-number not-found__error-number'>
        <Typography type='body'>404</Typography>
      </div>
    </div>
  );
}
