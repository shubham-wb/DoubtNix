const API_ROOT = "http://localhost:8000";

export const API_URLS = {
  login: () => `${API_ROOT}/users/create-session`,
  signupU: () => `${API_ROOT}/signup/user`,
  signupF: () => `${API_ROOT}/signup/faculty`,
  listAllCourses: () => `${API_ROOT}/courses/list`,
};

export const LOCALSTORAGE_TOKEN_KEY = "token";
