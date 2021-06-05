import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.link}>
        <Link href="/">
          <a>Domů</a>
        </Link>
      </li>
      <li className={styles.link}>
        <Link href="/mapa">
          <a>Mapa</a>
        </Link>
      </li>
      <li className={styles.link}>
        <Link href="/vylety">
          <a>Výlety</a>
        </Link>
      </li>
      <li className={styles.link}>
        <Link href="/galerie">
          <a>Galerie</a>
        </Link>
      </li>
      <li className={styles.link}>
        <Link href="/kontakt">
          <a>Kontakt</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
