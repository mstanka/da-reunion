import Link from 'next/link';
import styles from './Menu.module.css';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();
  // const trida = 'styles.link';

  // const highlightPageTitle = () => {
  //   console.log('Kliknuto');
  //   trida = 'styles.link_active';
  // };

  return (
    <div className={styles.nav_wrapper}>
      <ul className={styles.nav}>
        <li
          className={
            router.pathname == '/' ? 'styles.link_active' : 'styles.link'
          }
        >
          {/* <li className={trida} onClick={highlightPageTitle}> */}
          <Link href="/">
            <a> Domů</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/tipy' ? 'styles.link_active' : 'styles.link'
          }
        >
          <Link href="/tipy">
            <a>Obecné tipy</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/mapa' ? 'styles.link_active' : 'styles.link'
          }
        >
          <Link href="/mapa">
            <a>Mapa</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/vylety' ? 'styles.link_active' : 'styles.link'
          }
        >
          <Link href="/vylety">
            <a>Výlety</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/galerie'
              ? 'styles.link_active'
              : 'styles.link'
          }
        >
          <Link href="/galerie">
            <a>Galerie</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/onas' ? 'styles.link_active' : 'styles.link'
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
