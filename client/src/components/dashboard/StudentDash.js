import React from "react";
import "../../assets/css/uDashboard.css";
import StudentDashboard from "../dashboard/studentDashboard/studentDashboard";
import StudentNav from "./studentDashboard/StudentNav";
import Doubts from "../posts/Doubts";
import { Routes, Route } from "react-router-dom";
import Courses from "../course/Courses";

const StudentDash = () => {
  return (
    <div className="u-dashboard">
      <StudentNav />
      <Routes>
        <Route exact path="/" element={<StudentDashboard />}></Route>
        <Route exact path="/doubts" element={<Doubts />}></Route>
        <Route exact path="/courses" element={<Courses />}></Route>
      </Routes>
    </div>
  );
};

export default StudentDash;
