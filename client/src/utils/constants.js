const API_ROOT = "http://localhost:8000/";

export const API_URLS = {
  login: () => `${API_ROOT}/users/login`,
  signupU: () => `${API_ROOT}/signup/user`,
  signupF: () => `${API_ROOT}/signup/faculty`,
};

export const LOCALSTORAGE_TOKEN_KEY = "token";
