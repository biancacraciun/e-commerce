import React from "react";
import Categories from "../../commons/components/categories/categories";
import Data from "../../commons/containers/data-products/data-products";

const Products = () => {
  return (
    <div className="display-products">
      <Categories />
      <Data />
    </div>
  );
};

export default Products;
