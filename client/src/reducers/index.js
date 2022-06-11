import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { courseReducer } from "./courseReducer";
import { postReducer } from "./postReducer";

export default combineReducers({
  authReducer,
  courseReducer,
  postReducer,
});
