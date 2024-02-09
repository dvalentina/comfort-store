import './styles.scss';

import Image from 'next/image';

import Typography from '@/components/Typography';

function AboutPage() {
  return (
    <div className='about'>
      <div className='about__left'>
        <Image
          src='/assets/coffee_plant.jpg'
          alt='coffee plant'
          fill
          className='image'
        />
      </div>
      <div className='about__right'>
        <Typography role='h1' type='headline' size='large'>
          About Comfort Store
        </Typography>
        <Typography type='body' size='large'>
          Hello! I developed this e-commerce application as a pet project.
        </Typography>
        <Typography type='body' size='large'>
          To learn more about its features, the technologies I used or to view
          the source code, visit{' '}
          <a
            href='https://github.com/dvalentina/comfort-store'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            its page on GitHub.
          </a>
        </Typography>
        <Typography role='h2' type='title' size='large'>
          Contacts
        </Typography>
        <Typography type='body' size='large'>
          <b>LinkedIn:</b>{' '}
          <a
            href='https://www.linkedin.com/in/dvalentina'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            @dvalentina
          </a>
        </Typography>
        <Typography type='body' size='large'>
          <b>Telegram:</b>{' '}
          <a
            href='https://t.me/danilova_v_v'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            @danilova_v_v
          </a>
        </Typography>
        <Typography type='body' size='large'>
          <b>GitHub:</b>{' '}
          <a
            href='https://github.com/dvalentina'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            @dvalentina
          </a>
        </Typography>
        <Typography type='body' size='large'>
          <b>E-mail:</b> danilova.vv@phystech.edu
        </Typography>
      </div>
    </div>
  );
}

export default AboutPage;
