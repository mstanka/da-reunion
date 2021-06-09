import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.website_name}>
        <div>Réunion</div>
        <div>našima očima</div>
      </h1>
      <div className={styles.image}>
        <Link href="/">
          <Image
            src={'/images/uvodni.jpg'}
            width={1920}
            height={900}
            alt="Uvodní fotka"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
