const API_ROOT = "http://localhost:8000";

export const API_URLS = {
  login: () => `${API_ROOT}/users/create-session`,
  signupU: () => `${API_ROOT}/signup/user`,
  signupF: () => `${API_ROOT}/signup/faculty`,
  listAllCourses: () => `${API_ROOT}/courses/list`,
  addCourse: () => `${API_ROOT}/courses/create`,
  listMyCourses: () => `${API_ROOT}/courses/mycourses/`,
  getCourse: () => `${API_ROOT}/courses/`,
};

export const LOCALSTORAGE_TOKEN_KEY = "token";
