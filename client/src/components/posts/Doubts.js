import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const Doubts = (props) => {
  const { posts } = props.postsReducer;
  let [doubts, setDoubts] = useState([]);
  let [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchDoubts() {
      let response = await posts.posts;

      setPost((post = response.data));
    }
    fetchDoubts();
  });

  setTimeout(() => {
    if (posts.length !== 0) {
      var array = post.filter((elem) => elem["doubt"] === true);
    }
    setDoubts((doubts = array));
  }, 500);

  return (
    <>
      <div>Doubts Section</div>
      <ul>
        {doubts
          ? doubts.map((elem) => {
              return <li>{elem.content}</li>;
            })
          : null}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  const { postsReducer } = state;
  return postsReducer;
};

export default connect(mapStateToProps)(Doubts);
