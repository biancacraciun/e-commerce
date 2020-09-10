import React, { useState } from "react";

import { Heart } from "react-feather";

import "./product.css";

const Product = ({ img, productName, productPrice }) => {
  const [isFavourite, setFavourite] = useState(false);

  const favouriteProduct = () => {
    setFavourite(!isFavourite);
  };

  return (
    <div className="product-container">
      <div className="img-section">
        <div className="product-actions">
          <div className="add-to-cart">Add to cart</div>
          <Heart
            size={15}
            className={isFavourite ? "fav-product" : "heart"}
            onClick={() => favouriteProduct()}
          />
        </div>
        <img src={img} alt={productName} name={productName} />
      </div>
      <div className="product-details">
        <a href="#" role="button" className="product-name">
          {productName}
        </a>
        <span className="product-price"> {productPrice} </span>
      </div>
    </div>
  );
};

Product.defaultProps = {
  img: "rucksack.jpg",
  productName: "Backpack Vinta",
  productPrice: "$185.00",
};

export default Product;
