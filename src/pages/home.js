import React from 'react'; 

import Header from '../commons/containers/header/header';
import Categories from '../commons/components/categories/categories';
import Products from '../commons/containers/products/products';

import './home.css';

const home = () => {
    return (
        <>
            <div className="landing-page">
                <Header />
            </div>
            <div className="display-products">
                <Categories />
                <Products />
            </div>
        </>
    )
};

export default home;