import { SRLWrapper } from 'simple-react-lightbox';
import GalleryImage from '../GalleryImage';
import styles from './GalleryImageList.module.css';

const GalleryImageList = ({ trips }) => {
  return (
    <div className={styles.wrapper}>
      <SRLWrapper>
        {trips.map((trip) => {
          return (
            <GalleryImage
              key={trip.id}
              id={trip.id}
              title={trip.title}
              numberOfImages={trip.numberOfImages}
            />
          );
        })}
      </SRLWrapper>
    </div>
  );
};

export default GalleryImageList;
