import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import "../../assets/css/createCourse.css"; //css
import { addCourse } from "../../api";
import { newCourse } from "../../actions/course";
function CreateCourse(props) {
  const { user } = props;
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
  }

  const handleSubmit = async (event) => {
    let response = await newCourse(values.values);
    if (response) {
      addCourse(response.data);
      toast.success("course created succesfully");
    } else {
      toast.error("cannot create course");
    }
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
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='main-course-container'>
        <div className='new-course-container'>
          <div className='pic-course'>
            <div className='upload-pic'>
              {selectedFile ? (
                <img id='preview' src={preview} alt='' />
              ) : (
                <img
                  src='https://cdn-icons-png.flaticon.com/512/7235/7235820.png'
                  alt=''
                />
              )}
            </div>

            <div className='upload-pic-banner'>
              <input
                type='file'
                id='image'
                name='image'
                value={values.image}
                onChange={(e) => {
                  handleInputChange(e);
                  onSelectFile(e);
                }}
                required
              ></input>
            </div>
          </div>
          <div className='file-name'></div>
          <div className='title'>
            <input
              type='text'
              value={values.name}
              placeholder='Title'
              name='name'
              onChange={handleInputChange}
            />
            <hr />
          </div>
          <div className='description'>
            <input
              type='text'
              placeholder='Description'
              value={values.description}
              name='description'
              onChange={handleInputChange}
            />

            <hr />
          </div>
          <div className='category'>
            <input
              placeholder='Category'
              type='text'
              value={values.category}
              name='category'
              onChange={handleInputChange}
            />
            <hr />
          </div>
          <div className='nav-btns'>
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
    </>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(CreateCourse);
