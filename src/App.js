import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import SideDrawer from "./commons/components/side-drawer/side-drawer";
import Backdrop from "./commons/components/backdrop/backdrop";

import "./App.css";
// import Products from "./pages/Products/products";
import AccountRecovery from "./pages/Account-Recovery/account-recovery";
import SignIn from "./pages/Sign-In/sign-in";
import ChangePassword from "./pages/Change-Password/change-password";
import NewAccount from "./pages/New-Account/new-account";
import LoggedIn from "./pages/Logged-In/logged-in";
import Header from "./commons/containers/header/header";
import Footer from "./commons/containers/footer-container/footer";

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

        <Router>
          <SideDrawer show={this.state.isOpen} />
          <Header openSideDrawer={this.openSideDrawer} />

          {/* general paths */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/forgot-password" component={AccountRecovery} />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/create-new-account" component={NewAccount} />
            <Route path="/auth" component={LoggedIn} />
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
