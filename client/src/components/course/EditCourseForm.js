import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/css/EditCourseForm.css"; //css
import { updateCourse } from "../../api";
import { updateCourseInState } from "../../actions/course";
import { toast, Toaster } from "react-hot-toast";
function EditCourseForm() {
  let { id } = useParams();
  let [updateMyCourse, setUpdateMyCourse] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateMyCourse((prevState) => ({
      updateMyCourse: {
        // object that we want to update
        ...prevState.updateMyCourse,
        // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await updateCourse(id, updateMyCourse);
    if (response) {
      updateCourseInState(id, updateMyCourse);
      toast.success("updated course");
    } else {
      toast.error("Cannot update course ");
    }
    setUpdateMyCourse(
      (updateCourse = {
        name: "",
        description: "",
        image: "",
        category: "",
      })
    );
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='ecf-form-container'>
        <div className='ecf-wrapper'>
          <div className='ecf-header'>
            <label>Title</label>
            <div>
              <input
                name='name'
                value={updateCourse.name}
                onChange={handleChange}
                type='text'
                className='ecf-title'
                placeholder='Title'
              ></input>
            </div>
          </div>

          <div className='ecf-mid'>
            <Link to=''>By Timepass</Link>
            <div className='ecf-category'>
              <label>Category</label>
              <div>
                <input
                  name='category'
                  value={updateCourse.category}
                  onChange={handleChange}
                  aria-invalid='false'
                  type='text'
                />
              </div>
            </div>
          </div>

          <div className='ecf-foo'>
            <div>
              <img src='' alt=''></img>
            </div>
            <input
              name='description'
              value={updateCourse.descritption}
              onChange={handleChange}
              type='text'
              placeholder='description'
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
    </>
  );
}

export default EditCourseForm;
