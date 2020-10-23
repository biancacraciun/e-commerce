import React from "react";

import "./standard-form.css";
import StandardInput from "../../../inputs/standard-input/standard-input";

const StandardForm = (props) => {
  return (
    <div className="new-account-section">
      <p className="title">Personal Information</p>

      <StandardInput
        for="first-name"
        forText="First Name"
        dataHandler={props.firstNameHandler}
        isError={props.firstNameError}
      />

      <StandardInput
        for="last-name"
        forText="Last Name"
        dataHandler={props.lastNameHandler}
        isError={props.lastNameError}
      />

      <div className="inputs">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          value="newsletter"
          className="newsletter"
        />
        <label htmlFor="newsletter" className="sign-up-label">
          Sign Up for Newsletter
        </label>
      </div>
    </div>
  );
};

export default StandardForm;
