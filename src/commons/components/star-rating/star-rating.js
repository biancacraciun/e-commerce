import React, { useState } from "react";

import { Star } from "react-feather";

import "./star-rating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <ul className="stars">
      {[...Array(5)].map((star, index) => {
        return (
          <li key={index} onClick={() => setRating(index + 1)}>
            <Star
              className={rating >= index + 1 ? "rating" : "star"}
              size={13}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default StarRating;
