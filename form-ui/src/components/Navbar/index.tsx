import { GoHome } from "react-icons/go";
import { IoMdPersonAdd } from "react-icons/io";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <GoHome className={styles.icon} />
      </a>
      <a href="/create-audience">
        <IoMdPersonAdd className={styles.icon} />
      </a>
    </nav>
  );
};
