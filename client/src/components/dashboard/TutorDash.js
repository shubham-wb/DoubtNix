import React from "react";
import "../../assets/css/tDashBoard.css";
import TutAside from "./TutorDashboard/TutAside";
import TutNav from "./TutorDashboard/TutNav";
import CreateCourse from "../course/CreateCourse";
import Courses from "./TutorDashboard/Courses";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function TutorDashboard() {
  return (
    <div className="t-dashboard">
      <TutNav />
      <div className="t-main">
        <TutAside />
        <div className="t-wrapper">
          <Routes>
            <Route exact path="/" element={<Courses />}></Route>
            <Route exact path="/my-courses" element={<></>}></Route>
            <Route exact path="/article/create" element={<></>}></Route>
            <Route exact path="/doubts" element={<></>}></Route>
            <Route exact path="/course/new" element={<CreateCourse />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default TutorDashboard;
