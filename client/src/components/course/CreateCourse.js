import React, { useEffect, useState } from "react";
import "../../assets/css/createCourse.css";
import { useAuth, useCourses } from "../../hooks";
export default function NewCourse() {
  const Courses = useCourses();
  const auth = useAuth();
  const user = auth.user;

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  let [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    redirect: false,
    error: "",
  });

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  function handleInputChange(event) {
    let { name, value } = event.target;

    value = name === "image" ? event.target.files[0] : event.target.value;

    setValues((prevState) => ({
      values: {
        // object that we want to update
        ...prevState.values,
        instructor: user._id,
        // keep all other key-value pairs
        [name]: value,
      },
    }));

    console.log(values);
  }

  const handleSubmit = async (event) => {
    console.log(values);
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
          <div className="upload-pic">
            {selectedFile ? (
              <img id="preview" src={preview} />
            ) : (
              <img src="https://cdn-icons-png.flaticon.com/512/7235/7235820.png" />
            )}
          </div>

          <div className="upload-pic-banner">
            <input
              type="file"
              id="image"
              name="image"
              value={values.image}
              onChange={(e) => {
                handleInputChange(e);
                onSelectFile(e);
              }}
              required
            ></input>
          </div>
        </div>
        <div className="file-name"></div>
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
