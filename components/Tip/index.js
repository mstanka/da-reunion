import Link from 'next/link';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import styles from './Tip.module.css';

const Tip = ({ title, phrase, id }) => {
  return (
    <li className={styles.tip}>
      <img
        src={'https://source.unsplash.com/collection/8761243/300x200'}
        alt={title}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.label}>
            <p>{phrase}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={'/tipy/[id]'} as={`/tipy/${id}`}>
            <a>
              <span>Explore tip</span>
              <span className={styles.icon}>
                <ArrowRightIcon />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Tip;
