import './styles.scss';
import Link from 'next/link';

function Header() {
  return (
    <div className='header'>
      <Link href='/' className='header__name'>
        Comfort Store
      </Link>
      <div className='header__links'>
        <Link href='/'>Shop</Link>
        <Link href='/about'>About</Link>
      </div>
      <Link href='/cart' className='header__cart'>
        Cart
      </Link>
    </div>
  );
}

export default Header;
