import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom";

import { PhoneCall } from "react-feather";

import "./menu.css";

const Menu = () => {
  return (
    <ul className="menu">
      <li className="dropdown-container">
        <Link to="/shop" className="dropdown-btn">
          Shop
        </Link>
        <ul className="dropdown-content">
          <li>
            <Link to="/" className="dropdown-options">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="dropdown-options">
              Products
            </Link>
          </li>
          <li>
            <Link to="/pages" className="dropdown-options">
              Pages
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact-us" className="menu-options">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="/sign-in" className="menu-options">
          Sign In
        </Link>
      </li>
      <li>
        <Link to="/create-new-account" className="menu-options">
          Create an account
        </Link>
      </li>
      <li className="phone-call">
        <PhoneCall color="white" size={20} />
        <span className="phone-no">0232.766.266</span>
      </li>
    </ul>
  );
};

export default Menu;
