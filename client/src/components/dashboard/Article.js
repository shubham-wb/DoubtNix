import React, { useState } from "react";

function Article() {
  let [post, setPost] = useState({
    content: "",
    doubt: false,
    photo: "",
  });

  let [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prevState) => ({
      post: {
        // object that we want to update
        ...prevState.post, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  };

  const handleSubmit = (event) => {
    let data = JSON.stringify(post.post);
    console.log(data);
    const url = "http://localhost:8000/posts/create";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(data);

    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("Post successfully created!");
      }
    };
    setPost(
      (post = {
        content: "",
        doubt: false,
        photo: "",
      })
    );
    setIsChecked((isChecked = false));
    event.preventDefault();
  };

  const handleSelect = (event) => {
    const { name } = event.target;
    setPost((prevState) => ({
      post: {
        // object that we want to update
        ...prevState.post, // keep all other key-value pairs
        [name]: !isChecked, // update the value of specific key
      },
    }));
    setIsChecked(!isChecked);
  };
  return (
    <div className="create-post">
      <div className="post-pic">Upload photo</div>
      <input
        type="text"
        value={post.content}
        name="content"
        onChange={handleChange}
      ></input>
      <div className="post-btn">
        <input
          type="checkbox"
          value={post.doubt}
          name="doubt"
          checked={isChecked}
          onChange={handleSelect}
        ></input>
        <button
          id="post-submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Article;
