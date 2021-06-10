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

//  {
//    trips.map((trip) => {
//      for (let i = 1; i < trip.numberOfImages + 1; i++) {
//        return (
//          <Link
//            href={'/images/vylety/[id]/[i]'}
//            as={`/images/vylety/${trip.id}/${i}`}
//            key={`${trip.id}/${i}`}
//          >
//            <a>
//              <Image
//                src={`/images/vylety/${trip.id}/${i}.jpg`}
//                width={600}
//                height={400}
//                alt="title"
//              />
//            </a>
//          </Link>
//        );
//      }
//    });
//  }
