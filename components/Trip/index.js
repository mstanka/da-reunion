import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import styles from './Trip.module.css';

const Trip = ({ title, about, difficulty, type, location, id }) => {
  return (
    <li className={styles.trip}>
      <Image
        src={`/images/${id}.jpg`}
        alt={title}
        width={500}
        height={400}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.label}>
            <p>
              {difficulty} | {type}
            </p>
          </div>
          <div className={styles.about}>
            <p>{about}</p>
          </div>
        </div>
        <div>
          <p>{location}</p>
        </div>
        <div className={styles.actions}>
          <Link href={'/vylety/[id]'} as={`/vylety/${id}`}>
            <a>
              <span>Explore Trip</span>
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

export default Trip;
