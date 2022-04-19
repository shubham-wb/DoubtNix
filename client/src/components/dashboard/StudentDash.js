import React, { useState, useEffect } from "react";
import "../../assets/css/uDashboard.css";
import { usePosts } from "../../hooks";
import CreatePost from "../posts/createPost";
import Post from "../posts/Post";
function StudentDash() {
  let post = usePosts();
  let [postList, setPostList] = useState();

  async function getAPI() {
    let response = await post.posts;
    setPostList((postList = response));
  }

  useEffect(() => {
    getAPI();
  });

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
          <CreatePost data={getAPI()} />
          <div className="posts-container">
            {postList
              ? postList.map((elem) => {
                  return <Post data={elem} />;
                })
              : null}
          </div>
        </div>
        <div className="u-side-panel"></div>
      </div>
    </div>
  );
}
export default StudentDash;
