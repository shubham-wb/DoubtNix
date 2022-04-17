import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../../../hooks";
import { CoursesContext } from "../../../providers/index";
function Courses() {
  let [courses, setCourses] = useState();
  const course = useCourses();

  useEffect(() => {
    const getCourses = async () => {
      let response = await course.listAllCourses();
      setCourses((courses = response.data));
    };
    getCourses();
  }, []);

  return (
    <>
      {courses
        ? courses.map((elem) => {
            return (
              <div className="course-container">
                <div>{elem.name}</div>
                <div>
                  <Link to={"/dashboard/1/course/" + elem._id}>
                    <button>Edit</button>
                  </Link>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Courses;
