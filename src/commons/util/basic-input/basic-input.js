import React from "react";
import PropTypes from "prop-types";
import Error from "../error/error";

const BasicInput = (props) => {
  return (
    <div className="form-section">
      <label htmlFor={props.for}>
        {props.forText}: <span className="is-required">*</span>
      </label>
      <input
        type="text"
        id={props.for}
        name={props.for}
        onChange={props.dataHandler}
      />
      {props.isError ? (
        <Error errorMessage="This is a required field." />
      ) : null}
    </div>
  );
};

BasicInput.propTypes = {
  for: PropTypes.string,
  forText: PropTypes.string,
  dataHandler: PropTypes.func,
  isError: PropTypes.bool,
};

export default BasicInput;
