import React, { useState } from "react";
import "../../assets/css/createCourse.css";
import { useAuth, useCourses } from "../../hooks";
export default function NewCourse() {
  const Courses = useCourses();
  const auth = useAuth();
  const user = auth.user;

  let [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    redirect: false,
    error: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setValues((prevState) => ({
      values: {
        // object that we want to update
        ...prevState.values,
        instructor: user._id,
        // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  }

  const handleSubmit = async (event) => {
    console.log(user.name);
    let response = await Courses.addCourse(values.values);

    setValues(
      (values = {
        name: "",
        description: "",
        image: "",
        category: "",
        redirect: false,

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
