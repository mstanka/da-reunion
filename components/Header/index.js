import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a className={styles.website_name}>
            <div>Réunion </div> <div>našima očima</div>
            <div className={styles.image}>
              <Image
                src={'/images/uvodni.jpg'}
                width={1920}
                height={900}
                alt="Uvodní fotka"
              />
            </div>
          </a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
