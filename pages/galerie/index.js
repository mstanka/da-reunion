import { SRLWrapper } from 'simple-react-lightbox';
import GalleryImageList from '../../components/GalleryImageList';
import { getAllTrips } from '../../data/trips';

const GalleryPage = ({ trips }) => {
  return (
    <div className="container">
      <SRLWrapper>
        <GalleryImageList trips={trips} />
      </SRLWrapper>
    </div>
  );
};

export default GalleryPage;

export const getStaticProps = () => {
  return {
    props: {
      trips: getAllTrips(),
    },
  };
};
