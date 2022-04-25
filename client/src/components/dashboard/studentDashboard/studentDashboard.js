import React, { useState, useEffect } from "react";
import "../../../assets/css/uDashboard.css";
import { usePosts } from "../../../hooks";
import plus from "../../../assets/images/add_circle.svg";
import CreatePost from "../../posts/createPost";
import Post from "../../posts/Post";
import Dropdown from "../../mini/dropdown";
export default function StudentDashboard() {
  let post = usePosts();
  let [postList, setPostList] = useState();

  (async function getAPI() {
    let response = await post.posts;
    setPostList((postList = response));
  })();

  let [showDoubt, setShowDoubt] = useState(false);
  let [showCreate, setShowCreate] = useState(false);
  let [showfaculty, setShowFacultyPost] = useState(false);

  function handleShowCreate() {
    setShowCreate((prevState) => !prevState);
  }

  return (
    <div
      className="wrapper"
      style={{
        width: "92%",
        height: "120vh",
        display: "flex",
        alignItems: "flex-end",
        background: "whitesmoke",
      }}
    >
      <div className="feed-wrapper">
        <div className="u-feed">
          <div
            style={{
              position: "relative",
              padding: "20px 0px",
              display: "flex",
              width: "76%",
              alignItems: "center",
              backgroundColor: "white",
              justifyContent: "space-between",
            }}
          >
            <Dropdown />

            <div
              style={{
                height: "80%",
                width: "32%",
                marginRight: "2%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  background: "#0202a6",
                  textTransform: "inherit",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontSize: "14px",
                }}
                onClick={() => {
                  handleShowCreate();
                }}
              >
                <img
                  src={plus}
                  style={{
                    paddingLeft: "4px",
                    marginRight: "10px",
                    height: "25px",
                    width: "25px",
                  }}
                ></img>
                <div>Create Post</div>
              </button>
            </div>
            {showCreate ? <CreatePost /> : null}
          </div>
          <div
            className="doubt-filter"
            style={{
              padding: "18px 0px",
              width: "76%",
              backgroundColor: "orange",
              display: "flex",
            }}
          >
            <div
              style={{
                paddingLeft: "15px",
                height: "100%",
                width: "100%",
                backgroundColor: "orange",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  height: "50%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Doubts
              </div>
              <div
                style={{
                  fontSize: "14px",
                  height: "40%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Upload Questions and get answers from community
              </div>
            </div>
            <div
              style={{
                height: "100%",
                width: "30%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  height: "60%",
                  width: "100%",
                  background: "transparent",
                  border: "transparent",
                  fontSize: "14px",
                }}
              >
                View all
              </button>
            </div>
          </div>
          <div className="posts-container" style={{ background: "whitesmoke" }}>
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
