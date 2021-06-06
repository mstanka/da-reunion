import { useState } from 'react';
import TripList from '../../components/TripList';
import { getAllTripsForMap } from '../../data/trips';
import Difficulty from '../../components/Difficulty';
import Type from '../../components/Type';
import distance from 'haversine-distance';

const findMyPosition = () =>
  new Promise((resolve, reject) => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      resolve({ latitude, longitude });
    };

    const error = () => {
      reject();
    };

    if (!navigator?.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('locating');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });

const TripsPage = ({ trips }) => {
  const [filter, setFilter] = useState({
    difficulty: [],
    type: [],
    location: [],
  });

  const [userPosition, setUserPosition] = useState();
  const [userTrips, setUserTrips] = useState(trips);

  const handleClick = () => {
    findMyPosition().then((pos) => {
      setUserPosition(pos);

      setUserTrips(
        userTrips
          .map((trip) => ({
            ...trip,
            distance: (
              distance(pos, {
                lat: trip.lat,
                lon: trip.long,
              }) / 1000
            ).toFixed(1),
          }))
          .sort((a, b) => a.distance - b.distance),
      );
    });
  };

  const filteredTrips = userTrips
    .filter((trip) => {
      if (filter.difficulty.length === 0) return true;
      return filter.difficulty.includes(trip.difficulty);
    })
    .filter((trip) => {
      if (filter.type.length === 0) return true;
      return filter.type.includes(trip.type);
    });

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
      <br />
      <button onClick={() => handleClick()}>Najdi nejbližší výlet</button>

      {filteredTrips.length === 0 ? (
        <h3>Zadaným filtrům neodpovídá žádný výlet.</h3>
      ) : (
        <TripList trips={filteredTrips} />
      )}
    </div>
  );
};

export default TripsPage;

export const getStaticProps = () => {
  return {
    props: {
      trips: getAllTripsForMap(),
    },
  };
};
