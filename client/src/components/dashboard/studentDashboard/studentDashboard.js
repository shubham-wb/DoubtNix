import React, { useState, useEffect } from "react";
import "../../../assets/css/uDashboard.css";
import plus from "../../../assets/images/add_circle.svg";
import CreatePost from "../../posts/createPost";
import Post from "../../posts/Post";
import Dropdown from "../../mini/dropdown";
import { connect } from "react-redux";
import { addPostsToState, deletePost } from "../../../actions/post";
import { toast, Toaster } from "react-hot-toast";
import { removePost } from "../../../api";
import Button from "@mui/material/Button";

//delete button popup component

function DeletePopup(props) {
  //function to handle delete post button
  const handleDeleteButton = async (id) => {
    let response = await removePost(id, props.user);
    if (response.success) {
      props.deletePost(id);
      props.data.handleShowDeletePopup();
      toast.success("post deleted ");
    } else {
      toast.error("cannot delete post ");
    }
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div
        style={{
          height: "100vh",
          position: "fixed",
          width: "100vw",
          zIndex: "11",
          background: "#00000085",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "160px",
            border: "solid 1px whitesmoke",
            width: "473px",
            background: "white",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h6
            style={{
              fontSize: "1rem",
              margin: "10px 0px",
              padding: "0px",
            }}
          >
            Are you sure you want to Delete this Post ?
          </h6>
          <div
            style={{
              fontSize: "0.7rem",
              color: "gray",
            }}
          >
            This can't be undone
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant='contained'
              style={{
                fontSize: "0.7rem",
                textTransform: "none",
                height: "40px",
                width: "90px",
                backgroundColor: "purple",
              }}
              onClick={() => handleDeleteButton(props.data.postId)}
            >
              Go ahead{" "}
            </Button>
            <Button
              variant='contained'
              style={{
                fontSize: "0.8rem",
                textTransform: "none",
                height: "40px",
                width: "90px",
                border: "solid 2px purple",
                backgroundColor: "white",
                color: "black",
                marginLeft: "20px",
              }}
              onClick={() => props.data.handleShowDeletePopup()}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProp = (state) => {
  return state.authReducer;
};

export const DeletePopupButton = connect(mapStateToProp, { deletePost })(
  DeletePopup
);

//////-----------------------------------------------------------------------------------------------------////

//STUDENT DASHBOARD

function StudentDashboard(props) {
  let [postList, setPostList] = useState([]);
  let [showCreate, setShowCreate] = useState(false);
  let [postId, setPostId] = useState("");

  let [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeletePostPopup = (id) => {
    setPostId(id);
    setShowDeletePopup((prev) => !prev);
  };

  function handleShowDeletePopup() {
    setShowDeletePopup((prev) => !prev);
  }
  // fetch posts from server

  function handleShowCreate() {
    setShowCreate((prevState) => !prevState);
  }
  useEffect(() => {
    setPostList(props.posts);
  });
  return (
    <>
      <div className='delete-post-popup'>
        {showDeletePopup ? (
          <DeletePopupButton data={{ handleShowDeletePopup, postId }} />
        ) : null}
      </div>
      <div
        className='wrapper'
        style={{
          width: "92%",
          height: "120vh",
          display: "flex",
          alignItems: "flex-end",
          background: "whitesmoke",
        }}
      >
        <div className='feed-wrapper'>
          <div className='u-feed'>
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
                <Button
                  variant='contained'
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    background: "#0202a6",
                    textTransform: "inherit",
                    width: "170px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "12px",
                  }}
                  onClick={() => {
                    handleShowCreate();
                  }}
                >
                  <img
                    src={plus}
                    style={{
                      paddingLeft: "4px",
                      marginRight: "4px",
                      height: "25px",
                      width: "25px",
                    }}
                    alt=''
                  ></img>
                  <div>Create Post</div>
                </Button>
              </div>
              {showCreate ? <CreatePost data={handleShowCreate} /> : null}
            </div>
            <div
              className='doubt-filter'
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
            <div
              className='posts-container'
              style={{ background: "whitesmoke" }}
            >
              {postList
                ? postList
                    .sort((a, b) => b.postedAt - a.postedAt)
                    .map((elem) => {
                      return (
                        <Post
                          data={{ elem, handleDeletePostPopup }}
                          key={elem._id}
                        />
                      );
                    })
                : null}
            </div>
          </div>
          <div className='u-side-panel'></div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return state.postReducer;
};

export default connect(mapStateToProps, { addPostsToState })(StudentDashboard);
