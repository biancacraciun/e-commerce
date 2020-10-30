import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";

import "./footer-menu.css";

const Menu = () => {
  return (
    <div className="footer-menu">
      <h3>Menu</h3>
      <ul className="footer__menu-options">
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>
        <li>
          <Link to="/my-account">My account</Link>
        </li>
        <li>
          <Link to="/history">Orders History</Link>
        </li>
        <li>
          <Link to="/wishlist">My wishlist</Link>
        </li>
        <li>
          <Link to="/log-in">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
