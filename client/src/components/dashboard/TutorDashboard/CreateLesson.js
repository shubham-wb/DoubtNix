import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../../../assets/css/createLesson.css";
function CreateLesson() {
  let { id } = useParams();

  const [lesson, setLesson] = useState({
    title: "",
    content: "",
    resource_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLesson((prevState) => ({
      lesson: {
        // object that we want to update
        ...prevState.lesson, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  };

  const handleSubmit = (event) => {
    let data = JSON.stringify(lesson.lesson);
    console.log(data);
    const url = `/api/courses/${id}/lesson/create`;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(data);

    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("Lesson successfully created!");
      }
    };
    setLesson({
      lesson: {
        title: "",
        content: "",
        resource_url: "",
      },
    });
  };
  return (
    <div className='input-lesson-container'>
      <input
        name='title'
        placeholder='Title'
        type='string'
        className='title'
        onChange={handleChange}
        value={lesson.title}
      ></input>
      <hr />
      <input
        name='content'
        placeholder='content'
        className='content'
        type='string'
        onChange={handleChange}
        value={lesson.content}
      ></input>
      <hr />

      <input
        name='resource_url'
        placeholder='resource'
        className='resource'
        type='string'
        onChange={handleChange}
        value={lesson.resource_url}
      ></input>
      <div className='nav-btns'>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add Lesson
        </button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default CreateLesson;
