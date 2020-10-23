import React from "react";

import "./auth-page.css";
import Alert from "../alerts/alert";

const AuthPage = (props) => {
  return (
    <div className="auth-page">
      <Alert alertMessage={props.alertMessage} />
    </div>
  );
};

AuthPage.defaultProps = {
  alertMessage: null,
};
export default AuthPage;
