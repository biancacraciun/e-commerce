import React from "react";
import { AlertTriangle } from "react-feather";

import "./alert.css";

const Alert = (props) => {
  return (
    <div className="message-info">
      <AlertTriangle color="orange" size={25} className="alert-icon" />
      <p className="order-alert">{props.alertMessage}</p>
    </div>
  );
};

Alert.defaultProps = {
  alertMessage: "You have place no orders.",
};

export default Alert;
