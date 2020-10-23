import React, { Component } from "react";

import Container from "../Layouts/container/container";
import Layout from "../Layouts/layout/layout";
import Email from "../../commons/util/inputs/email/email";
import Password from "../../commons/util/inputs/password/password";
import StandardForm from "../../commons/util/components/forms/standard-form/standard-form";

class NewAccount extends Component {
  state = {
    isEmpty: {
      isFirstNameEmpty: true,
      isLastNameEmpty: true,
    },
    isError: {
      isFirstNameError: false,
      isLastNameError: false,
      isEmailError: false,
      isPasswordError: false,
      isConfirmationError: false,
    },
    email: null,
    password: null,
    confirmPassword: null,
    isValid: null,
    isConfirmed: false,
  };

  createNewAccount = (event) => {
    event.preventDefault();

    const emailValidation = new RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (this.state.email === null || !emailValidation.test(this.state.email)) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isEmailError: true,
          },
        };
      });
    }

    if (this.state.isEmpty.isFirstNameEmpty) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isFirstNameError: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isFirstNameError: false,
          },
        };
      });
    }

    if (this.state.isEmpty.isLastNameEmpty) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isLastNameError: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isLastNameError: false,
          },
        };
      });
    }

    if (this.state.password === null || this.state.password === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordError: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordError: false,
          },
        };
      });
    }

    const passwordValidation = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})"
    );

    if (!passwordValidation.test(this.state.password)) {
      this.setState({
        isValid: false,
      });
    } else {
      this.setState({
        isValid: true,
      });
    }

    this.passwordComparison();
  };

  passwordComparison = () => {
    if (
      this.state.confirmPassword === "" ||
      this.state.confirmPassword === null
    ) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isConfirmationError: true,
          },
          isConfirmed: false,
        };
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isConfirmationError: false,
          },
          isConfirmed: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isConfirmationError: false,
          },
          isConfirmed: false,
        };
      });
    }
  };

  addEmail = (event) => {
    this.setState({
      email: event.target.value,
    });

    if (event.target.value === "" || event.target.value === null) {
      this.setState((prevState) => {
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
  };

  confirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });

    if (event.target.value !== "" || event.target.value !== null) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isConfirmationError: false,
          },
          isConfirmed: false,
        };
      });
    }
  };

  firstNameHandler = (event) => {
    if (event.target.value !== "" || event.target.value !== null) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isEmpty: {
            ...prevState.isEmpty,
            isFirstNameEmpty: false,
          },
          isError: {
            ...prevState.isError,
            isFirstNameError: false,
          },
        };
      });
    }
    //   } else {
    //     this.setState((prevState) => {
    //       return {
    //         ...prevState,
    //         isEmpty: {
    //           ...prevState.isEmpty,
    //           isFirstNameEmpty: true,
    //         },
    //         isError: {
    //           ...prevState.isError,
    //           isFirstNameError: true,
    //         },
    //       };
    //     });
    //   }
  };

  lastNameHandler = (event) => {
    if (event.target.value !== "" || event.target.value !== null) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isEmpty: {
            ...prevState.isEmpty,
            isLastNameEmpty: false,
          },
          isError: {
            ...prevState.isError,
            isLastNameError: false,
          },
        };
      });
    }
    // } else {
    //   this.setState((prevState) => {
    //     return {
    //       ...prevState,
    //       isEmpty: {
    //         ...prevState.isEmpty,
    //         isLastNameEmpty: true,
    //       },
    //       isError: {
    //         ...prevState.isError,
    //         isLastNameError: true,
    //       },
    //     };
    //   });
    // }
  };

  addPassword = (event) => {
    this.setState({
      password: event.target.value,
    });

    if (event.target.value === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordError: true,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isError: {
            ...prevState.isError,
            isPasswordError: false,
          },
        };
      });
    }
  };

  render() {
    return (
      <Container title="Create New Customer Account">
        <Layout value="Create an Account" handleChange={this.createNewAccount}>
          <StandardForm
            firstNameHandler={this.firstNameHandler}
            lastNameHandler={this.lastNameHandler}
            firstNameError={this.state.isError.isFirstNameError}
            lastNameError={this.state.isError.isLastNameError}
          />
          <div className="new-account-section">
            <p className="title">Sign-in Information</p>
            <Email
              addEmail={this.addEmail}
              isError={this.state.isError.isEmailError}
            />
            <Password
              password={this.addPassword}
              isError={this.state.isError.isPasswordError}
              isValid={this.state.isValid}
            />
            <Password
              label="Confirm Password"
              id="confirm-password"
              password={this.confirmPassword}
              isError={this.state.isError.isConfirmationError}
              isConfirmation={this.state.isConfirmed}
            />
          </div>
        </Layout>
      </Container>
    );
  }
}

export default NewAccount;
