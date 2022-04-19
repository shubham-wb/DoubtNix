import React, { useEffect, useState } from "react";
import { API_URLS } from "../../utils";
import "../../assets/css/post.css";
import { useAuth, usePosts } from "../../hooks";
import { toast, Toaster } from "react-hot-toast";
function Posts(props) {
  let auth = useAuth();
  let post = usePosts();
  let [userList, setUserList] = useState();

  let [comment, setComment] = useState({
    content: "",
    post: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevState) => ({
      comment: {
        ...prevState.comment,
        [name]: value,
        post: props.data._id,
        user: auth.user._id,
      },
    }));
  };

  const handleDoubtButton = async (id) => {
    let response = await post.doubtResolve(id, auth.user);
    console.log(response, "i ma resposne ");
    if (response.success) {
      toast.success("Doubt marked as resolved ");
    } else {
      toast.error("cannot resolve Doubt ");
    }
  };

  const handleDeleteButton = async (id) => {
    let response = await post.deletePost(id, auth.user);
    if (response.success) {
      toast.success("post deleted ");
    } else {
      toast.error("cannot delete post ");
    }
  };

  const handleDeleteComment = async (commentId, postId, userId) => {
    let response = await post.deleteComment(commentId, userId, postId);

    if (response.success) {
      toast.success("comment deleted");
    } else {
      toast.error("cannot delete comment");
    }
  };

  const handleSubmit = (event) => {
    let data = JSON.stringify(comment.comment);
    const url = API_URLS.createComment();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(data);
    xhr.onload = function () {
      if (xhr.status === 201) {
        toast.success("Succefullly commented ");
      }
    };

    setComment(
      (comment = {
        content: "",
        post: "",
      })
    );

    event.preventDefault();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="post-container">
        <div className="post-content">
          <div>{props.data.content}</div>

          {props.data.user === auth.user._id ? (
            <button
              onClick={() => {
                handleDeleteButton(props.data._id);
              }}
            >
              delete
            </button>
          ) : null}

          {props.data.user === auth.user._id && props.data.doubt === true ? (
            <button
              onClick={() => {
                handleDoubtButton(props.data._id);
              }}
            >
              Mark Resolved
            </button>
          ) : null}
        </div>

        <div className="image-container">
          <img src={props.data.image}></img>
        </div>
        <div className="comment-container">
          <input
            type="text"
            name="content"
            placeholder="Write a comment..."
            value={comment.content}
            onChange={handleChange}
          />
          <input type="hidden" name="post" value={props.data._id} />
          <button
            value="Comment"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Add comment
          </button>
        </div>
        <div>
          {props.data.comments.length != 0
            ? props.data.comments.map((elem) => {
                return (
                  <div style={{ display: "flex" }}>
                    <div>{}</div>
                    <div>{elem.content}</div>
                    {elem.user == auth.user._id ? (
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
            : null}
        </div>
      </div>
    </>
  );
}

export default Posts;
