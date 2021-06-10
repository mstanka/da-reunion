// import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import DifficultyIcon from '../icons/DifficultyIcon';
import TypeIcon from '../icons/TypeIcon';
import styles from './Trip.module.css';
import Image from 'next/image';

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
      <span className={styles.image}>
        <Image
          src={`/images/vylety/${id}/1.jpg`}
          width={300}
          height={200}
          alt={title}
        />
      </span>
      <div className="center">
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.about}>{about}</div>
          <div className={styles.label}>
            <DifficultyIcon />
            <span> {difficulty} </span>
            <TypeIcon />
            <span>{type}</span>
          </div>
        </div>
        <div>{location}</div>
        {distance && <div>Vzdálenost od vás: {distance} km</div>}
        <div className={styles.actions}>
          <Link href={'/vylety/[id]'} as={`/vylety/${id}`}>
            <a>
              <span>Poznej víc</span>
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
