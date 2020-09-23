import React, { useState } from "react";
// import "../../../pages/Sign-In/sign-in.css";
import "../inputs.css";

const Password = (props) => {
  return (
    <div className="form-section">
      <label htmlFor="password">
        {props.label}: <span className="is-required">*</span>
      </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={props.password}
      />
      {props.isError ? (
        <span className="errors">
          Password must contain at least one number and one uppercase and
          lowercase letter, and at least 7 or more characters
        </span>
      ) : null}
    </div>
  );
};

Password.defaultProps = {
  label: "Password",
};
export default Password;
