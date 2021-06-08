import Image from 'next/image';
import { getAllTrips } from '../../data/trips';

const trips = getAllTrips();

const Trip = ({ trip }) => {
  return (
    <>
      <Image
        src={`/images/featuredImages/featured-${trip.id}.jpg`}
        width={1640}
        height={900}
        alt={trip.title}
      />
      <h1>{trip.title}</h1>
      <p>{trip.about}</p>
      <p>{trip.description}</p>
    </>
  );
};

export const getStaticPaths = () => {
  const tripPaths = trips.map((trip) => {
    return {
      params: {
        id: trip.id,
      },
    };
  });

  return {
    paths: tripPaths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  return {
    props: {
      trip: trips.find((trip) => trip.id === params.id),
    },
  };
};
export default Trip;
