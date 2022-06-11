import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { listMyCourses } from "../../../api";
import { listOwnCourses } from "../../../actions/course";

function Courses(props) {
  let { user } = props.authReducer;
  let { ownCourses } = props.courseReducer;

  let [courses, setCourses] = useState();
  let [PCourse, setPCourse] = useState();
  let [UCourse, setUCourse] = useState();

  let [publishedPage, setpublishedPage] = useState(true);

  setTimeout(() => {
    let a = courses.filter((elem) => elem["published"] === true);
    setPCourse((PCourse = a));
    let b = courses.filter((elem) => elem["published"] === false);
    setUCourse((UCourse = b));
  }, 2000);

  useEffect(() => {
    const getCourses = async () => {
      let response = await listMyCourses(user._id);
      listOwnCourses(response.data.data);
      setCourses(response.data.data);
    };
    getCourses();
  }, []);

  return (
    <>
      <div
        className='course_bar'
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
                <div className='course-container'>
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
              <div className='course-container'>
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

const mapStateToProps = (state) => {
  const { authReducer, courseReducer } = state;
  return {
    authReducer,
    courseReducer,
  };
};

export default connect(mapStateToProps)(Courses);
