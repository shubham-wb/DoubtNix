import React, { useState, useEffect } from "react";
import "../../../assets/css/uDashboard.css";
import { usePosts } from "../../../hooks";
import CreatePost from "../../posts/createPost";
import Post from "../../posts/Post";

export default function StudentDashboard() {
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
  );
}
