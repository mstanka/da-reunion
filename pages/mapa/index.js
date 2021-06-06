import MyMap from '../../components/MyMap';
import styles from '../../components/MyMap/MyMap.module.css';
import { getAllTripsForMap } from '../../data/trips';

const MapPage = () => {
  return (
    <div className={styles.container}>
      <MyMap trips={getAllTripsForMap()} />
    </div>
  );
};

export default MapPage;
