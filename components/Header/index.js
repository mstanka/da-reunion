import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a className="website-name">
            <div>Réunion... </div> <div>našima očima</div>
          </a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
