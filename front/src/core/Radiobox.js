import React, { useState, useEffect } from "react";

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((product, index) => (
    <div key={index}>
      <input
        onChange={handleChange}
        value={`${product._id}`}
        name={product}
        type="radio"
        className="mr-2 ml-4"
      />
      <label className="form-check-label">{product.name}</label>
    </div>
  ));
};

export default RadioBox;
