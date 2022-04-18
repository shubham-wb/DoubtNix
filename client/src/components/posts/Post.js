import React, { useEffect, useState } from "react";
import "../../assets/css/post.css";
import { useAuth, usePosts } from "../../hooks";
import { toast, Toaster } from "react-hot-toast";
function Posts(props) {
  const { image, _id, content, user, doubt, comments } = props.data;

  console.log(comments);
  let auth = useAuth();
  let post = usePosts();
  let [temp, settemp] = useState();
  let [comment, setComment] = useState({
    content: "",
    post: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevState) => ({
      comment: {
        // object that we want to update
        ...prevState.comment, // keep all other key-value pairs
        [name]: value,

        post: _id,
        // update the value of specific key
      },
    }));
  };

  const handleDoubtButton = async (id) => {
    let response = await post.doubtResolve(id, auth.user);

    if (response.success) {
      toast.success("Doubt marked as resolved ");
      settemp((temp = 0));
    } else {
      toast.error("cannot resolve Doubt ");
    }
  };

  const handleDeleteButton = async (id) => {
    let response = await post.deletePost(id, auth.user);
    if (response.success) {
      toast.success("post deleted ");
      settemp((temp = 0));
    } else {
      toast.error("cannot delete post ");
    }
  };

  const handleSubmit = (event) => {
    let data = JSON.stringify(comment.comment);
    console.log(data);
    const url = "http://localhost:8000/comments/create";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(data);

    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("Comment successfully created!");
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

  // const useCommentsData = () => {
  //   useEffect(() => {
  //     const getAPI = async () => {
  //       const response = await fetch("http://localhost:8000/posts/list");
  //       const comments_data = await response.json();
  //       try {
  //         console.log(comments_data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getAPI();
  //   }, []);
  // };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="post-container">
        <div className="post-content">
          <div>{content}</div>

          {user === auth.user._id ? (
            <button
              onClick={() => {
                handleDeleteButton(_id);
              }}
            >
              delete
            </button>
          ) : null}

          {user === auth.user._id && doubt === true ? (
            <button
              onClick={() => {
                handleDoubtButton(_id);
              }}
            >
              Mark Resolved
            </button>
          ) : null}
        </div>

        <div className="image-container">
          <img src={image}></img>
        </div>
        <div className="comment-container">
          <input
            type="text"
            name="content"
            placeholder="Write a comment..."
            value={comment.content}
            onChange={handleChange}
          />
          <input type="hidden" name="post" value={_id} />
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
          {comment.length != 0
            ? comments.map((elem) => {
                return <div>{elem.content}</div>;
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default Posts;
