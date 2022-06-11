import { GET_USER, LOGIN, LOGOUT } from "../actions/auth";

let initialstate = {
  user: {},
  loading: true,
};

export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    }
    case LOGIN: {
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    }
    case LOGOUT: {
      return { ...state, user: {}, loading: false };
    }
    default:
      return state;
  }
};
