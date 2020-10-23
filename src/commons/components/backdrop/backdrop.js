import React from "react";
import "./backdrop.css";

const Backdrop = (props) => (
  <div className="backdrop" onClick={props.closeBackdrop} />
);

export default Backdrop;
