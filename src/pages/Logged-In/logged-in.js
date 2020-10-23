import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink,
} from "react-router-dom";
import "./logged-in.css";

import MyAccount from "../My-Account/my-account";
import Orders from "../Orders/Orders";
import AuthMenu from "../../commons/components/auth-menu/auth-menu";
import MyWishList from "../My-Wishlist/my-wishlist";
import AddressBook from "../Address-Book/address-book";

const LoggedIn = (props) => {
  return (
    <div className="logged-in">
      <h1>{props.title}</h1>
      <div className="routes">
        <AuthMenu />

        <Switch>
          <Route exact path="/auth">
            <MyAccount />
          </Route>
          <Route path="/auth/order">
            <Orders />
          </Route>
          <Route path="/auth/wishlist">
            <MyWishList />
          </Route>
          <Route path="/auth/address">
            <AddressBook />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default LoggedIn;
