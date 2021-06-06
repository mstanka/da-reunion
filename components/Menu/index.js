import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.nav_wrapper}>
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
          <Link href="/onas">
            <a>O nás</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
