import React, { useState, useEffect } from "react";

import { checkboxes } from "../../util/data/data";
import Checkbox from "../../util/inputs/checkbox/checkbox";

import "./categories.css";

const Categories = (props) => {
  // const [criteria, setCriteria] = useState([]);
  const [criteria, setCriteria] = useState("");

  const valHandler = (data, isChecked) => {
    if (isChecked) {
      // setCriteria(criteria.concat(data));
      setCriteria(data);
    }
  };

  useEffect(() => {
    if (criteria !== "") {
      props.selectedData(criteria);
    }
  });

  return (
    <div className="all-categories">
      <span className="container-title">SHOP BY:</span>
      <nav className="options">
        <ul className="options-list">
          {checkboxes.map((checkbox) => {
            return (
              <Checkbox
                key={checkbox.id}
                valFn={valHandler}
                id={checkbox.id}
                name={checkbox.name}
                value={checkbox.value}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
