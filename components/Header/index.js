import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="link_to_homepage">
      <Link href="/">
        <header className={styles.header}>
          <h1 className={styles.website_name}>
            <div>Réunion</div>
            <div>našima očima</div>
          </h1>
          <div className={styles.image}>
            <Image
              src={'/images/uvodni.jpg'}
              width={1920}
              height={900}
              alt="Uvodní fotka"
            />
          </div>
        </header>
      </Link>
    </div>
  );
};

export default Header;
