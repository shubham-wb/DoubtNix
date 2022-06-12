import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const StuRoute = (props) => {
  let { user } = props;

  const role = user.role;

  return role === "Student" ? props.children : <Navigate to='/dashboard/1' />;
};

const TutRoute = (props) => {
  let { user } = props;

  const role = user.role;

  return role === "Teacher" ? props.children : <Navigate to='/dashboard/0' />;
};

const mapStateToProps = (state) => {
  const { authReducer } = state;
  return authReducer;
};

export const Student = connect(mapStateToProps)(StuRoute);

export const Tutor = connect(mapStateToProps)(TutRoute);
