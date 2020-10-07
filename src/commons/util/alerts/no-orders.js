import React from "react";
import { AlertTriangle } from "react-feather";

import "./no-orders.css";

const NoOrders = () => {
  return (
    <div className="message-info">
      <AlertTriangle color="orange" size={25} className="alert-icon" />
      <p className="order-alert">You have place no orders.</p>
    </div>
  );
};

export default NoOrders;
