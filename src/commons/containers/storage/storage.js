import React from "react";

import "./storage.css";

const Storage = (props) => {
  return (
    <div className="storage" onMouseLeave={() => props.closeStorage()}>
      <p>You have no items in your {props.component}.</p>
      <button className="see-details" type="button">
        See details
      </button>
    </div>
  );
};

export default Storage;
