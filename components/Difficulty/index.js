<<<<<<< Updated upstream
import styles from './Difficulty.module.css';
=======
import styles from './Difficulty.module.css'
>>>>>>> Stashed changes

const Difficulty = ({ value, onChange }) => {
  const handleOnChange = (e) => {
    if (value.includes(e.target.value)) {
      onChange(value.filter((val) => val !== e.target.value));
    } else onChange(value.concat(e.target.value));
  };

  return (
    <div className={styles.type}>
      <label>
        <input
          type="checkbox"
          value="pohodička"
          onChange={handleOnChange}
          checked={value.includes('pohodička')}
        />
        <span className={styles.text}>pohodička</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="střední"
          onChange={handleOnChange}
          checked={value.includes('střední')}
        />
        <span className={styles.text}>střední</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="těžší"
          onChange={handleOnChange}
          checked={value.includes('těžší')}
        />
        <span className={styles.text}>těžší</span>
      </label>
    </div>
  );
};

export default Difficulty;
