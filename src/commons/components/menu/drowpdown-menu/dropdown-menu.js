import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  useLocation,
} from "react-router-dom";
import { ArrowRight } from "react-feather";

import "./dropdown-menu.css";

const DropdownMenu = (props) => {
  return (
    <nav>
      <ul className={props.isOpen ? "dropdown" : "hide"}>
        {props.data.map((item) => {
          return (
            <li className="navigation-link">
              <ArrowRight size={15} className="arrow-right" />
              <NavLink to={`${props.path}/${item}`} className="navlink">
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DropdownMenu;
