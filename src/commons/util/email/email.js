import React from "react";
import "../inputs.css";

const Email = (props) => {
  return (
    <div className="form-section">
      <label htmlFor="email">
        Email: <span className="is-required">*</span>
      </label>
      <input type="email" name="email" id="email" onChange={props.addEmail} />
      {props.isError ? (
        <span className="errors">Invalid email address!</span>
      ) : null}
    </div>
  );
};

export default Email;
