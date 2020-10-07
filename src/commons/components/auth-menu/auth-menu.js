import React from "react";
import { NavLink } from "react-router-dom";
import "./auth-menu.css";

const AuthMenu = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            to="/auth"
            className="nav-link"
            activeStyle={{ fontWeight: "bold", backgroundColor: "transparent" }}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/order"
            className="nav-link"
            activeStyle={{ fontWeight: "bold", backgroundColor: "transparent" }}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/wishlist"
            className="nav-link"
            activeStyle={{ fontWeight: "bold", backgroundColor: "transparent" }}
          >
            My Wish List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="auth/address/new"
            className="nav-link"
            activeStyle={{ fontWeight: "bold", backgroundColor: "transparent" }}
          >
            Address Book
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/account/edit"
            className="nav-link"
            activeStyle={{ fontWeight: "bold", backgroundColor: "transparent" }}
          >
            Account Information
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthMenu;
