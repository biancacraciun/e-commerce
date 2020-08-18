import React, { Component } from 'react';

import Menu from '../../components/menu/menu';
import { Search, ShoppingBag, Heart } from 'react-feather';
import './header.css';

class Header extends Component {
    state = {
        hidden: true,
        backgroundColor: ""
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    };
    
    handleScroll = () => {
        if(window.pageYOffset > 350) {
            if(!this.state.className) {
                this.setState({
                    backgroundColor: "active"
                })
            }
        } else {
            this.setState({
                backgroundColor: ""
            })
        }
    };

    searchClickHandler = () => {
        this.setState({
            hidden: !this.state.hidden
        });
    };   

    focusHandler = () => {
        const container = document.getElementsByClassName('search-field')[0];
        container.style.border = "1px solid #80BDFF";
        container.style.boxShadow = "0 0 0 0.1rem rgba(0, 123, 255, 0.25)";
    }

    render() {
        const conditionallyShow = this.state.hidden ? null : 
        (<div className="search-field">
            <input onFocus={this.focusHandler} className="search" type="search" name="search" placeholder="Search..." />
            <button type="submit">
                <Search color="black" size={15} />
            </button>
        </div>);

        return (
            <header> 
                <div className={`sticky-header ${this.state.backgroundColor}`}>
                    <img src={require('../../../assets/Sport-logo-with-sneakers.png')} alt="banner-eCommerce" name="eCommerce" role="banner" />
                    <Menu />
                    <div className="search-and-shop">
                        <section className="search-container">
                            <Search color="white" size={25} id="search-icon" onClick={this.searchClickHandler}/>
                            {conditionallyShow}
                        </section>
                        <Heart color="white" size={25} id="favorites"/>
                        <ShoppingBag color="white" size={25} id="shopping-bag"/>
                    </div>
                </div>
            </header>
        )
    }
};

export default Header;