// import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import styles from './Trip.module.css';

const Trip = ({ title, about, difficulty, type, location, id, distance }) => {
  // src={`/images/${id}.jpg`}

  // <Image
  //   src={'https://source.unsplash.com/collection/8761243/500x400'}
  //   alt={title}
  //   width={500}
  //   height={400}
  //   className={styles.image}
  // />;

  return (
    <li className={styles.trip}>
      <img
        src={'https://source.unsplash.com/collection/8761243/300x200'}
        alt={title}
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
        {distance && (
          <div>
            <p>Vzdálenost od vás: {distance} km</p>
          </div>
        )}
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
