import React from "react";
import NoOrders from "../../commons/util/alerts/no-orders";

import "./orders.css";

const Orders = (props) => {
  return <div className="order">{props.message}</div>;
};

Orders.defaultProps = {
  message: <NoOrders />,
};

export default Orders;
