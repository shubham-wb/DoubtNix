const API_ROOT = "http://localhost:8000";

export const API_URLS = {
  login: () => `${API_ROOT}/users/create-session`,
  signupU: () => `${API_ROOT}/signup/user`,
  signupF: () => `${API_ROOT}/signup/faculty`,
  listAllCourses: () => `${API_ROOT}/courses/list/all`,
  addCourse: () => `${API_ROOT}/courses/create`,
  listMyCourses: () => `${API_ROOT}/courses/mycourses/`,
  getCourse: () => `${API_ROOT}/courses/`,
  publishCourse: () => `${API_ROOT}/courses/publish/`,
  deleteCourse: () => `${API_ROOT}/courses/delete/`,
  updateCourse: () => `${API_ROOT}/courses/update/`,
  getPosts: () => `${API_ROOT}/posts/list`,
  createPost: () => `${API_ROOT}/posts/create`,
  removePost: () => `${API_ROOT}/posts/destroy/`,
};

export const LOCALSTORAGE_TOKEN_KEY = "token";
