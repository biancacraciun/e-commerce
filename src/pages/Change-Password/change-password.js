import React from "react";
import Container from "../Layouts/container/container";

import "./change-password.css";

const ChangePassword = () => {
  return (
    <div className="change-password">
      <h1 className="title ">Verify your email address!</h1>
      <p className="content">
        Just check your email and follow the link to finish change your
        password.
      </p>
    </div>
  );
};

export default ChangePassword;
