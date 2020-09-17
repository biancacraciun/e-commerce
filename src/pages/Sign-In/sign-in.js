import React, { Component } from "react";
import { Redirect } from "react-router";
import "./sign-in.css";

class SignIn extends Component {
  state = {
    emailValue: null,
    passwordValue: null,
    error: {
      emailErr: null,
      passwordErr: null,
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
          error: {
            ...prevState,
            emailErr: "Invalid email address!",
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          error: {
            ...prevState.error,
            emailErr: null,
          },
        };
      });
    }

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
          error: {
            ...prevState.error,
            passwordErr:
              "Password must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters",
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          error: {
            ...prevState.error,
            passwordErr: null,
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
  };

  passwordValidation = (event) => {
    this.setState({
      passwordValue: event.target.value,
    });
  };

  render() {
    {
      if (this.state.isSubmitted) {
        return <Redirect from="/sign-in" to="/" />;
      } else {
        return (
          <div className="sign-in">
            <p className="sign-in-header">Customer Login</p>

            <div className="register-container">
              <div className="registered-customers-container">
                <span className="registered-customers">
                  Registered Customers
                </span>
                <span className="registered-details">
                  If you have an account, sign in with your email address.
                </span>

                <form className="register-form" onSubmit={this.handleChange}>
                  <div className="form-section">
                    <label htmlFor="email">
                      Email: <span className="is-required">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.addEmail}
                    />
                    <span className="errors">{this.state.error.emailErr}</span>
                  </div>

                  <div className="form-section">
                    <label htmlFor="password">
                      Password: <span className="is-required">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.passwordValidation}
                    />
                    <span className="errors">
                      {this.state.error.passwordErr}
                    </span>
                  </div>

                  <input
                    type="submit"
                    role="button"
                    value="Sign In"
                    className="submit-button"
                  />
                </form>

                <span className="is-required">* Required Fields</span>
              </div>

              <div className="new-account">
                <span className="new-customers">New Customers</span>
                <span className="new-customers-details">
                  Creating an account has many benefits: check out faster, keep
                  more than one address, track orders and more.
                </span>
                <button type="button" className="account-button">
                  Create an account
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default SignIn;
