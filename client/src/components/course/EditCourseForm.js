import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/EditCourseForm.css";
import { useCourses } from "../../hooks";

function EditCourseForm() {
  let { id } = useParams();
  let Courses = useCourses();
  let [updateCourse, setUpdateCourse] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateCourse((prevState) => ({
      updateCourse: {
        // object that we want to update
        ...prevState.updateCourse,
        // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await Courses.updateTutCourse(id, updateCourse);
    setUpdateCourse(
      (updateCourse = {
        name: "",
        description: "",
        image: "",
        category: "",
      })
    );
  };

  return (
    <div className="ecf-form-container">
      <div className="ecf-wrapper">
        <div className="ecf-header">
          <label>Title</label>
          <div>
            <input
              name="name"
              value={updateCourse.name}
              onChange={handleChange}
              type="text"
              className="ecf-title"
              placeholder="Title"
            ></input>
          </div>
        </div>

        <div className="ecf-mid">
          <a>By Timepass</a>
          <div className="ecf-category">
            <label>Category</label>
            <div>
              <input
                name="category"
                value={updateCourse.category}
                onChange={handleChange}
                aria-invalid="false"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="ecf-foo">
          <div>
            <img src=""></img>
          </div>
          <input
            name="description"
            value={updateCourse.descritption}
            onChange={handleChange}
            type="text"
            placeholder="description"
          />
        </div>
      </div>
      <div>
        <span>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save
          </button>
        </span>
      </div>
    </div>
  );
}

export default EditCourseForm;
