import { createContext } from "react";

import { useProvideCourses } from "../hooks";

const initialState = {
  courses: [],
  loading: true,
  listAllCourses: () => {},
  addCourseToState: () => {},
  addLesson: () => {},
};

export const CoursesContext = createContext(initialState);

export const CoursesProvider = ({ children }) => {
  const courses = useProvideCourses();

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
};
