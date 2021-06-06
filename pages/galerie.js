import Gallery from 'react-photo-gallery';
import { photos } from '../data/photos';

const Galerie = () => {
  return (
    <div className="container">
      <Gallery photos={photos} />
    </div>
  );
};

export default Galerie;
