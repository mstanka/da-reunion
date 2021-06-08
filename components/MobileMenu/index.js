import Link from 'next/link';
import { useState } from 'react';
import HamburgerOpenedIcon from '../icons/HamburgerOpenedIcon';
import HamburgerClosedIcon from '../icons/HamburgerClosedIcon';
import styles from './MobileMenu.module.css';

const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <div className={styles.nav_wrapper}>
      <button onClick={handleMenu} className={styles.hamburger}>
        {menuOpened ? <HamburgerOpenedIcon /> : <HamburgerClosedIcon />}
      </button>

      <ul className={menuOpened ? styles.nav : styles.closed}>
        <li className={menuOpened ? styles.link : styles.closed}>
          <Link href="/">
            <a className={!menuOpened ? styles.closed : ' '}>Domů</a>
          </Link>
        </li>
        <li className={menuOpened ? styles.link : styles.closed}>
          <Link href="/mapa">
            <a className={!menuOpened ? styles.closed : ' '}>Mapa</a>
          </Link>
        </li>
        <li className={menuOpened ? styles.link : styles.closed}>
          <Link href="/vylety">
            <a className={!menuOpened ? styles.closed : ' '}>Výlety</a>
          </Link>
        </li>
        <li className={menuOpened ? styles.link : styles.closed}>
          <Link href="/galerie">
            <a className={!menuOpened ? styles.closed : ' '}>Galerie</a>
          </Link>
        </li>
        <li className={menuOpened ? styles.link : styles.link.closed}>
          <Link href="/onas">
            <a className={!menuOpened ? styles.closed : ' '}>O nás</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
