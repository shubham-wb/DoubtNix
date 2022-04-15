import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      Navbar
      <Link to="/signup/faculty">Faculty</Link>
      <Link to="/signup/student">Student</Link>
      <Link to="/dashboard/0">Student Dashboard</Link>
    </div>
  );
}

export default Navbar;
