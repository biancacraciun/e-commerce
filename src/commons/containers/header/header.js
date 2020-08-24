import React, { Component } from 'react';

import Menu from '../../components/menu/menu';
import { Search, ShoppingBag, Heart } from 'react-feather';
import './header.css';

class Header extends Component {
    state = {
        isHidden: true,
        isScrolled: false,
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = () => {
        window.pageYOffset > 500 ? this.setState({ isScrolled: true }) : this.setState({ isScrolled: false })
    };

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
                        <Heart color="white" size={25} className="icon" />
                        <ShoppingBag color="white" size={25} className="icon" id="shopping-bag"/>
                    </div>
                </div>
            </header>
        )
    }
};

export default Header;