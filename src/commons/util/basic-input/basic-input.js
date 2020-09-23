import React from "react";

const BasicInput = (props) => {
  return (
    <div className="form-section">
      <label htmlFor={props.for}>
        {props.forText}
        <span className="is-required">*</span>
      </label>
      <input type="text" id={props.for} name={props.for} />
    </div>
  );
};

export default BasicInput;
