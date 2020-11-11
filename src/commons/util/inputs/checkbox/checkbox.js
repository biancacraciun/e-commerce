import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductsContext, { ProductsProvider } from "../../context";
import "./checkbox.css";

const Checkbox = ({
  type = "checkbox",
  name,
  id,
  value,
  valFn,
  key,
  //   checkHandler,
}) => {
  const [isChecked, setChecked] = useState(false);
  const [val, setVal] = useState();

  // checkbox toggle
  const checkHandler = () => {
    setChecked(!isChecked);
    // pass checked value to categories.js
    valFn(val, isChecked);
  };

  useEffect(() => {
    // selected checkbox
    if (isChecked) {
      setVal(value);
    }
  });

  return (
    <li className="checkbox-item" key={key}>
      <input
        type={type}
        className="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => checkHandler()}
      />
      <label htmlFor={id}>{name}</label>
    </li>
  );
};

Checkbox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  checkHandler: PropTypes.func.isRequired,
  valFn: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Checkbox;
