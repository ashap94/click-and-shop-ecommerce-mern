import React, { useState, useEffect, Fragment } from "react";

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    handleFilters(e.target.value);
    setValue(e.target.value);
  };

  return prices.map((p, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        value={`${p._id}`}
        className="ml-2 mr-2"
        type="radio"
        name={p}
      />
      <label class="form-check-label">{p.name}</label>
    </div>
  ));
};

export default RadioBox;
