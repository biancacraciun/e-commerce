import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className="card-title">{props.title}</p>
      <div className="card-data">{props.data}</div>
      <div className="card-actions">
        <Link className="action-link" to="/">
          Edit {props.more}
        </Link>
        <Link className="action-link" to="/">
          {props.change}
        </Link>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: null,
  data: null,
  more: null,
  change: null,
};

export default Card;
