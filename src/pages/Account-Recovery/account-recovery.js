import React, { Component } from "react";
import Container from "../Layouts/container/container";
import Layout from "../Layouts/layout/layout";
import Email from "../../commons/util/inputs/email/email";
import Captcha from "../../commons/util/inputs/captcha/captcha";
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
    isRequired: null,
    isValid: null,
    isValidCaptcha: null,
    isSubmitted: false,
  };

  componentDidMount() {
    this.setState({
      captcha: this.createCaptcha(),
    });
  }

  handleChange = (event) => {
    event.preventDefault();
    const emailValidation = new RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (this.state.email === null || this.state.email === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isRequired: true,
          isError: {
            ...prevState.isError,
            isEmailError: false,
          },
          isSubmitted: false,
        };
      });
    }

    if (!emailValidation.test(this.state.email)) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailError: true,
          },
          isSubmitted: false,
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

    if (this.state.code === null || this.state.code === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isCaptchaError: true,
          },
          isSubmitted: false,
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
          isValidCaptcha: true,
        };
      });
    } else {
      this.setState({
        isValidCaptcha: false,
        isSubmitted: false,
      });
    }

    if (
      this.state.email !== "" &&
      this.state.code !== "" &&
      this.state.captcha === this.state.code &&
      emailValidation.test(this.state.email)
    ) {
      this.setState({
        isSubmitted: true,
      });
    }
  };

  createCaptcha = () => {
    const random =
      "01234568789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-/?~";
    let captcha = [];

    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * random.length + 1);
      if (captcha.indexOf(random[index]) === -1) {
        captcha.push(random[index]);
      }
    }

    return captcha.join("");
  };

  codeHandle = (event) => {
    this.setState({
      code: event.target.value,
    });

    if (event.target.value !== "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isCaptchaError: false,
          },
          isValidCaptcha: true,
        };
      });
    }
  };

  addEmailAddres = (event) => {
    this.setState({
      email: event.target.value,
    });

    if (event.target.value !== "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailError: false,
          },
          isRequired: false,
        };
      });
    }
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
              isRequired={this.state.isRequired}
            />
            <Captcha
              checkedHandler={this.codeHandle}
              isError={this.state.isError.isCaptchaError}
              captcha={this.state.captcha}
              isValidCaptcha={this.state.isValidCaptcha}
            />
          </Layout>
        )}
      </Container>
    );
  }
}

export default AccountRecovery;
