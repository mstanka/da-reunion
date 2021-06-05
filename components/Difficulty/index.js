const Difficulty = ({ value, onChange }) => {
  const handleOnChange = (e) => {
    if (value.includes(e.target.value)) {
      onChange(value.filter((val) => val !== e.target.value));
    } else onChange(value.concat(e.target.value));
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          value="pohodička"
          onChange={handleOnChange}
          checked={value.includes('pohodička')}
        />
        pohodička
      </label>
      <label>
        <input
          type="checkbox"
          value="střední"
          onChange={handleOnChange}
          checked={value.includes('střední')}
        />
        střední
      </label>
      <label>
        <input
          type="checkbox"
          value="těžší"
          onChange={handleOnChange}
          checked={value.includes('těžší')}
        />
        těžší
      </label>
    </>
  );
};

export default Difficulty;
