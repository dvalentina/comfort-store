import './styles.scss';

import Image from 'next/image';
import Link from 'next/link';

import Tooltip from '../Tooltip';
import Typography from '../Typography';

function Header() {
  return (
    <div className='header'>
      <Link href='/' className='logo header__logo'>
        Comfort Store
      </Link>
      <div className='header__links'>
        <Link className='link' href='/'>
          <Typography type='label' size='small' role='span'>
            Shop
          </Typography>
        </Link>
        <Link className='link' href='/about'>
          <Typography type='label' size='small' role='span'>
            About
          </Typography>
        </Link>
      </div>
      <div className='header__cart cart'>
        <Tooltip text='Coming soon!' position='left'>
          <Image
            src='/assets/icons/shopping-cart.svg'
            alt='shopping cart'
            width={24}
            height={24}
            className='cart__icon'
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
