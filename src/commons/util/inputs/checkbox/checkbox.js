import React, { useState, useEffect, useCallback, Component } from "react";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../../../store/actions";
import "./checkbox.css";

const Checkbox = ({ type = "checkbox", name, id, value, valFn, key }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.isChecked);

  console.log(value);

  return (
    <li className="checkbox-item" key={key}>
      <input
        type={type}
        className="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() =>
          dispatch({
            type: actionTypes.CHECK_CHECKBOX,
          })
        }
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
