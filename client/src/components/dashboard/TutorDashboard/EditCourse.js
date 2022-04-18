import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../assets/css/editCourse.css";
import { useCourses } from "../../../hooks";
function EditCourse() {
  let { id } = useParams();
  console.log(id);
  let Courses = useCourses();
  let [lessons, setLessons] = useState([]);
  useEffect(() => {
    const getLesson = async (id) => {
      let response = await Courses.getCourseById(id);
      console.log(response);
    };
    getLesson();
  });

  return (
    <div className="course-edit-container">
      <div className="course-edit-wrapper">
        <div className="course-edit-btn">
          <div className="course-header">
            <div className="course-title details"></div>
            <div className="course-author details"></div>
            <div className="course-tag details"></div>
          </div>
          <div className="edit-btns">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
            <button>Publish</button>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </div>
        </div>
        <div className="course-description">
          <div className="course-image"></div>
          <div className="course-desc"></div>
        </div>
      </div>
      <hr />
      <br />
      <div className="lesson-edit-wrapper">
        <div className="lesson-header">
          <div className="lesson-desc"></div>
          <div className="lesson-btn">
            <Link to={"lesson/create/"}>
              <button>Add Lesson</button>
            </Link>
          </div>
        </div>
        <div className="lesson-list">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
