import axios from "axios";

import { GET_USERS, GET_USER } from "./types";

export const getCategories = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3333/category");
  dispatch({
    type: GET_USERS,
    payload: response.data,
  });
};

export const getCategory = (id, history) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3333/category/${id}`);
    history.push(`/category/${id}`);
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
