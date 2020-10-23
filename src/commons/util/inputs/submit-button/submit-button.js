import React from "react";

import "./submit-button.css";

const SubmitButton = (props) => {
  return (
    <input
      type="submit"
      role="button"
      value={props.value}
      className="submit-button"
    />
  );
};

SubmitButton.defaultProps = {
  value: "SUBMIT",
};

export default SubmitButton;
