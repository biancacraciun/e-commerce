import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// import { useToggle } from "../../../util/functions/toogle-hook";

import DrawerToggleButton from "../../drawer-toggle-button/drawer-toggle-button";
import "./side-drawer-menu.css";

const SideDrawerMenu = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isAccountActive, setAccountActive] = useState(false);

  const menu = () => {
    setMenuActive(true);

    if (isAccountActive) {
      setAccountActive(false);
    }
  };

  const account = () => {
    setAccountActive(true);

    if (isMenuActive) {
      setMenuActive(false);
    }
  };

  return (
    <nav className="side-drawer__menu">
      <ul className="side-drawer__navigation">
        <Link
          onClick={() => menu()}
          to="/menu"
          className={`${
            isMenuActive
              ? "active__side-drawer-link navigation-link drawer-toggle-button__menu navigation-button"
              : "navigation-link drawer-toggle-button__menu navigation-button"
          }`}
        >
          <DrawerToggleButton
            className={`${
              isMenuActive ? "drawer-toggle-button__active-line" : null
            }`}
          />
          Menu
        </Link>
        <Link
          onClick={() => account()}
          to="/account"
          className={`${
            isAccountActive
              ? "active__side-drawer-link navigation-link drawer-toggle-button__menu navigation-button"
              : "navigation-link drawer-toggle-button__menu navigation-button"
          }`}
        >
          Account
        </Link>
      </ul>
    </nav>
  );
};

export default SideDrawerMenu;
