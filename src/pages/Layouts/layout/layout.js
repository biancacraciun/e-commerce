import React from "react";

import "./layout.css";
import Form from "../../../commons/util/components/forms/form/form";

const Layout = (props) => {
  return (
    <div className={props.className === "grid" ? "full-width info" : "info"}>
      <span className="subtitle" role="subtitle">
        {props.subtitle}
      </span>
      <span className="details">{props.details}</span>

      <Form handleChange={props.handleChange} buttonVal={props.buttonVal}>
        {props.children}
      </Form>
    </div>
  );
};

export default Layout;
