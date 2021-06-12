import Link from 'next/link';
import styles from './Menu.module.css';
import React from 'react';
import { useState } from 'react';

const Menu = () => {
  const [trida, setTrida] = useState('styles.link');

  const highlightPageTitle = () => {
    console.log('Kliknuto');
    setTrida('styles.link_active');
  };

  return (
    <div className={styles.nav_wrapper}>
      <ul className={styles.nav}>
        <li className={{ trida }} onClick={highlightPageTitle}>
          <Link href="/">
            <a> Domů</a>
          </Link>
        </li>
        <li className={{ trida }} onClick={highlightPageTitle}>
          <Link href="/tipy">
            <a>Obecné tipy</a>
          </Link>
        </li>
        <li className={{ trida }} onClick={highlightPageTitle}>
          <Link href="/mapa">
            <a>Mapa</a>
          </Link>
        </li>
        <li className={{ trida }} onClick={highlightPageTitle}>
          <Link href="/vylety">
            <a>Výlety</a>
          </Link>
        </li>
        <li className={{ trida }} onClick={highlightPageTitle}>
          <Link href="/galerie">
            <a>Galerie</a>
          </Link>
        </li>
        <li className={{ trida }} onClick={highlightPageTitle}>
          <Link href="/onas">
            <a>O nás</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
