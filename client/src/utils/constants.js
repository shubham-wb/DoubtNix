const API_ROOT = "http://localhost:8000";

export const API_URLS = {
  login: () => `/api/users/create-session`,
  signupU: () => `/api/signup/user`,
  signupF: () => `/api/signup/faculty`,
  listAllCourses: () => `/api/courses/list/all`,
  addCourse: () => `/api/courses/create`,
  listMyCourses: () => `/api/courses/mycourses/`,
  getCourse: () => `/api/courses/`,
  publishCourse: () => `/api/courses/publish/`,
  deleteCourse: () => `/api/courses/delete/`,
  updateCourse: () => `/api/courses/update/`,
  getPosts: () => `/api/posts/list`,
  createPost: () => `/api/posts/create`,
  removePost: () => `/api/posts/destroy/`,
  resolveDoubt: () => `/api/posts/resolve/`,
  createComment: () => `/api/comments/create/`,
  getName: () => `/api/users/name/`,
  removeComment: () => `/api/comments/destroy/`,
};

export const LOCALSTORAGE_TOKEN_KEY = "token";
