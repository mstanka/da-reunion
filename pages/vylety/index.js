import { useState } from 'react';
import TripList from '../../components/TripList';
import { getAllTrips } from '../../data/trips';
import Difficulty from '../../components/Difficulty';

const TripsPage = ({ trips }) => {
  const [filter, setFilter] = useState({
    difficulty: [],
    type: ['jezero', 'pláž'],
    location: ['jih', 'východ'],
  });

  return (
    <div>
      <Difficulty
        value={filter.difficulty}
        onChange={(value) =>
          setFilter((filter) => ({ ...filter, difficulty: value }))
        }
      />
      <TripList
        trips={trips.filter((trip) => {
          if (filter.difficulty.length === 0) return true;
          return filter.difficulty.includes(trip.difficulty);
        })}
      />
    </div>
  );
};

export default TripsPage;

export const getStaticProps = () => {
  return {
    props: {
      trips: getAllTrips(),
    },
  };
};
