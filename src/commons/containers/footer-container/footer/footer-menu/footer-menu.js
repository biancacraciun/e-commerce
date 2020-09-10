import React from "react";

import "./footer-menu.css";

const Menu = () => {
  return (
    <div className="footer-menu">
      <h3>Menu</h3>
      <ul className="menu-options">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">My account</a>
        </li>
        <li>
          <a href="#">Orders History</a>
        </li>
        <li>
          <a href="#">My wishlist</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
