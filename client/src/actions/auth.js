import jwt from "jwt-decode";
import {
  LOCALSTORAGE_TOKEN_KEY,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from "../utils";

export const GET_USER = "GET_USER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const getUser = () => {
  const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  return { type: GET_USER, user: jwt(userToken), loading: false };
};

export const userLogin = (user) => {
  return {
    type: LOGIN,
    user,
  };
};

export const logout = () => {
  removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  return {
    type: LOGOUT,
  };
};
