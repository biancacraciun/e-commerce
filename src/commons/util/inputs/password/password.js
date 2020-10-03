import React, { useState } from "react";
import Error from "../error/error";
import { Eye, EyeOff, Check } from "react-feather";
import "../inputs.css";

const Password = (props) => {
  const [inputType, changeInputType] = useState("password");

  return (
    <div className="form-section">
      <label htmlFor="password">
        {props.label}: <span className="is-required">*</span>
      </label>
      <div className="input">
        <input
          type={inputType}
          name="password"
          id={props.id}
          onChange={props.password}
        />
        <button
          type="button"
          onClick={() =>
            inputType === "password"
              ? changeInputType("text")
              : changeInputType("password")
          }
          className="see-password"
        >
          {inputType === "password" ? <EyeOff /> : <Eye />}
        </button>
      </div>
      {props.isError ? <Error /> : null}
      {props.isValid === false ? (
        <Error errorMessage="Passwords must be at least 7 characters in length, but can be much longer, must be a minimum of 1 lower case letter, a minimum of 1 upper case letter, a minimum of 1 numeric character and a minimum of 1 special character." />
      ) : null}
      {props.isConfirmation ? (
        <Error errorMessage="Please add the same value again." />
      ) : null}
    </div>
  );
};

Password.defaultProps = {
  label: "Password",
  id: "password",
  errorMessage: "This is a required field.",
  passwordErr: null,
  noConfirmation: null,
  isConfirmation: null,
  isValid: null,
};
export default Password;
