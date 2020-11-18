import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actions";

import "./categories.css";

class Categories extends Component {
  componentDidMount() {
    this.props.onSetCategories();
  }

  render() {
    return (
      <div className="all-categories">
        <span className="container-title">SHOP BY:</span>
        <nav className="options">
          <ul className="options-list">
            {this.props.categories.map((checkbox) => {
              return (
                <li className="checkbox-item" key={checkbox.input}>
                  <input
                    type="checkbox"
                    id={checkbox.id}
                    value={checkbox.input}
                    checked={this.props.isChecked}
                    onChange={() => this.props.onCheck(checkbox.id)}
                  />
                  <label htmlFor={checkbox.input}>{checkbox.input}</label>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isChecked: state.filters.isChecked,
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCheck: (value) => dispatch(actionTypes.checkboxFilter(value)),
    onSetCategories: () => dispatch(actionTypes.initCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
