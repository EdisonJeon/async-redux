import axios from "axios";

export const GET_CAT_FACT_SUCCESS = "GET_CAT_FACT_SUCCESS";
export const GET_CAT_FACT_ERROR = "GET_CAT_FACT_ERROR";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const getCat = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios.get("https://catfact.ninja/fact").then(
    (res) => {
      console.log(res);
      const cat = res.data;
      setTimeout(() => {
        dispatch(getCatFactSuccess(cat));
      }, 3000);
    },
    (error) => {
      const message = error.message;
      setTimeout(() => {
        dispatch(getCatFactError(message));
      }, 3000);
    }
  );
};

const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING, payload: isFetching };
};

const getCatFactSuccess = (cat) => {
  return { type: GET_CAT_FACT_SUCCESS, payload: cat };
};

const getCatFactError = (message) => {
  return { type: GET_CAT_FACT_ERROR, payload: message };
};
