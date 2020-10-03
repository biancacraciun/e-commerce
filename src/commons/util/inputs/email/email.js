import React from "react";
import Error from "../error/error";

import "../inputs.css";

const Email = (props) => {
  return (
    <div className="form-section">
      <label htmlFor="email">
        Email: <span className="is-required">*</span>
      </label>
      <input type="email" name="email" id="email" onChange={props.addEmail} />
      {props.isError ? <Error errorMessage="Invalid email address!" /> : null}
      {props.isRequired ? <Error /> : null}
    </div>
  );
};

export default Email;
