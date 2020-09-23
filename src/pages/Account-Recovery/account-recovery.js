import React, { Component } from "react";
import Container from "../Layouts/container/container";
import Layout from "../Layouts/layout/layout";
import Email from "../../commons/util/email/email";
import Check from "../../commons/util/check/check";
import { Redirect } from "react-router-dom";

class AccountRecovery extends Component {
  state = {
    email: null,
    isError: {
      isEmailError: null,
      isCaptchaError: null,
    },
    code: null,
    captcha: null,
    isSubmitted: false,
  };

  componentDidMount() {
    this.setState({
      captcha: this.createCaptcha(),
    });
  }

  handleChange = (event) => {
    const emailValidation = new RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (this.state.email === null || !emailValidation.test(this.state.email)) {
      this.setState((prevState) => {
        console.log(prevState);
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailError: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailError: false,
          },
        };
      });
    }

    if (this.state.code === null) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isCaptchaError: true,
          },
        };
      });
    }

    if (this.state.code === this.state.captcha) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isCaptchaError: false,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isCaptchaError: true,
          },
        };
      });
    }

    if (
      this.state.isError.isEmailError === false &&
      this.state.isError.isCaptchaError === false
    ) {
      this.setState({
        isSubmitted: true,
      });
    }
    event.preventDefault();
  };

  createCaptcha = () => {
    const random =
      "01234568789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-/?~";
    let captcha = [];

    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * random.length + 1);

      if (captcha.indexOf(random[index]) === -1) {
        captcha.push(random[index]);
      } else {
        i--;
      }
    }

    return captcha.join("");
  };

  codeHandle = (event) => {
    this.setState({
      code: event.target.value,
    });
  };

  addEmailAddres = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <Container title="Forgot Your Password?">
        {this.state.isSubmitted ? (
          <Redirect to="/change-password" />
        ) : (
          <Layout
            details="Please enter your email address below to receive a password reset link."
            handleChange={this.handleChange}
            value="Reset my password"
          >
            <Email
              addEmail={this.addEmailAddres}
              isError={this.state.isError.isEmailError}
            />
            <Check
              checkedHandler={this.codeHandle}
              isError={this.state.isError.isCaptchaError}
              captcha={this.state.captcha}
            />
          </Layout>
        )}
      </Container>
    );
  }
}

export default AccountRecovery;
