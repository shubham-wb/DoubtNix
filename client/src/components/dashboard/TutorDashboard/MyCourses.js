import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../../../hooks";
import { useAuth } from "../../../hooks";
function Courses() {
  let auth = useAuth();
  let [courses, setCourses] = useState();
  const course = useCourses();

  useEffect(() => {
    const getCourses = async () => {
      let response = await course.myCourses(auth.user._id);
      console.log(response, "resposnse component");
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
                  <Link to={"/dashboard/1/course/edit/" + elem._id}>
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
