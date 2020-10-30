import React, { useState } from "react";

import DrawerToggleButton from "../../drawer-toggle-button/drawer-toggle-button";
import "./side-drawer-menu.css";

const SideDrawerMenu = (props) => {
  const [isMenuActive, setMenuActive] = useState(true);
  const [isAccountActive, setAccountActive] = useState(false);

  const menu = () => {
    setMenuActive(true);

    if (isAccountActive) {
      setAccountActive(false);
    }

    props.menuClickHandler();
  };

  const account = () => {
    setAccountActive(true);

    if (isMenuActive) {
      setMenuActive(false);
    }
    props.accountClickHandler();
  };
  return (
    <nav className="side-drawer__menu">
      <ul className="side-drawer__navigation">
        <li onClick={() => menu()} className="list-item">
          <button
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
          </button>
          {/* <Link
             to="/"
            className={`${ 
              isMenuActive
                ? "active__side-drawer-link navigation-link drawer-toggle-button__menu navigation-button"
                : "navigation-link drawer-toggle-button__menu navigation-button"
            }`}
          >
          </Link> */}
        </li>
        <li onClick={() => account()} className="list-item">
          <button
            className={`${
              isAccountActive
                ? "active__side-drawer-link navigation-link drawer-toggle-button__menu navigation-button"
                : "navigation-link drawer-toggle-button__menu navigation-button"
            }`}
          >
            Account
          </button>
          {/* <Link
            to="/"
            className={`${
              isAccountActive
                ? "active__side-drawer-link navigation-link drawer-toggle-button__menu navigation-button"
                : "navigation-link drawer-toggle-button__menu navigation-button"
            }`}
          >
            Account
          </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawerMenu;
