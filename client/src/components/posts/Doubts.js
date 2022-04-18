import React, { useEffect, useState } from "react";
import { usePosts } from "../../hooks";

const Doubts = () => {
  let posts = usePosts();
  let [post, setPost] = useState([]);

  useEffect(() => {
    async function poster() {
      let response = await posts.posts;

      setPost((post = response.data));
    }
    poster();
  });

  let doubts = post.filter((elem) => elem["doubt"] == true);

  return (
    <>
      <div>Doubts Section</div>
      <ul>
        {doubts.map((elem) => {
          return <li>{elem.content}</li>;
        })}
      </ul>
    </>
  );
};

export default Doubts;
