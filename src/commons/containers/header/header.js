import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/menu/menu";
import Storage from "../storage/storage";
import DrawerToggleButton from "../../components/drawer-toggle-button/drawer-toggle-button";
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
    document.body.addEventListener("click", this.off);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.body.removeEventListener("click", this.off);
  }

  handleScroll = () => {
    window.pageYOffset > 400
      ? this.setState({ isScrolled: true })
      : this.setState({ isScrolled: false });
  };

  handleFav = () => {
    this.setState({
      isFavHidden: false,
      isCartHidden: true,
    });
  };

  favOff = () => {
    this.setState({
      isFavHidden: true,
    });
  };

  handleCart = () => {
    this.setState((prevState) => {
      return {
        isCartHidden: !prevState.isCartHidden,
        isFavHidden: true,
      };
    });
  };

  cartOff = () => {
    this.setState({
      isCartHidden: true,
    });
  };

  off = () => {
    this.favOff();
    this.cartOff();
  };

  render() {
    return (
      <header>
        <div
          className={`sticky-header ${
            this.state.isScrolled ? "active-scroll" : ""
          }`}
        >
          <Link to="/" className="logo-link">
            <img
              src="Sport-logo-with-sneakers.png"
              alt="banner-eCommerce"
              name="banner-eCommerce"
              role="banner"
              className="header-logo"
            />
          </Link>
          <DrawerToggleButton openMenu={this.props.openSideDrawer} />
          <Menu />
          <div className="header-icons">
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

            <section className="fav-container">
              <Heart
                color="white"
                size={25}
                className="icon"
                onClick={() => this.handleFav()}
              />
              {this.state.isFavHidden ? null : (
                <Storage
                  component={"wishlist"}
                  className="storage-component"
                  path={"/auth/wishlist"}
                />
              )}
            </section>

            <section className="shopping-storage">
              <ShoppingBag
                color="white"
                size={25}
                className="icon"
                id="shopping-bag"
                onClick={() => this.handleCart()}
              />
              {this.state.isCartHidden ? null : (
                <Storage
                  component={"shopping cart"}
                  className="storage-component"
                  path={"/auth/order"}
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
