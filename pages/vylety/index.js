import { useState } from 'react';
import TripList from '../../components/TripList';
import { getAllTripsForMap } from '../../data/trips';
import Difficulty from '../../components/Difficulty';
import Type from '../../components/Type';
import distance from 'haversine-distance';
import ArrowDownIcon from '../../components/icons/ArrowDownIcon';
import DifficultyIcon from '../../components/icons/DifficultyIcon';
import TypeIcon from '../../components/icons/TypeIcon';

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
    <div className="container">
      <div className="container-filter">
        <h1>Inspiruj se našimi výlety...</h1>
        <h2>Seřaď je podle své polohy</h2>
        <button onClick={() => handleClick()} className="btn">
          <span>Seřadit</span>
          <span className="icon">
            <ArrowDownIcon />
          </span>
        </button>
        <h3 className="center">nebo</h3>
        <h2>výlet vyfiltruj podle</h2>
        <div className="filters">
          <div>
            <h3>
              obtížnosti: <DifficultyIcon className="icon" />
            </h3>
            <Difficulty
              value={filter.difficulty}
              onChange={(value) =>
                setFilter((filter) => ({ ...filter, difficulty: value }))
              }
            />
          </div>
          <div>
            <h3>
              typu: <TypeIcon className="icon" />
            </h3>
            <Type
              value={filter.type}
              onChange={(value) =>
                setFilter((filter) => ({ ...filter, type: value }))
              }
            />
          </div>
        </div>
      </div>

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
