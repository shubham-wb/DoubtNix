import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../../../hooks";
import { useAuth } from "../../../hooks";
function Courses() {
  let auth = useAuth();
  let [courses, setCourses] = useState();
  let [PCourse, setPCourse] = useState();
  let [UCourse, setUCourse] = useState();

  const course = useCourses();
  let [publishedPage, setpublishedPage] = useState(true);
  useEffect(() => {
    const getCourses = async () => {
      let response = await course.myCourses(auth.user._id);
      setCourses((courses = response.data));
      console.log(courses);
      setTimeout(() => {
        let a = courses.filter((elem) => elem["published"] == true);
        setPCourse((PCourse = a));
        let b = courses.filter((elem) => elem["published"] == false);
        setUCourse((UCourse = b));
        console.log("a: ", a);
        console.log("b: ", b);
      }, 2000);
    };
    getCourses();
  }, []);

  return (
    <>
      <div
        className="course_bar"
        style={{
          height: "10%",
          background: "orange",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            setpublishedPage((publishedPage = true));
            console.log("mai chla 1", publishedPage);
          }}
        >
          Published
        </button>
        <button
          style={{ marginLeft: "30px" }}
          onClick={() => {
            setpublishedPage((publishedPage = false));
            console.log("mai chla two ", publishedPage);
          }}
        >
          Unpublished
        </button>
      </div>
      {publishedPage
        ? PCourse
          ? PCourse.map((elem) => {
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
          : null
        : UCourse.map((elem) => {
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
          })}
    </>
  );
}

export default Courses;
