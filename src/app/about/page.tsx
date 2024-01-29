import './styles.scss';

import Image from 'next/image';

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
      <div>
        <h1 className='headline'>About Comfort Store</h1>
        <p className='text'>
          Hello! I developed this e-commerce application as a pet project.
        </p>
        <p className='text'>
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
        </p>
        <h2 className='title'>Contacts</h2>
        <p className='text'>
          <b>LinkedIn:</b>{' '}
          <a
            href='https://www.linkedin.com/in/dvalentina'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            @dvalentina
          </a>
        </p>
        <p className='text'>
          <b>Telegram:</b>{' '}
          <a
            href='https://t.me/danilova_v_v'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            @danilova_v_v
          </a>
        </p>
        <p className='text'>
          <b>GitHub:</b>{' '}
          <a
            href='https://github.com/dvalentina'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            @dvalentina
          </a>
        </p>
        <p className='text'>
          <b>E-mail:</b> danilova.vv@phystech.edu
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
