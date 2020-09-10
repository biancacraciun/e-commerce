import React from "react";

import { PhoneCall } from "react-feather";

import "./menu.css";

const Menu = () => {
  return (
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
          Sign in
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
  );
};

export default Menu;
