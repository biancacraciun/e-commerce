export const CHECKBOX_FILTER = "CHECKBOX_FILTER";
export const UNCHECK_CHECKBOX = "UNCHECK_CHECKBOX";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";

export const setCategories = (data) => {
  return {
    type: SET_CATEGORIES,
    categories: data,
  };
};

export const initCategories = () => {
  return (dispatch) => {
    fetch("http://localhost:8080/categories")
      .then((response) => response.json())
      .then((response) => {
        dispatch(setCategories(response));
        return response;
      });
  };
};

export const checkboxFilter = (value) => {
  return {
    type: CHECKBOX_FILTER,
    id: value,
  };
};
