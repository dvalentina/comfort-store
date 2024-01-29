import './styles.scss';

import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <div className='header'>
      <Link href='/' className='logo header__logo'>
        Comfort Store
      </Link>
      <div className='header__links'>
        <Link className='link' href='/'>
          Shop
        </Link>
        <Link className='link' href='/about'>
          About
        </Link>
      </div>
      <Link href='/cart' className='cart header__cart'>
        <Image
          src='/assets/icons/shopping-cart.svg'
          alt='shopping cart'
          width={24}
          height={24}
          className='cart__icon'
        />
      </Link>
    </div>
  );
}

export default Header;
