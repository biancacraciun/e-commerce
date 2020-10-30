import React, { useState } from "react";
import { useHistory, Route } from "react-router-dom";

import ResponsiveMenu from "./responsive-menu/responsive-menu";
import SideDrawerMenu from "./side-drawer-menu/side-drawer-menu";
import ResponsiveAccountNavigation from "./responsive-account-navigation/responsive-account-navigation";
import "./side-drawer.css";

const SideDrawer = (props) => {
  let classes = "side-drawer";

  if (props.show) {
    classes = "side-drawer open";
  }

  const [isMenuClicked, clickMenu] = useState(true);
  const [isAccoundClicked, clickAccount] = useState(false);

  const menuClickHandler = () =>
    isAccoundClicked ? clickMenu(false) : clickMenu(true);

  const accountClickHandler = () =>
    isMenuClicked ? clickMenu(false) : clickAccount(true);

  return (
    <div className={classes}>
      <SideDrawerMenu
        menuClickHandler={menuClickHandler}
        accountClickHandler={accountClickHandler}
      />
      {isMenuClicked ? <ResponsiveMenu /> : <ResponsiveAccountNavigation />}
    </div>
  );
};

export default SideDrawer;
