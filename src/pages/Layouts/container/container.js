import React from "react";
import "./container.css";

const Container = (props) => {
  return (
    <div className="container">
      <p className="container-title">{props.title}</p>

      <div className="content">{props.children}</div>
    </div>
  );
};

Container.defaultProps = {
  title: null,
  children: null,
};
export default Container;
