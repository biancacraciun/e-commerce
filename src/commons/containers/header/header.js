import React, { Component } from 'react';

import Menu from '../../components/menu/menu';
import Storage from '../storage/storage';

import { Search, ShoppingBag, Heart } from 'react-feather';
import './header.css';

class Header extends Component {
    state = {
        isHidden: true,
        cartIsHidden: true,
        isScrolled: false,
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.getElementsByTagName('body')[0].addEventListener('click', () => {
            this.setState({
                cartIsHidden: true,
                isHidden: true
            })
        })
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        document.getElementsByTagName('body')[0].removeEventListener('click', () => {
            this.setState({
                cartIsHidden: true,
                isHidden: true
            })
        })
    };
    
    handleScroll = () => {
        window.pageYOffset > 500 ? this.setState({ isScrolled: true }) : this.setState({ isScrolled: false })
    };

    handleFavourites = () => {
        this.setState((prevState) => {
            return {
                isHidden: !prevState.isHidden,
                cartIsHidden: true
            }
        })
    };

    handleCart = () => {
        this.setState((prevState) => {
            return {
                cartIsHidden: !prevState.cartIsHidden,
                isHidden: true
            }
        })
    }

    render() {
        return (
            <header>
                <div className={`sticky-header ${this.state.isScrolled ? 'active' : ''}`}>
                    <img src='Sport-logo-with-sneakers.png' alt="banner-eCommerce" name="banner-eCommerce" role="banner" />
                    <Menu />
                    <div className="search-and-shop">
                        <section className="search-container">
                            <label className="search" htmlFor="search-field">
                                <Search color="white" size={25} className="icon"/>
                                <input id="search-field" type="search" name="search" placeholder="Search..." />
                            </label>
                        </section>

                        <section className="fav-storage">
                            <Heart color="white" size={25} className="icon" onClick={this.handleFavourites}/>
                            {this.state.isHidden ? null : <Storage component={"wishlist"} className="storage-component" />}
                        </section>

                        <section className="shopping-storage">
                            <ShoppingBag color="white" size={25} className="icon" id="shopping-bag" onClick={this.handleCart}/>
                            {this.state.cartIsHidden ? null : <Storage component={"shopping cart"} className="storage-component" />}
                        </section>
                    </div>
                </div>
            </header>
        )
    }
};

export default Header;