import React, { useEffect, useState } from "react";

import Categories from "../../commons/components/categories/categories";
import Data from "../../commons/containers/data-products/data-products";
import "./products.css";

const Products = () => {
  const [data, setData] = useState(null);

  const getSelectedData = (items) => {
    setData(items);
  };

  // console.log("isSelected", data);
  return (
    <div className="display-products">
      <Categories selectedData={getSelectedData} />
      <Data selected={data} />
    </div>
  );
};

export default Products;
