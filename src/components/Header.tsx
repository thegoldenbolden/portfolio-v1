import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header id="top" className={styles.header}>
      <nav className={styles.links}>
        <Link href="#projects">
          <a>projects</a>
        </Link>
        <Link href="#top">
          <a className={styles.logo}>JB</a>
        </Link>
        <a href="mailto: jlbolden.pro@gmail.com">contact</a>
      </nav>
    </header>
  );
};

export default Header;
