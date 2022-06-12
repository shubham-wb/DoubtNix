import { useState } from "react";
import { connect } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@mui/material";
import { addPost } from "../../api";
import { addNewPost } from "../../actions/post";
const CreatePost = (props) => {
  let [isChecked, setIsChecked] = useState(false);
  let { user } = props;
  let [post, setPost] = useState({
    content: "",
    doubt: false,
    photo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prevState) => ({
      post: {
        // object that we want to update
        ...prevState.post, // keep all other key-value pairs
        user: user,
        [name]: value, // update the value of specific key
      },
    }));
  };
  //create post
  const handleSubmit = async () => {
    const response = await addPost(post);

    if (response.success) {
      console.log(response);
      props.addNewPost(response.data.data.post); //sending to store
      console.log(props);
      props.data();
      setPost(
        (post = {
          content: "",
          doubt: false,
          photo: "",
        })
      );
      setIsChecked((isChecked = false));
      toast.success("post created successfully");
    } else {
      toast.error("cannot create post");
    }
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
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='create-post'>
        <div
          style={{
            height: "20%",
            width: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "60%",
              width: "60%",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <span
              style={{ color: "black", fontWeight: 700, marginRight: "20px" }}
            >
              Doubt
            </span>

            <section className='model-2'>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  value={post.doubt}
                  name='doubt'
                  checked={isChecked}
                  onChange={handleSelect}
                />
                <label></label>
              </div>
            </section>
          </div>
          <Button
            variant='contained'
            style={{
              position: "relative",
              background: "#0202a6",
              textTransform: "inherit",
              width: "40%",
              height: "60%",
              marginLeft: "10px",
              justifyContent: "flex-start",
              fontSize: "12px",
            }}
          >
            <input id='post-img-up' type='file'></input>
            <span style={{ width: "100%", position: "absolute", left: "0px" }}>
              Add Image
            </span>
          </Button>
        </div>
        <textarea
          type='text'
          style={{
            height: "50%",
            width: "90%",
            fontSize: "15px",
            padding: "10px",
            resize: "none",
          }}
          value={post.content}
          name='content'
          onChange={handleChange}
        ></textarea>
        <div classNameName='post-btn'>
          <Button
            variant='contained'
            style={{
              background: "#0202a6",
              textTransform: "inherit",
              width: "100px",
              height: "70%",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "600",
              marginRight: "50px",
            }}
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { authReducer } = state;
  return authReducer;
};
export default connect(mapStateToProps, { addNewPost })(CreatePost);
