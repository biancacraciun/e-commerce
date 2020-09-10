import React, { useState } from "react";

import StarRating from "../star-rating/star-rating";
import { Heart, ShoppingBag } from "react-feather";

import "./recently-viewed-product.css";

const RecentlyViewed = ({ img, title, price }) => {
  const [isFavourite, setFavourite] = useState(false);

  const addToFavourites = () => {
    return setFavourite(!isFavourite);
  };

  return (
    <div className="recently-product">
      <img src={img} alt={title} name={title} />

      <span className="add-to-shopping-bag">
        <ShoppingBag color="white" size={20} />
      </span>

      <div className="product-details">
        <section className="title">
          <p>{title}</p>
          <Heart
            size={15}
            className={isFavourite ? "fav-product" : "icon"}
            onClick={() => addToFavourites()}
          />
        </section>
        <StarRating className="icon" />
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

RecentlyViewed.defaultProps = {
  img: "nike-zoom-pegasus-turbo-35.jpg",
  title: "Nike Zoom Pegasus 35 Turbo",
  price: "$180.00",
};

export default RecentlyViewed;
