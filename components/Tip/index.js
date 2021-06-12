import Link from 'next/link';
import styles from './Tip.module.css';
import Image from 'next/image';

const Tip = ({ title, phrase, id }) => {
  return (
    <li className={styles.actions}>
      <Link href={'/tipy/[id]'} as={`/tipy/${id}`}>
        <a>
          <div className={styles.tip}>
            <Image
              src={`/images/tipy/${id}.jpg`}
              width={384}
              height={250}
              alt={title}
            />
            <div className={styles.content}>
              <div className={styles.summary}>
                <h2>{title}</h2>
              </div>
              <div className={styles.label}>
                <p>{phrase}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Tip;
