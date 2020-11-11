import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  BrowserRouter,
  useHistory,
} from "react-router-dom";

import DropdownMenu from "../drowpdown-menu/dropdown-menu";
import ArrowButton from "../../../util/buttons/arrow-button/arrow-button";
import { types, products, pages } from "../../../util/data/data";
import "./responsive-menu.css";

const ResponsiveMenu = () => {
  const [isProductsOpen, openProducts] = useState(false);
  const [isCategoriesOpen, openCategories] = useState(false);
  const [isPagesOpen, openPages] = useState(false);

  let history = useHistory();

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
      {/* <BrowserRouter> */}
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
          <ArrowButton collapse={openProductsMenu} />
        </li>

        <Route to="/products">
          <DropdownMenu path="/products" data={types} isOpen={isProductsOpen} />
        </Route>

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
          <ArrowButton collapse={openCategoriesMenu} />
        </li>

        <Route to="/categories">
          <DropdownMenu
            path="/categories"
            data={products}
            isOpen={isCategoriesOpen}
          />
        </Route>

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
          <ArrowButton collapse={openPagesMenu} />
        </li>

        <Route>
          <DropdownMenu path="/pages" data={pages} isOpen={isPagesOpen} />
        </Route>

        <li className="navigation-link">
          <NavLink to="/contact-us" className="navlink">
            Contact Us
          </NavLink>
        </li>
      </ul>
      {/* </BrowserRouter> */}
    </nav>
  );
};

export default ResponsiveMenu;
