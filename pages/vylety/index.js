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
      <h1>Vyfiltruj si výlet</h1>
      <h2>Obtížnost:</h2>
      <Difficulty
        value={filter.difficulty}
        onChange={(value) =>
          setFilter((filter) => ({ ...filter, difficulty: value }))
        }
      />

      <h2>Typ:</h2>
      <Type
        value={filter.type}
        onChange={(value) =>
          setFilter((filter) => ({ ...filter, type: value }))
        }
      />

      <TripList
        trips={trips
          .filter((trip) => {
            if (filter.difficulty.length === 0) return true;
            return filter.difficulty.includes(trip.difficulty);
          })
          .filter((trip) => {
            if (filter.type.length === 0) return true;
            return filter.type.includes(trip.type);
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
