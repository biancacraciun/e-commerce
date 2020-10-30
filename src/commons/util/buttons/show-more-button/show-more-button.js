import React from "react";
import { ArrowDown } from "react-feather";

import "./show-more-button.css";

const ShowMoreButton = (props) => (
  <button className="dropdown-button" onClick={() => props.collapse()}>
    <ArrowDown size={15} />
  </button>
);

export default ShowMoreButton;
