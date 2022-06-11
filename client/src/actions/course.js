export const ADD_COURSES_TO_STATE = "ADD_COURSES_TO_STATE";
export const ADD_COURSE = "ADD_COURSE";
export const LIST_MY_COURSES = "LIST_MY_COURSES";
export const PUBLISH_COURSE = "PUBLISH_MY_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const UPDATE_COURSE = "UPDATE_COURSE";

export const addCoursesToState = (courses) => {
  return {
    type: ADD_COURSES_TO_STATE,
    courses,
  };
};

export const newCourse = (course) => {
  return {
    type: ADD_COURSE,
    course,
  };
};

export const deleteMyCourse = (id) => {
  return {
    type: DELETE_COURSE,
    id,
  };
};

export const publishMyCourse = (id) => {
  return {
    type: PUBLISH_COURSE,
    id,
  };
};

export const listOwnCourses = (id) => {
  return {
    type: LIST_MY_COURSES,
    id,
  };
};

export const updateCourseInState = (id, course) => {
  return {
    type: UPDATE_COURSE,
    id,
    course,
  };
};
