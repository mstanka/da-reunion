// import Image from 'next/image';
import Link from 'next/link';
import { getAllTrips } from '../../data/trips';
import GalleryImage from '../../components/GalleryImage';
import DifficultyIcon from '../../components/icons/DifficultyIcon';
import TypeIcon from '../../components/icons/TypeIcon';
import LocationIcon from '../../components/icons/LocationIcon';

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

      <div className="content_trips">
        <div className="btns_wrapper">
          <Link href="/vylety">
            <button className="btn_back">
              <p>Zpět na seznam výletů</p>{' '}
            </button>
          </Link>
          <Link href="/mapa">
            <button className="btn_back">
              <p>Zpět na mapu výletů</p>{' '}
            </button>
          </Link>
        </div>
        <div className="short_info_trips">
          <h1 className="title_trips">{trip.title}</h1>
          <p>{trip.about}</p>
          <div className="icons_wrapper">
            <DifficultyIcon />
            <span>{trip.difficulty}</span>
            <TypeIcon />
            <span>{trip.type}</span>
            <LocationIcon className="icon" />
            <span>{trip.location}</span>
          </div>
        </div>
        <p className="description">{trip.description}</p>
        <GalleryImage
          title={null}
          id={trip.id}
          numberOfImages={trip.numberOfImages}
        />
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
