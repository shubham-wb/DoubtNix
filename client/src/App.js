import React, { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FacultySignUp from "./components/credentials/FacultySignUp";
import UserSignUp from "./components/credentials/UserSignup";
import StudentDash from "./components/dashboard/StudentDash";
import TutorDash from "./components/dashboard/TutorDash";
import CreateCourse from "./components/course/CreateCourse";
import Navbar from "./components/Navbar";
import SignIn from "./components/credentials/SignIn";
import { useAuth } from "./hooks";
import Loader from "./loader";
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        if (auth.user) {
          return children;
        }
        return <Navigate to="/login" />;
      }}
    />
  );
}

const Page404 = () => {
  return <h1>404</h1>;
};

export const App = () => {
  const auth = useAuth();

  console.log("auth", auth);
  if (auth.loading) {
    return <Loader />;
  }

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
        <PrivateRoute path="/dashboard/0">
          <StudentDash />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/1/*">
          <TutorDash />
        </PrivateRoute>
        <PrivateRoute path="/course/new">
          <CreateCourse />
        </PrivateRoute>
        <Route path="/login" element={<SignIn />} />

        <Route>
          <Page404 />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
