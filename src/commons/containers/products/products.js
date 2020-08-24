import React, { Component } from 'react';

import Product from '../../components/product/product';

import './products.css';

class Products extends Component {
    render() {
        return (
            <section className="products">
                <Product />
            </section>
        )
    }
};

export default Products;