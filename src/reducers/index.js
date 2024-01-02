import {
  GET_CAT_FACT_ERROR,
  GET_CAT_FACT_SUCCESS,
  SET_IS_FETCHING,
} from "../actions";

const initialState = {
  cat: {
    fact: "",
    length: "",
  },
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
      console.log(action);
      return { ...state, isFetching: action.payload };
    case GET_CAT_FACT_SUCCESS:
      console.log(action);
      return { ...state, isFetching: false, cat: action.payload };
    case GET_CAT_FACT_ERROR:
      console.log(action);
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
