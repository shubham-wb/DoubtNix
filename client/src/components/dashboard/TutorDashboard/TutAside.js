import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";

function TutAside() {
  const auth = useAuth();

  return (
    <aside className="t-aside">
      <ul>
        <Link to="/dashboard/1/course/new">
          <li>Add Course</li>
        </Link>
        <Link to="/dashboard/1/">
          <li>Courses</li>
        </Link>
        <Link to={`/dashboard/1/course/${auth.user._id}`}>
          <li>My Courses</li>
        </Link>
        <Link to="/dashboard/1/posts/create">
          <li>Write Article</li>
        </Link>
      </ul>
    </aside>
  );
}

export default TutAside;
