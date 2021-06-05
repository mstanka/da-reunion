import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a>Reunion... našima očima</a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
