import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./scroll-to-top.css";

const ScrollToTop = () => {
  return (
    <div className="scroll-to-top">
      <button type="button" id="scroll-to-top-button">
        <FontAwesomeIcon icon={faCaretUp} color="white" />
      </button>
    </div>
  );
};

export default ScrollToTop;
