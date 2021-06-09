import Image from 'next/image';
import { getAllTrips } from '../../data/trips';
import Gallery from 'react-photo-gallery';
import { photos } from '../../data/photosTrips/1/photos';

const trips = getAllTrips();

const Trip = ({ trip }) => {
  return (
    <>
      {/* <Image
        src={`/images/featuredImages/featured-${trip.id}.jpg`}
        width={1640}
        height={900}
        alt={trip.title}
      /> */}
      <a href="/vylety">
        <button> Zpět na seznam výletů </button>
      </a>
      <a href="/mapa">
        <button> Zpět na mapu výletů </button>
      </a>
      <div className="content_trips">
        <div className="short_info_trips">
          <h1 clssName="title_trips">{trip.title}</h1>
          <p>{trip.about}</p>
          <p>{trip.difficulty}</p>
          <p>{trip.type}</p>
          <p>{trip.location}</p>{' '}
        </div>
        <p>{trip.description}</p>
        <Gallery photos={photos} />
      </div>
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
