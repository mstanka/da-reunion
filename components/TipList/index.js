import Tip from '../Tip';
import styles from './TipList.module.css';

const TipList = ({ tips }) => {
  return (
    <ul className={styles.list}>
      {tips.map((tip) => (
        <Tip key={tip.id} id={tip.id} title={tip.title} phrase={tip.phrase} />
      ))}
    </ul>
  );
};

export default TipList;
