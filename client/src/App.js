import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacultySignUp from "./components/FacultySignUp";
import UserSignUp from "./components/UserSignup";
import StudentDash from "./components/StudentDash";
import TutorDash from "./components/TutorDash";

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
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
