import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./storage.css";

const Storage = (props) => {
  // if the user is logged in
  return (
    <div className="storage">
      <p>You have no items in your {props.component}.</p>
      <Link to={props.path} className="see-details" type="button">
        See details
      </Link>
    </div>
  );
};

export default Storage;
