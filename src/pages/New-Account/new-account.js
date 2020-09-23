import React, { Component } from "react";
import Container from "../Layouts/container/container";
import Layout from "../Layouts/layout/layout";
import Email from "../../commons/util/email/email";
import Password from "../../commons/util/password/password";
import BasicInput from "../../commons/util/basic-input/basic-input";

import "./new-account.css";

class NewAccount extends Component {
  render() {
    return (
      <Container title="Create New Customer Account">
        <Layout value="Create an Account" className="grid">
          <div className="personal-information">
            <p className="title">Personal Information</p>
            <BasicInput for="first-name" forText="First Name" />
            <BasicInput for="last-name" forText="Last Name" />
            <div className="inputs">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                value="Newsletter"
                className="newsletter"
              />
              <label htmlFor="newsletter" className="sign-up-label">
                Sign Up for Newsletter
              </label>
            </div>
          </div>
          <div className="sign-in-information">
            <p className="title">Sign-in Information</p>
            <Email />
            <Password />
            <Password label="Confirm Password" />
          </div>
        </Layout>
      </Container>
    );
  }
}

export default NewAccount;
