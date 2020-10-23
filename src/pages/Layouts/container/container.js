import React from "react";
import "./container.css";

const Container = (props) => {
  return (
    <div className="container">
      <p className="container-title" role="title">
        {props.title}
      </p>

      <div className="content">{props.children}</div>
    </div>
  );
};

export default Container;
