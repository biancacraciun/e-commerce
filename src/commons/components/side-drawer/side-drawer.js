import React from "react";

import ResponsiveNavigation from "./responsive-navigation/responsive-navigation";
import SideDrawerMenu from "./side-drawer-menu/side-drawer-menu";
import "./side-drawer.css";

const SideDrawer = (props) => {
  let classes = "side-drawer";

  if (props.show) {
    classes = "side-drawer open";
  }

  return (
    <div className={classes}>
      <SideDrawerMenu />
      <ResponsiveNavigation />
    </div>
  );
};

export default SideDrawer;
