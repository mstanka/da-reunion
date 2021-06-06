import MyMap from '../../components/MyMap';
import styles from '../../components/MyMap/MyMap.module.css';

const MapPage = () => {
  return (
    <div className={styles.container}>
      <MyMap />
    </div>
  );
};

export default MapPage;
