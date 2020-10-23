import React from "react";
import { ArrowDown } from "react-feather";

import "./dropdown-button.css";

const DropdownButton = (props) => (
  <button className="dropdown-button" onClick={() => props.collapse()}>
    <ArrowDown size={15} />
  </button>
);

export default DropdownButton;
