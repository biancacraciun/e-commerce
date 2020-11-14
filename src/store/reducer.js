import * as actionTypes from "./actions";

const initialState = {
  isChecked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_CHECKBOX:
      return {
        ...state,
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
};

export default reducer;
