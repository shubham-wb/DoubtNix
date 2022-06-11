import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "../../../assets/css/editCourse.css"; //css
import { connect } from "react-redux";
import { publishCourse, deleteCourse } from "../../../api";
import { publishMyCourse, deleteMyCourse } from "../../../actions/course";
function EditCourse(props) {
  let { ownCourses } = props;
  let { id } = useParams();
  let [lessons, setLessons] = useState([]);

  useEffect(() => {
    const post = ownCourses.filter((elem) => elem._id === id);
    setLessons(post.lessons);
  }, []);

  //handle Publish Button
  const handlePublish = async () => {
    let response = await publishCourse(id);
    if (response.success) {
      alert("course published");
    }
    publishMyCourse(id);
  };

  //handle Delete Button
  const handleDelete = async () => {
    let response = await deleteCourse(id);
    if (response.success) {
      alert("course published");
    }
    deleteMyCourse(id);

    return <Navigate to='/dashboard/1/' />;
  };

  return (
    <div className='course-edit-container'>
      <div className='course-edit-wrapper'>
        <div className='course-edit-btn'>
          <div className='course-header'>
            <div className='course-title details'></div>
            <div className='course-author details'></div>
            <div className='course-tag details'></div>
          </div>
          <div className='edit-btns'>
            <Link to={`/dashboard/1/course/edit/${id}/1`}>
              <svg
                className='MuiSvgIcon-root'
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'></path>
              </svg>
            </Link>
            <button
              onClick={() => {
                handlePublish();
              }}
            >
              Publish
            </button>
            <button
              style={{ background: "transparent" }}
              onClick={() => {
                handleDelete();
              }}
            >
              <svg
                className='MuiSvgIcon-root'
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='course-description'>
          <div className='course-image'></div>
          <div className='course-desc'></div>
        </div>
      </div>
      <hr />
      <br />
      <div className='lesson-edit-wrapper'>
        <div className='lesson-header'>
          <div className='lesson-desc'></div>
          <div className='lesson-btn'>
            <Link to={"lesson/create/"}>
              <button>Add Lesson</button>
            </Link>
          </div>
        </div>
        <div className='lesson-list'>
          <ul>
            {lessons.map((elem) => (
              <li>{elem.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { ownCourses } = state;
  return {
    ownCourses,
  };
};
export default connect(mapStateToProps)(EditCourse);
