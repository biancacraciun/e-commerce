import React, { useState } from "react";

const Check = (props) => {
  return (
    <div className="form-section">
      <label htmlFor="check">
        Please type the letters and numbers below:{" "}
        <span className="is-required">*</span>
      </label>
      <input
        type="text"
        name="check"
        id="check"
        onChange={props.checkedHandler}
      />
      {props.isError ? (
        <span className="errors">This is a required field.</span>
      ) : null}

      <div className="captcha">{props.captcha}</div>
    </div>
  );
};

export default Check;
