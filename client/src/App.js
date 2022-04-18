import React, { Component } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import FacultySignUp from "./components/credentials/FacultySignUp";
import UserSignUp from "./components/credentials/UserSignup";
import StudentDash from "./components/dashboard/StudentDash";
import TutorDash from "./components/dashboard/TutorDash";
import CreateCourse from "./components/course/CreateCourse";
import Navbar from "./components/Navbar";
import SignIn from "./components/credentials/SignIn";
import { useAuth, useCourses, usePosts } from "./hooks";
import Loader from "./loader";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

const StuRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  const role = auth.user.role;
  return role === "student" ? <Outlet /> : <Navigate to="/dashboard/1" />;
};

const TutRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  const role = auth.user.role;
  return role === "Teacher" ? <Outlet /> : <Navigate to="/dashboard/0" />;
};

const Page404 = () => {
  return <h1>404</h1>;
};

export const App = () => {
  const auth = useAuth();
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
        ></Route>
        <Route
          path="/signup/student"
          element={
            <>
              <Navbar />
              <UserSignUp />
            </>
          }
        />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<StuRoute />}>
            <Route path="/dashboard/0" element={<StudentDash />}></Route>
          </Route>
          <Route path="/dashboard/" element={<TutRoute />}>
            <Route path="/dashboard/1/*" element={<TutorDash />}></Route>
          </Route>
          <Route path="/course/new" element={<CreateCourse />}></Route>
        </Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
