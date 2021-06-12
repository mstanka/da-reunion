import styles from './Type.module.css';

const Type = ({ value, onChange }) => {
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
          value="hory"
          onChange={handleOnChange}
          checked={value.includes('hory')}
        />
        <span className={styles.text}>hory</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="vodopád"
          onChange={handleOnChange}
          checked={value.includes('vodopád')}
        />

        <span className={styles.text}>vodopád</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="pláž"
          onChange={handleOnChange}
          checked={value.includes('pláž')}
        />
        <span className={styles.text}>pláž</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="jezero"
          onChange={handleOnChange}
          checked={value.includes('jezero')}
        />
        <span className={styles.text}>jezero</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="město"
          onChange={handleOnChange}
          checked={value.includes('město')}
        />
        <span className={styles.text}>město</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="útesy"
          onChange={handleOnChange}
          checked={value.includes('útesy')}
        />
        <span className={styles.text}>útesy</span>
      </label>
    </div>
  );
};

export default Type;
