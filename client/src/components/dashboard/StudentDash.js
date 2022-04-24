import React from "react";
import "../../assets/css/uDashboard.css";
import StudentDashboard from "../dashboard/studentDashboard/StudentDashboard";
import StudentNav from "./studentDashboard/StudentNav";
import Doubts from "../posts/Doubts";
import { Routes, Route } from "react-router-dom";
import Courses from "../course/Courses";
import StudentAside from "./studentDashboard/StudentAside";
const StudentDash = () => {
  return (
    <div className="u-dashboard">
      <StudentNav />

      <div className="u-main">
        <aside
          style={{
            paddingLeft: "20px",
            height: "100%",
            width: "8%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StudentAside />
        </aside>{" "}
        <Routes>
          <Route exact path="/" element={<StudentDashboard />}></Route>
          <Route exact path="/doubts" element={<Doubts />}></Route>
          <Route exact path="/courses" element={<Courses />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default StudentDash;
