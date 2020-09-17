import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Product from "../../components/product/product";

import "./products.css";

class Products extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <section className="products">
        <Product />
      </section>
    );
  }
}

export default Products;
