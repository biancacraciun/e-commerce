import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home/home";
import SideDrawer from "./commons/components/side-drawer/side-drawer";
import Backdrop from "./commons/components/backdrop/backdrop";

import "./App.css";
import Products from "./pages/Products/products";
import AccountRecovery from "./pages/Account-Recovery/account-recovery";
import SignIn from "./pages/Sign-In/sign-in";
import ChangePassword from "./pages/Change-Password/change-password";
import NewAccount from "./pages/New-Account/new-account";
import LoggedIn from "./pages/Logged-In/logged-in";

class App extends Component {
  state = {
    isOpen: false,
  };

  openSideDrawer = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    let backdrop;

    if (this.state.isOpen) {
      backdrop = <Backdrop closeBackdrop={this.backdropClickHandler} />;
    }
    return (
      <div>
        {backdrop}
        <SideDrawer show={this.state.isOpen} />

        <Router>
          <Switch>
            <Route exact path="/">
              <Home openSideDrawer={this.openSideDrawer} />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/forgot-password">
              <AccountRecovery />
            </Route>
            <Route path="/change-password">
              <ChangePassword />
            </Route>
            <Route path="/create-new-account">
              <NewAccount />
            </Route>
            <Route path="/auth">
              <LoggedIn />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
