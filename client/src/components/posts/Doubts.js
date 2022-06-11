import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const Doubts = (props) => {
  const { posts } = props.postsReducer;
  let [doubts, setDoubts] = useState([]);

  setTimeout(() => {
    if (posts.length !== 0) {
      var array = posts.filter((elem) => elem["doubt"] === true);
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
