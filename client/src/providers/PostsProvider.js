import { createContext } from "react";

import { useProvidePosts } from "../hooks";

const initialState = {
  posts: [],
  users: [],
  loading: true,
  addPostToState: () => {},
  addComment: () => {},
  deletePost: () => {},
  doubtResolve: () => {},
  deleteComment: () => {},
};

export const PostsContext = createContext(initialState);

export const PostsProvider = ({ children }) => {
  const posts = useProvidePosts();

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};
