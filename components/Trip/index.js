// import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import DifficultyIcon from '../icons/DifficultyIcon';
import TypeIcon from '../icons/TypeIcon';
import LocationIcon from '../../components/icons/LocationIcon';
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
              <h2>{title}</h2>
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
