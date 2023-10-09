import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">All audiences </a>
      <a href="/create-audience"> Add new audience</a>
    </nav>
  );
};
