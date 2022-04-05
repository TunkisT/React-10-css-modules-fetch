import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <a className={css.navLink} href='#home'>Home</a>
        <a className={css.navLink} href='#about'>About</a>
        <a className={css.navLink} href='#contact'>Contact</a>
      </nav>
    </header>
  );
};
export default Header;
