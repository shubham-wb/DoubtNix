import React from "react";
import { Link } from "react-router-dom";

function TutNav() {
  return (
    <nav id="t-nav">
      <ul>
        <Link to="/dashboard/1/doubts">
          <li>Doubts</li>
        </Link>
        <li>DashBoard</li>
        <li>Messages</li>
        <li>Account</li>
      </ul>
    </nav>
  );
}

export default TutNav;
