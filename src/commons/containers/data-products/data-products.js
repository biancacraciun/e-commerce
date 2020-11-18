import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Product from "../../components/product/product";
import LoadMore from "../../util/buttons/load-more-button/load-more-button";
import "./data-products.css";

const Data = (props) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  useEffect(() => {
    setFilter(props.selected);
  });
  // console.log(filter);

  return (
    <section className="products">
      {filter === null || filter === []
        ? data.map((product) => {
            return (
              <Product
                img={product.image[0]}
                productName={product.model}
                productPrice={product.price}
              />
            );
          })
        : data.filter((item) => {
            console.log(filter);
            if (
              item.type == filter ||
              item.category == filter ||
              item.gender == filter
            ) {
              return (
                <Product
                  img={item.image[0]}
                  productName={item.model}
                  productPrice={item.price}
                />
              );
            }
          })}
      <LoadMore />
    </section>
  );
};

Data.propTypes = {
  selected: PropTypes.array,
};

export default Data;
