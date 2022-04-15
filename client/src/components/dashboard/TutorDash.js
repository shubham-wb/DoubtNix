import React from "react";
import "../../assets/css/tDashBoard.css";
function TutorDashboard() {
  return (
    <div className="t-dashboard">
      <nav id="t-nav">
        <ul>
          <li>Doubts</li>
          <li>DashBoard</li>
          <li>Messages</li>
          <li>Account</li>
        </ul>
      </nav>
      <div className="t-main">
        <aside className="t-aside">
          <ul>
            <li>Add Course</li>
            <li>Courses</li>
            <li>My Courses</li>
            <li>Write Article</li>
          </ul>
        </aside>
        <div className="t-wrapper"></div>
      </div>
    </div>
  );
}

export default TutorDashboard;
