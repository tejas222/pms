import { GET_USERS, GET_USER } from "../actions/types";

const initialstate = {
  users: [],
  user: {},
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
