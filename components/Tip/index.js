import Link from 'next/link';
import styles from './Tip.module.css';
import Image from 'next/image';
// import {useState} from 'react';

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
              </div>
              <div className={styles.label}>
                <p>{phrase}</p>
              </div>
            </div>
          </li>
        </a>
      </Link>
    </div>
  );
};

export default Tip;
