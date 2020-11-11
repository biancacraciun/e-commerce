import React from "react";
import { ArrowDown } from "react-feather";

import "./arrow-button.css";

const ArrowButton = (props) => (
  <button className="dropdown-button" onClick={() => props.collapse()}>
    <ArrowDown size={15} />
  </button>
);

export default ArrowButton;
