import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "./sign-in.css";
import "../Layouts/layout/layout.css";

import Email from "../../commons/util/email/email";
import Password from "../../commons/util/password/password";
import Layout from "../Layouts/layout/layout";

import Container from "../Layouts/container/container";

class SignIn extends Component {
  state = {
    emailValue: null,
    passwordValue: null,
    isError: {
      isEmailErr: false,
      isPasswordErr: false,
    },
    isSubmitted: false,
  };

  handleChange = (event) => {
    event.preventDefault();

    const emailValidation = new RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (
      !emailValidation.test(this.state.emailValue) ||
      this.state.emailValue === null
    ) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailErr: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailErr: false,
          },
        };
      });
    }

    //
    const passwordValidation = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})"
    );

    if (
      this.state.passwordValue === null ||
      this.state.passwordValue.length === 0 ||
      !passwordValidation.test(this.state.passwordValue)
    ) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordErr:
              "Password must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters",
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordErr: null,
          },
        };
      });
    }

    passwordValidation.test(this.state.passwordValue) &&
    emailValidation.test(this.state.emailValue)
      ? this.setState({ isSubmitted: true })
      : this.setState({ isSubmitted: false });
  };

  addEmail = (event) => {
    this.setState({
      emailValue: event.target.value,
    });

    if (event.target.value === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailErr: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailErr: false,
          },
        };
      });
    }
  };

  passwordValidation = (event) => {
    this.setState({
      passwordValue: event.target.value,
    });

    if (event.target.value === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordErr: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordErr: false,
          },
        };
      });
    }
  };

  render() {
    const link = (
      <Link to="/forgot-password" className="forgot-link">
        Forgot Your Password?
      </Link>
    );

    {
      if (this.state.isSubmitted) {
        return <Redirect from="/sign-in" to="/" />;
      } else {
        return (
          <Container title="Customer Login" className="sign-in">
            <Layout
              subtitle="Registered Customers"
              details="If you have an account, sign in with your email address."
              value="Sign In"
              handleChange={this.handleChange}
              link={link}
            >
              <Email
                addEmail={this.addEmail}
                isError={this.state.isError.isEmailErr}
              />
              <Password
                password={this.passwordValidation}
                isError={this.state.isError.isPasswordErr}
              />
            </Layout>

            <div className="info">
              <span className="subtitle">New Customers</span>
              <span className="details">
                Creating an account has many benefits: check out faster, keep
                more than one address, track orders and more.
              </span>
              <Link to="/create-new-account" className="new-account">
                Create an account
              </Link>
            </div>
          </Container>
        );
      }
    }
  }
}

export default SignIn;
