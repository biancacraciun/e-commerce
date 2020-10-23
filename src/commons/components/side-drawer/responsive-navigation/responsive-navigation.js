import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  BrowserRouter,
} from "react-router-dom";

import DropdownMenu from "../../menu/drowpdown-menu/dropdown-menu";
import DropdownButton from "../../../util/buttons/dropdown-button/dropdown-button";
import { types, products, pages } from "../../../util/data/data";
import "./responsive-navigation.css";

const ResponsiveNavigation = () => {
  const [isProductsOpen, openProducts] = useState(false);
  const [isCategoriesOpen, openCategories] = useState(false);
  const [isPagesOpen, openPages] = useState(false);

  const openProductsMenu = () => {
    openProducts(!isProductsOpen);
  };

  const openCategoriesMenu = () => {
    openCategories(!isCategoriesOpen);
  };

  const openPagesMenu = () => {
    openPages(!isPagesOpen);

    if (isCategoriesOpen) {
      openCategoriesMenu(false);
    }

    if (isProductsOpen) {
      openProducts(false);
    }
  };

  return (
    <nav>
      <ul className="links">
        <li className="navigation-link">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li
          className={
            isProductsOpen
              ? "navigation-link navlink-button is-open"
              : "navigation-link navlink-button"
          }
        >
          <NavLink to="/products" className="navlink">
            Products
          </NavLink>
          <DropdownButton collapse={openProductsMenu} />
        </li>

        <BrowserRouter>
          <Switch>
            <Route to="/products">
              <DropdownMenu
                path="/products"
                data={types}
                isOpen={isProductsOpen}
              />
            </Route>
          </Switch>
        </BrowserRouter>

        <li
          className={
            isCategoriesOpen
              ? "navigation-link navlink-button is-open"
              : "navigation-link navlink-button"
          }
        >
          <NavLink to="/categories" className="navlink">
            Categories
          </NavLink>
          <DropdownButton collapse={openCategoriesMenu} />
        </li>

        <BrowserRouter>
          <Switch>
            <Route to="/categories">
              <DropdownMenu
                path="/categories"
                data={products}
                isOpen={isCategoriesOpen}
              />
            </Route>
          </Switch>
        </BrowserRouter>

        <li
          className={
            isPagesOpen
              ? "navigation-link navlink-button is-open"
              : "navigation-link navlink-button"
          }
        >
          <NavLink to="/pages" className="navlink">
            Pages
          </NavLink>
          <DropdownButton collapse={openPagesMenu} />
        </li>

        <BrowserRouter>
          <Switch>
            <Route>
              <DropdownMenu path="/pages" data={pages} isOpen={isPagesOpen} />
            </Route>
          </Switch>
        </BrowserRouter>
        <li className="navigation-link">
          <NavLink to="/contact-us" className="navlink">
            Contact Us
          </NavLink>
        </li>
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

export default ResponsiveNavigation;
