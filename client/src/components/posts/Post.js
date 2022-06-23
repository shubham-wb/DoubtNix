import React, { useState } from "react";
import { connect } from "react-redux";
import "../../assets/css/post.css"; //css
import { toast, Toaster } from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";
import { addComment, removeComment, resolveDoubt } from "../../api";
import {
  deleteComment,
  deletePost,
  doubtResolve,
  addNewComment,
} from "../../actions/post";
import dummyImg from "../../assets/images/doubt_dummy.jpg";
import userImg from "../../assets/images/user_dummy.png";
import { getTimeInterval } from "../../utils"; //to get readable time
function Posts(props) {
  let { user } = props.authReducer;
  let [viewComment, setViewComment] = useState(false);
  let [comment, setComment] = useState({
    content: "",
    post: "",
  });

  const handleViewComment = () => {
    setViewComment((prevState) => !prevState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevState) => ({
      comment: {
        ...prevState.comment,
        [name]: value,
        post: props.data._id,
        user: user._id,
      },
    }));
  };

  //function to handle  doubt resolve button
  const handleDoubtButton = async (id) => {
    let response = await resolveDoubt(id, user);
    if (response) {
      props.doubtResolve(id);
      toast.success("Doubt marked as resolved ");
    } else {
      toast.error("cannot resolve Doubt ");
    }
  };

  //function to handle delete comment button

  const handleDeleteComment = async (commentId, postId, userId) => {
    let response = await removeComment(commentId, userId, postId);
    if (response.message) {
      props.deleteComment(commentId, postId);
      toast.success("comment deleted");
    } else {
      toast.error("cannot delete comment");
    }
  };

  //function to add comment
  const handleSubmit = async (postID) => {
    const response = await addComment(comment.comment);

    if (response.success) {
      props.addNewComment(response.data.data.comment);
      toast.success("post created successfully");
    } else {
      toast.error("cannot create post");
    }

    setComment(
      (comment = {
        content: "",
        post: "",
      })
    );
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='post-container'>
        <div className='post-content'>
          <div className='post-detail-header'>
            <div className='post-info'>
              <div className='user-info'>
                <img src={userImg} alt='user'></img>
              </div>
              <div className='post-time-info'>
                <h5>{props.data.elem.username}</h5>
                <h6>{getTimeInterval(props.data.elem.postedAt)}</h6>
              </div>
            </div>
            <div className='post-btns'>
              {props.data.elem.user === user._id ? (
                <Tooltip title='Delete Post' placement='left'>
                  <button
                    className='action-post-btn1'
                    style={{
                      background: "whitesmoke",
                      padding: "0px",
                      height: "100%",
                      width: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "solid 2px white",
                    }}
                    onClick={() => {
                      props.data.handleDeletePostPopup(props.data.elem._id);
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='48'
                      width='48'
                    >
                      <path d='M15 39H33Q33 39 33 39Q33 39 33 39V15H15V39Q15 39 15 39Q15 39 15 39ZM10.5 11V8H17.2L19.2 6H28.8L30.8 8H37.5V11ZM15 42Q13.8 42 12.9 41.1Q12 40.2 12 39V12H36V39Q36 40.2 35.1 41.1Q34.2 42 33 42ZM15 39H33Q33 39 33 39Q33 39 33 39H15Q15 39 15 39Q15 39 15 39Z' />
                    </svg>
                  </button>
                </Tooltip>
              ) : null}

              {props.data.elem.user === user._id &&
              props.data.elem.doubt === true ? (
                <button
                  className='action-post-btn2 '
                  style={{
                    marginLeft: "5px",
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "50px",
                    background: "whitesmoke",
                    border: "solid 2px white",
                  }}
                  onClick={() => {
                    handleDoubtButton(props.data.elem._id);
                  }}
                >
                  <Tooltip title='Mark Resolved' placement='right'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='48'
                      width='48'
                    >
                      <path d='M21.05 33.1 35.2 18.95 32.9 16.7 21.05 28.55 15.05 22.55 12.8 24.8ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 16.75 36.125 11.875Q31.25 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41Z' />
                    </svg>
                  </Tooltip>
                </button>
              ) : null}
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              textTransform: "capitalize",
              height: "max-content",
              width: "96%",
              color: "black",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
            }}
          >
            <h4>{props.data.elem.title}</h4>
            <div>{props.data.elem.content}</div>
          </div>
        </div>

        <div className='image-container'>
          <img src={dummyImg} alt=''></img>
        </div>
        <div className='comment-container'>
          <input
            style={{
              height: "100%",
              width: "70%",
              borderRadius: "4px 0px 0px 4px",
            }}
            type='text'
            name='content'
            placeholder='Write a comment...'
            value={comment.content}
            onChange={handleChange}
          />
          <input type='hidden' name='post' value={props.data.elem._id} />
          <button
            style={{
              height: "100%",
              width: "30%",
              background: "orange",
              fontWeight: "600",
              fontSize: "10px",
              borderRadius: "4px",
            }}
            value='Comment'
            onClick={(e) => {
              handleSubmit();
            }}
          >
            Add comment
          </button>
        </div>
        <button
          style={{
            background: "transparent",
            alignItems: "center",
            justifyItems: "center",
            color: "blue",
            fontSize: "11px",
            height: "34px",
            width: "100%",
            display: "flex",
            placeItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            handleViewComment();
          }}
        >
          View Comments
        </button>
        {viewComment ? (
          <div>
            {props.data.elem.comments.length !== 0 ? (
              props.data.elem.comments
                .sort((a, b) => b.postedAt - a.postedAt)
                .map((elem) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        paddingLeft: "20px",
                        textTransform: "capitalize",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          height: "20px",
                          width: "95%",
                          color: "black",
                        }}
                      >
                        {elem.content}
                      </div>
                      {elem.user === user._id ? (
                        <button
                          onClick={() => {
                            handleDeleteComment(
                              elem._id,
                              props.data._id,
                              props.data.user
                            );
                          }}
                        >
                          Delete
                        </button>
                      ) : null}
                    </div>
                  );
                })
            ) : (
              <h3
                style={{
                  fontWeight: "600",
                  color: "black",
                  height: "20px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                No Comments Yet !!!
              </h3>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { authReducer, postReducer } = state;
  return { authReducer, postReducer };
};

export default connect(mapStateToProps, {
  deleteComment,
  deletePost,
  addNewComment,
  doubtResolve,
})(Posts);
