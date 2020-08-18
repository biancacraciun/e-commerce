import React from 'react';

import './product.css';

const product = (props) => {

    return (
        <div className="product-container">
            <div className="img-section">
                <div className="add-to-cart">Add to cart</div>
                <img src={require('../../../assets/rucksack.jpg')} alt="backpack" name="packpack" />
            </div>
            <div className="product-details">
                <a href="#" role="button" id="product-name"> Backpack Vinta </a>
                <span id="product-price"> $185.00 </span>
            </div>
        </div>
    )
};

export default product;