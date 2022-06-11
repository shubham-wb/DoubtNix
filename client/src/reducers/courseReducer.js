import {
  ADD_COURSE,
  ADD_COURSES_TO_STATE,
  LIST_MY_COURSES,
  PUBLISH_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../actions/course";

const initialState = {
  courses: [],
  userCourses: [],
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE: {
      return {
        ...state,
        courses: [action.course, ...state.courses],
      };
    }
    case ADD_COURSES_TO_STATE: {
      return {
        ...state,
        courses: action.courses,
      };
    }
    case LIST_MY_COURSES: {
      let ownCourse = state.courses.filter(
        (course) => course.instructor._id === action.id
      );
      return {
        ...state,
        userCourses: ownCourse,
      };
    }
    case PUBLISH_COURSE: {
      let course = state.ownCourse.filter((course) => course._id === action.id);

      let filterArray = state.ownCourse.filter(
        (course) => course._id !== action.id
      );
      course.isPublished = true;

      let filterArrayAll = state.courses.filter(
        (course) => course._id !== action.id
      );
      course.isPublished = true;

      return {
        ...state,
        courses: [...filterArrayAll, course],
        ownCourse: [course, ...filterArray],
      };
    }
    case DELETE_COURSE: {
      let filteredAll = state.courses.filter(
        (course) => course._id !== action.id
      );
      let filterArrayOwn = state.ownCourse.filter(
        (course) => course._id !== action.id
      );

      return {
        ...state,
        courses: filteredAll,
        ownCourse: filterArrayOwn,
      };
    }
    case UPDATE_COURSE: {
      let course = state.ownCourse.filter((course) => course._id === action.id);
      let filterArrayAll = state.courses.filter(
        (course) => course._id !== action.id
      );
      let filterArray = state.ownCourse.filter(
        (course) => course._id !== action.id
      );
      course = action.course;

      return {
        ...state,
        course: [course, ...filterArrayAll],
        ownCourse: [course, ...filterArray],
      };
    }
    default:
      return state;
  }
};
