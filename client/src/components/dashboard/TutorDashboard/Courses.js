import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Courses() {
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch("http://localhost:8000/courses/list");
      const data = await response.json();
      try {
        console.log(data);
        const { course } = data;
        setCourses((courses = course));
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  let [courses, setCourses] = useState();
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
