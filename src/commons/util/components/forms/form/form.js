import React from "react";

import SubmitButton from "../../../inputs/submit-button/submit-button";
import "./form.css";

const Form = (props) => {
  return (
    <form
      className={`register-form ${props.className}`}
      onSubmit={props.handleChange}
    >
      {props.children}

      <div className="bottom">
        <SubmitButton value={props.buttonVal} />

        {props.link}
      </div>

      <span className="is-required">* Required Fields</span>
    </form>
  );
};

export default Form;
