import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function TutAside(props) {
  const { user } = props;

  return (
    <aside className='t-aside'>
      <ul>
        <Link to='/dashboard/1/course/new'>
          <li>Add Course</li>
        </Link>
        <Link to='/dashboard/1/'>
          <li>Courses</li>
        </Link>
        <Link to={`/dashboard/1/course/${user._id}`}>
          <li>My Courses</li>
        </Link>
        <Link to='/dashboard/1/posts/create'>
          <li>Write Article</li>
        </Link>
      </ul>
    </aside>
  );
}

const mapStateToProps = (state) => {
  const { authReducer } = state;
  return authReducer;
};

export default connect(mapStateToProps)(TutAside);
