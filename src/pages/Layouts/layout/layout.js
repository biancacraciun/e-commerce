import React from "react";
import "./layout.css";

const Layout = (props) => {
  return (
    <div className={props.className === "grid" ? "info full-width" : "info"}>
      <span className="subtitle" role="title">
        {props.subtitle}
      </span>
      <span className="details">{props.details}</span>

      <form
        className={`register-form ${props.className}`}
        onSubmit={props.handleChange}
      >
        {props.children}

        <div className="bottom">
          <input
            type="submit"
            role="button"
            value={props.value}
            className="submit-button"
          />
          {props.link}
        </div>
      </form>

      <span className="is-required">* Required Fields</span>
    </div>
  );
};

Layout.defaultProps = {
  subtitle: null,
  details: null,
  link: null,
  className: null,
};
export default Layout;
