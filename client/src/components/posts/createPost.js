import { useState } from "react";
import { addPost } from "../../api";
import { usePosts } from "../../hooks";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../hooks";
const CreatePost = (props) => {
  let auth = useAuth();
  let [isChecked, setIsChecked] = useState(false);
  let [post, setPost] = useState({
    content: "",
    doubt: false,
    photo: "",
  });

  const posts = usePosts();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prevState) => ({
      post: {
        // object that we want to update
        ...prevState.post, // keep all other key-value pairs
        user: auth.user,
        [name]: value, // update the value of specific key
      },
    }));
  };

  const handleSubmit = async () => {
    const response = await addPost(post);

    if (response.success) {
      posts.addPostToState(response.data.post);

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
      <Toaster position="top-center" reverseOrder={false} />
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
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
