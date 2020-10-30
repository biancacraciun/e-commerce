import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const ResponsiveAccountNavigation = () => {
  return (
    <nav>
      <ul>
        <li className="navigation-link">
          <NavLink to="/sign-in" className="navlink">
            Sign In
          </NavLink>
        </li>
        <li className="navigation-link">
          <NavLink to="/create-new-account" className="navlink">
            Create an account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveAccountNavigation;
