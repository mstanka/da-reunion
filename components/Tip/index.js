import Link from 'next/link';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import styles from './Tip.module.css';
import Image from 'next/image';

const Tip = ({ title, phrase, id }) => {
  return (
    <div className={styles.actions}>
      <Link href={'/tipy/[id]'} as={`/tipy/${id}`}>
        <a>
          <li className={styles.tip}>
            <Image
              src={`/images/tipy/${id}.jpg`}
              width={300}
              height={200}
              alt={title}
            />
            <div className={styles.content}>
              <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.label}>
                  <p>{phrase}</p>
                </div>
              </div>
            </div>
          </li>
        </a>
      </Link>
    </div>
  );
};

export default Tip;
