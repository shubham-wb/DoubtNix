import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jwt-decode";
//<----------------components

import Home from "../pages/Home";
import FacultySignUp from "./credentials/FacultySignUp";
import UserSignUp from "./credentials/UserSignup";
import StudentDash from "./dashboard/StudentDash";
import TutorDash from "./dashboard/TutorDash";
import CreateCourse from "./course/CreateCourse";
import Navbar from "./Navbar";
import SignIn from "./credentials/SignIn";
import Loader from "./loader";
import { Student, Tutor } from "./RestrictedRoutes";
import { getItemFromLocalStorage } from "../utils";
import { userLogin } from "../actions/auth";
//--------------------->

const Page404 = () => {
  return <h1>404</h1>;
};

export const App = (props) => {
  //check if user is signed in or not
  useEffect(() => {
    let token = getItemFromLocalStorage("token");
    if (token) {
      let userDetails = jwt(token);
      props.userLogin(userDetails);
    }
  }, []);

  let { loading } = props;
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/signup/faculty'
          element={
            <>
              <Navbar />
              <FacultySignUp />
            </>
          }
        ></Route>
        <Route
          path='/signup/student'
          element={
            <>
              <Navbar />
              <UserSignUp />
            </>
          }
        />{" "}
        <Route
          path='/dashboard/0/*'
          element={
            <Student>
              <StudentDash />
            </Student>
          }
        ></Route>
        <Route
          path='/dashboard/1/*'
          element={
            <Tutor>
              <TutorDash />
            </Tutor>
          }
        ></Route>
        <Route
          path='/course/new'
          element={
            <Tutor>
              <CreateCourse />
            </Tutor>
          }
        ></Route>
        <Route path='/login' element={<SignIn />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  const { user, loading } = state;
  return { user, loading };
};

export default connect(mapStateToProps, { userLogin })(App);
