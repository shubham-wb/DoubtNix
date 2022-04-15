import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacultySignUp from "./components/credentials/FacultySignUp";
import UserSignUp from "./components/credentials/UserSignup";
import StudentDash from "./components/dashboard/StudentDash";
import TutorDash from "./components/dashboard/TutorDash";
import CreateCourse from "./components/course/CreateCourse";
import Navbar from "./components/Navbar";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup/faculty"
            element={
              <>
                <Navbar />
                <FacultySignUp />
              </>
            }
          />
          <Route
            path="/signup/student"
            element={
              <>
                <Navbar />
                <UserSignUp />
              </>
            }
          />
          <Route path="/dashboard/0" element={<StudentDash />} />
          <Route path="/dashboard/1" element={<TutorDash />} />
          <Route path="/course/new" element={<CreateCourse />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
