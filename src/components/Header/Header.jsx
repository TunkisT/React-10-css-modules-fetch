import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link className={css.navLink} to='/'>
          Home
        </Link>
        <a className={css.navLink} href='#imageSection'>
          Image Section
        </a>
        <Link className={css.navLink} to='/image-page'>
          Image page
        </Link>
      </nav>
    </header>
  );
};
export default Header;
