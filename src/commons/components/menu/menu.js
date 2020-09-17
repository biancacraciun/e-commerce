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
import SignIn from "../../../pages/Sign-In/sign-in";

const Menu = () => {
  return (
    <BrowserRouter>
      <ul className="menu">
        <li className="dropdown-container">
          <a href="#" className="dropdown-btn">
            Shop
          </a>
          <ul className="dropdown-content">
            <li>
              <a href="#" className="dropdown-options">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-options">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-options">
                Pages
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="menu-options">
            Contact us
          </a>
        </li>
        <li>
          <a href="#" className="menu-options">
            Sign In
          </a>
        </li>
        <li>
          <a href="#" className="menu-options">
            Create an account
          </a>
        </li>
        <li className="phone-call">
          <PhoneCall color="white" size={20} />
          <span>0232.766.266</span>
        </li>
      </ul>
    </BrowserRouter>
  );
};

export default Menu;
