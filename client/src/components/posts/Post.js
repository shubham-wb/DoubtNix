import React, { useEffect, useState } from "react";
import "../../assets/css/post.css";
import { useAuth, usePosts } from "../../hooks";
import { toast, Toaster } from "react-hot-toast";
function Posts(props) {
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

        post: props.data._id,
        // update the value of specific key
      },
    }));
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
          {props.data.comments.map((elem1) => {
            return <div>{elem1}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default Posts;
