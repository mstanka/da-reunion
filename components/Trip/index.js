import Link from 'next/link';
import Image from 'next/image';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import DifficultyIcon from '../icons/DifficultyIcon';
import TypeIcon from '../icons/TypeIcon';
import LocationIcon from '../../components/icons/LocationIcon';
import styles from './Trip.module.css';

const Trip = ({ title, about, difficulty, type, location, id, distance }) => {
  return (
    <li className={styles.trip}>
      <Link href={'/vylety/[id]'} as={`/vylety/${id}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={`/images/vylety/${id}/1.jpg`}
              width={384}
              height={250}
              alt={title}
            />
          </div>
          <div className="center">
            <div className={styles.summary}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.about}>{about}</div>
              <div className={styles.label}>
                <DifficultyIcon />
                <span> {difficulty} </span>
                <TypeIcon />
                <span>{type}</span>
              </div>
            </div>
            <LocationIcon />
            <span>{location}</span>
            {distance && <div>Vzdálenost od vás: {distance} km</div>}
            <div className={styles.actions}>
              <span>Poznej víc</span>
              <span className={styles.icon}>
                <ArrowRightIcon />
              </span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Trip;
