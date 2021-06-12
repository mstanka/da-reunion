import Link from 'next/link';
import styles from './Menu.module.css';
import React from 'react';

const Menu = () => {
  const clickOnMenu = () => {
    console.log('Kliknuto');
  };

  return (
    <div className={styles.nav_wrapper}>
      <ul className={styles.nav}>
        <li
          className={clickOnMenu ? styles.link : styles.link_active}
          onClick={clickOnMenu}
        >
          <Link href="/">
            <a> Domů</a>
          </Link>
        </li>
        <li
          className={clickOnMenu ? styles.link : styles.link_active}
          onClick={clickOnMenu}
        >
          <Link href="/tipy">
            <a>Obecné tipy</a>
          </Link>
        </li>
        <li
          className={clickOnMenu ? styles.link : styles.link_active}
          onClick={clickOnMenu}
        >
          <Link href="/mapa">
            <a>Mapa</a>
          </Link>
        </li>
        <li
          className={clickOnMenu ? styles.link : styles.link_active}
          onClick={clickOnMenu}
        >
          <Link href="/vylety">
            <a>Výlety</a>
          </Link>
        </li>
        <li
          className={clickOnMenu ? styles.link : styles.link_active}
          onClick={clickOnMenu}
        >
          <Link href="/galerie">
            <a>Galerie</a>
          </Link>
        </li>
        <li
          className={clickOnMenu ? styles.link : styles.link_active}
          onClick={clickOnMenu}
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
