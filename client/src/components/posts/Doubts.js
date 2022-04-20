import React, { useEffect, useState } from "react";
import { usePosts } from "../../hooks";

const Doubts = () => {
  let posts = usePosts();
  let [doubts, setDoubts] = useState([]);
  let [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchDoubts() {
      let response = await posts.posts;

      setPost((post = response));
    }
    fetchDoubts();
  });

  setTimeout(() => {
    if (posts.length != 0) {
      var array = post.filter((elem) => elem["doubt"] == true);
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

export default Doubts;
