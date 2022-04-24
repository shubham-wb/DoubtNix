import React from "react";
import "../../assets/css/tDashBoard.css";
import TutAside from "./TutorDashboard/TutAside";
import TutNav from "./TutorDashboard/TutNav";
import CreateCourse from "../course/CreateCourse";
import Courses from "../course/Courses";
import MyCourses from "./TutorDashboard/MyCourses";
import CreateLesson from "./TutorDashboard/CreateLesson";
import EditCourse from "./TutorDashboard/EditCourse";
import { Routes, Route } from "react-router-dom";
import EditCourseForm from "../course/EditCourseForm";
import { useAuth } from "../../hooks";
import Doubts from "../posts/Doubts";
function TutorDashboard() {
  let auth = useAuth();
  return (
    <div className="t-dashboard">
      <TutNav data={auth.user.image} />
      <div className="t-main">
        <TutAside />
        <div className="t-wrapper">
          <Routes>
            <Route exact path="/" element={<Courses />}></Route>
            <Route exact path="/doubts" element={<Doubts />}></Route>
            <Route exact path="/my-courses" element={<></>}></Route>
            <Route exact path="/article/create" element={<></>}></Route>
            <Route exact path="/doubts" element={<Doubts />}></Route>
            <Route exact path="/course/new" element={<CreateCourse />}></Route>
            <Route exact path="/course/:id" element={<MyCourses />}></Route>
            <Route
              exact
              path="/course/edit/:id"
              element={<EditCourse />}
            ></Route>
            <Route
              exact
              path="/course/edit/:id/lesson/create"
              element={<CreateLesson />}
            ></Route>
            <Route
              exact
              path="/course/edit/:id/1"
              element={<EditCourseForm />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default TutorDashboard;
