import React from "react";
import "./categories.css";

const Categories = () => {
  return (
    <div className="all-categories">
      <span className="container-title">SHOP BY:</span>
      <nav className="options">
        <ul className="options-list">
          <li>
            <input
              type="checkbox"
              id="new-arrivals"
              name="new-arrivals"
              value="New arrivals"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="new-arrivals"> New arrivals </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="men"
              name="men"
              value="Men"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="men"> Men </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="women"
              name="women"
              value="Women"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="women"> Women </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="boys"
              name="boys"
              value="Boys"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="boys"> Boys </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="girls"
              name="girls"
              value="Girls"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="girls"> Girls </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="shoes"
              name="shoes"
              value="Shoes"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="shoes"> Shoes </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="clothes"
              name="chlotes"
              value="Clothes"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="clothes"> Clothes </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="accessories"
              name="accessories"
              value="Accessories"
              className="checkbox"
            />
            <span className="new-checkbox" />
            <label htmlFor="accessories"> Accessories </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
