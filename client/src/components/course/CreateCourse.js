import React, { useState } from "react";
import "../../assets/css/createCourse.css";
export default function NewCourse() {
  let [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    redirect: false,
    error: "",
    Instructor: "123456",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setValues((prevState) => ({
      values: {
        // object that we want to update
        ...prevState.values, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  }

  const handleSubmit = (event) => {
    let post = JSON.stringify(values.values);
    console.log(post);
    const url = "http://localhost:8000/courses/create";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(post);

    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("Course successfully created!");
      }
    };
    setValues(
      (values = {
        name: "",
        description: "",
        image: "",
        category: "",
        redirect: false,
        Instructor: "123456",
        error: "",
      })
    );
    event.preventDefault();
  };

  return (
    <div className="main-course-container">
      <div className="new-course-container">
        <div className="pic-course">
          <div className="upload-pic"></div>
          <div className="upload-pic-banner">
            {" "}
            <img src="https://cdn-icons-png.flaticon.com/512/7235/7235820.png" />
          </div>
        </div>
        <div className="title">
          <input
            type="text"
            value={values.name}
            placeholder="Title"
            name="name"
            onChange={handleInputChange}
          />
          <hr />
        </div>
        <div className="description">
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={handleInputChange}
          />

          <hr />
        </div>
        <div className="category">
          <input
            placeholder="Category"
            type="text"
            value={values.category}
            name="category"
            onChange={handleInputChange}
          />
          <hr />
        </div>
        <div className="nav-btns">
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}
