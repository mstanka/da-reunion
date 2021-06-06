import Tip from '../Tip';
import styles from './TipList.module.css';

const TipList = ({ tips, count = tips.length }) => {
  return (
    <ul className={styles.list}>
      {tips.slice(0, count).map((tip) => (
        <Tip key={tip.id} id={tip.id} title={tip.title} phrase={tip.phrase} />
      ))}
    </ul>
  );
};

export default TipList;
