const Type = ({ value, onChange }) => {
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
          value="hory"
          onChange={handleOnChange}
          checked={value.includes('hory')}
        />
        hory
      </label>
      <label>
        <input
          type="checkbox"
          value="vodopád"
          onChange={handleOnChange}
          checked={value.includes('vodopád')}
        />
        vodopád
      </label>
      <label>
        <input
          type="checkbox"
          value="pláž"
          onChange={handleOnChange}
          checked={value.includes('pláž')}
        />
        pláž
      </label>
      <label>
        <input
          type="checkbox"
          value="jezera"
          onChange={handleOnChange}
          checked={value.includes('jezera')}
        />
        jezero
      </label>
      <label>
        <input
          type="checkbox"
          value="město"
          onChange={handleOnChange}
          checked={value.includes('město')}
        />
        město
      </label>
      <label>
        <input
          type="checkbox"
          value="útesy"
          onChange={handleOnChange}
          checked={value.includes('útesy')}
        />
        útesy
      </label>
    </>
  );
};

export default Type;
