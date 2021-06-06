import Trip from '../Trip';
import styles from './TripList.module.css';

const TripList = ({ trips }) => {
  return (
    <>
      <ul className={styles.list}>
        {trips.map((trip) => (
          <Trip
            key={trip.id}
            id={trip.id}
            title={trip.title}
            about={trip.about}
            difficulty={trip.difficulty}
            type={trip.type}
            location={trip.location}
            distance={trip.distance}
          />
        ))}
      </ul>
    </>
  );
};

export default TripList;
