import { response } from "express";
import res from "express/lib/response";
import React, { Component } from "react";
import Product from "../../components/product/product";

import "./data-products.css";

class Data extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    // fetch("http://localhost:8080/products")
    //   .then((response) => response.json())
    //   .then(
    //     (response) => console.log(response)
    //     // this.setState({
    //     //   data: response
    //     // })
    //   );
  }

  render() {
    return (
      <section className="products">
        <Product />
      </section>
    );
  }
}

export default Data;
