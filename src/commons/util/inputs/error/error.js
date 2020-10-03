import React from "react";
import "./error.css";

const Error = (props) => {
  return <span className="errors">{props.errorMessage}</span>;
};

Error.defaultProps = {
  errorMessage: "This is a required field.",
  message: null,
};
export default Error;
