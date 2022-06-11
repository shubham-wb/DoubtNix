export const ADD_POSTS_TO_STATE = "ADD_POSTS_TO_STATE";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_POST = "DELETE_POST";
export const RESOLVE_DOUBT = "RESOLVE_DOUBT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const addPostsToState = (posts) => {
  return {
    type: ADD_POSTS_TO_STATE,
    posts,
  };
};

export const addNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    post,
  };
};
export const addComment = (comment, postID) => {
  return {
    type: ADD_COMMENT,
    postID,
    comment,
  };
};

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id,
  };
};

export const doubtResolve = (id) => {
  return {
    type: RESOLVE_DOUBT,
    id,
  };
};

export const deleteComment = (commentID, postID) => {
  return {
    type: DELETE_COMMENT,
    commentID,
    postID,
  };
};
