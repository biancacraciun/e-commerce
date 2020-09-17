import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Menu from "../../components/menu/menu";
import Storage from "../storage/storage";

import { Search, ShoppingBag, Heart } from "react-feather";
import "./header.css";

class Header extends Component {
  state = {
    isScrolled: false,
    isFavHidden: true,
    isCartHidden: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  /* outside click */
  outsideClose = () => {};

  handleScroll = () => {
    window.pageYOffset > 500
      ? this.setState({ isScrolled: true })
      : this.setState({ isScrolled: false });
  };

  handleFavourites = () => {
    this.setState({
      isFavHidden: false,
      isCartHidden: true,
    });
  };

  favoritesOff = () => {
    this.setState({
      isFavHidden: true,
    });
  };

  handleCart = () => {
    this.setState({
      isCartHidden: false,
      isFavHidden: true,
    });
  };

  cartOff = () => {
    this.setState({
      isCartHidden: true,
    });
  };

  render() {
    return (
      <header>
        <div
          className={`sticky-header ${this.state.isScrolled ? "active" : ""}`}
        >
          <img
            src="Sport-logo-with-sneakers.png"
            alt="banner-eCommerce"
            name="banner-eCommerce"
            role="banner"
          />
          <Menu />
          <div className="search-and-shop">
            <section className="search-container">
              <label className="search" htmlFor="search-field">
                <Search color="white" size={25} className="icon" />
                <input
                  id="search-field"
                  type="search"
                  name="search"
                  placeholder="Search..."
                />
              </label>
            </section>

            <section className="fav-storage">
              <Heart
                color="white"
                size={25}
                className="icon"
                onMouseEnter={() => this.handleFavourites()}
              />
              {this.state.isFavHidden ? null : (
                <Storage
                  component={"wishlist"}
                  className="storage-component"
                  closeStorage={this.favoritesOff}
                />
              )}
            </section>

            <section className="shopping-storage">
              <ShoppingBag
                color="white"
                size={25}
                className="icon"
                id="shopping-bag"
                onMouseEnter={() => this.handleCart()}
              />
              {this.state.isCartHidden ? null : (
                <Storage
                  component={"shopping cart"}
                  className="storage-component"
                  closeStorage={this.cartOff}
                />
              )}
            </section>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
