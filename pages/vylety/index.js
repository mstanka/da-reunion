import Menu from '../../components/Menu';
import TripList from '../../components/TripList';
import { getAllTrips } from '../../data/trips';

const TripsPage = ({ trips }) => {
  return (
    <div>
      <Menu />
      <TripList trips={trips} />
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
