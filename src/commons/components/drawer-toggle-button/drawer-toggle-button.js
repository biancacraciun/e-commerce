import React from "react";
import "./drawer-toggle-button.css";

const DrawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.openMenu}>
      <div className={`toggle-button__line ${props.className}`} />
      <div className={`toggle-button__line ${props.className}`} />
      <div className={`toggle-button__line ${props.className}`} />
    </button>
  );
};

export default DrawerToggleButton;
