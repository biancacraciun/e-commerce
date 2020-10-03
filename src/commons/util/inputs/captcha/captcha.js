import React from "react";

import Error from "../error/error";

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
      {props.isError ? <Error /> : null}
      {props.isValidCaptcha === false ? (
        <Error errorMessage="Invalid captcha. Please try again!" />
      ) : null}

      <div className="captcha">{props.captcha}</div>
    </div>
  );
};

export default Check;
