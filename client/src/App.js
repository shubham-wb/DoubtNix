import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacultySignUp from "./components/FacultySignUp";
import Navbar from "./components/Navbar";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup/faculty" element={<FacultySignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
