import React from "react";
import { Link } from "react-router-dom";
function StudentNav() {
  return (
    <nav id="u-nav">
      <ul>
        <Link to="">
          <li>Home</li>
        </Link>
        <Link to="Courses">
          <li>Courses</li>
        </Link>
        <Link to="doubts">
          <li>Doubts</li>
        </Link>
        <li>Profile</li>
      </ul>
    </nav>
  );
}

export default StudentNav;
