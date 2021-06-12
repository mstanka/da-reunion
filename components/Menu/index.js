import Link from 'next/link';
import styles from './Menu.module.css';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();

  const activeLinkClass = `${styles.link} ${styles.link_active}`;

  return (
    <div className={styles.nav_wrapper}>
      <ul className={styles.nav}>
        <li className={router.pathname === '/' ? activeLinkClass : styles.link}>
          <Link href="/">
            <a>Domů</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/tipy' ? activeLinkClass : styles.link
          }
        >
          <Link href="/tipy">
            <a>Obecné tipy</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/mapa' ? activeLinkClass : styles.link
          }
        >
          <Link href="/mapa">
            <a>Mapa</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/vylety' ? activeLinkClass : styles.link
          }
        >
          <Link href="/vylety">
            <a>Výlety</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/galerie' ? activeLinkClass : styles.link
          }
        >
          <Link href="/galerie">
            <a>Galerie</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/onas' ? activeLinkClass : styles.link
          }
        >
          <Link href="/onas">
            <a>O nás</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
