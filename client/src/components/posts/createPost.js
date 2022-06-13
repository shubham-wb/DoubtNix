import { useEffect, useState } from "react";
import { connect } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@mui/material";
import { addPost } from "../../api";
import { addNewPost } from "../../actions/post";
import addPic from "../../assets/images/add_pic.svg";
import "../../assets/css/createPost.css"; //css
import { TextField } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import close from "../../assets/images/close_white.svg";
const CreatePost = (props) => {
  let [isChecked, setIsChecked] = useState(false);
  let { user } = props;
  let [post, setPost] = useState({
    title: "",
    content: "",
    doubt: false,
    photo: "",
  });

  useEffect(() => {
    document.keyPress = function (evt) {
      evt = evt || window.event;
      console.log(evt);
      if (evt.keyCode === 27) {
        props.data();
        return;
      }
      return () => {
        document.removeEventListener("keypress");
      };
    };
  }, []);
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
        <div className='create-post-wrapper'>
          <div className='close-create-post' onClick={() => props.data()}>
            <img src={close} alt='close'></img>
          </div>
          <div
            style={{
              height: "20%",
              width: "100%",
              display: "flex",
              alignIitems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginTop: "15px",

                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
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
                <Tooltip title='doubt' placement='bottom'>
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
                </Tooltip>
              </section>
            </div>
            <Tooltip title='Add Picture' placement='bottom'>
              <Button
                variant='contained'
                style={{
                  position: "relative",
                  background: "#ffffff",
                  marginRight: "20px",
                  marginTop: "15px",
                  border: "solid 2px blue",
                  textTransform: "inherit",
                  width: "20%",
                  height: "60%",
                  justifyContent: "center",
                  fontSize: "12px",
                }}
              >
                <input id='post-img-up' type='file'></input>
                <span
                  style={{ width: "100%", position: "absolute", left: "0px" }}
                >
                  <img
                    src={addPic}
                    alt=''
                    style={{ height: "25px", width: "25px" }}
                  ></img>
                </span>
              </Button>
            </Tooltip>
          </div>
          <div
            style={{
              height: "70%",
              width: "90%",
              display: "flex",
              flexDirection: "column",

              alignItems: "center",
            }}
          >
            <TextField
              id='standard-basic'
              label='Title'
              variant='standard'
              value={post.title}
              InputLabelProps={{ shrink: true }}
              name='title'
              onChange={handleChange}
              style={{ width: "90%" }}
            />

            <TextField
              id='standard-basic'
              label='Content'
              variant='standard'
              multiline
              rows={4}
              value={post.content}
              InputLabelProps={{ shrink: true }}
              name='content'
              onChange={handleChange}
              style={{ width: "90%", marginTop: "20px" }}
            />
          </div>
          <div className='post-btn'>
            <Button
              variant='contained'
              style={{
                background: "orange",
                color: "black",
                textTransform: "inherit",
                width: "100px",
                height: "60%",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "600",
              }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </div>
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
