import React from "react";
import "../../assets/css/post.css";
function Posts(props) {
  return (
    <div className="post-container">
      <div className="post-content">This is a sample text </div>
      <div className="image-container">
        <img src={props.data.image}></img>
      </div>
      <div className="comment-container"></div>
    </div>
  );
}

export default Posts;
