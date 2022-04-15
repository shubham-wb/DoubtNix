import React from "react";
import "../assets/css/uDashboard.css";
function studentDash() {
  return (
    <div className="u-dashboard">
      <nav id="u-nav">
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Doubts</li>
          <li>Profile</li>
        </ul>
      </nav>

      <div className="u-main">
        <div className="u-feed">
          <div className="create-post"></div>
          <div className="posts-container"></div>
        </div>
        <div className="u-side-panel"></div>
      </div>
    </div>
  );
}

export default studentDash;
