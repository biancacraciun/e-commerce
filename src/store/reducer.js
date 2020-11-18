import * as actionTypes from "./actions/actions";

const initialState = {
  filters: {
    isChecked: false,
    id: [],
  },
  categories: [],
  cart: [],
};

const remover = (arr, el) => {
  let index = arr.indexOf(el);
  return arr.splice(index, 1, el);
};

const adder = (arr, el) => {
  arr.push(el);
  return arr;
};

const conditional = (bool, arr, el) => {
  if (bool) {
    return adder(arr, el);
  }
  return remover(arr, el);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKBOX_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          isChecked: !state.filters.isChecked,
          id: conditional(state.filters.isChecked, state.filters.id, action.id),
        },
      };
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default reducer;
