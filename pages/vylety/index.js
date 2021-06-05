import { useState } from 'react';
import TripList from '../../components/TripList';
import { getAllTrips } from '../../data/trips';
import Difficulty from '../../components/Difficulty';
import Type from '../../components/Type';

const TripsPage = ({ trips }) => {
  const [filter, setFilter] = useState({
    difficulty: [],
    type: [],
    location: [],
  });

  console.log(filter);

  return (
    <div>
      <Difficulty
        value={filter.difficulty}
        onChange={(value) =>
          setFilter((filter) => ({ ...filter, difficulty: value }))
        }
      />
      <br />
      <Type
        value={filter.type}
        onChange={(value) =>
          setFilter((filter) => ({ ...filter, type: value }))
        }
      />

      <TripList
        trips={trips.filter((trip) => {
          if (filter.difficulty.length === 0 || filter.type.length === 0)
            return true;
          return filter.difficulty.includes(trip.difficulty) && filter.type.includes(trip.type);
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
