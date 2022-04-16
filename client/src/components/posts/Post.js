import React, { useEffect, useState } from "react";
import "../../assets/css/post.css";
function Posts(props) {
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
    <div className="post-container">
      <div className="post-content">{props.content} </div>
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
  );
}

export default Posts;
