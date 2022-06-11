import {
  ADD_POSTS_TO_STATE,
  ADD_COMMENT,
  DELETE_POST,
  RESOLVE_DOUBT,
  DELETE_COMMENT,
  ADD_NEW_POST,
} from "../actions/post";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS_TO_STATE: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    case ADD_NEW_POST: {
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
    }
    case ADD_COMMENT: {
      let post = state.posts.filter(() => post._id === action.postID);

      if (!post.comment) {
        post.comment = [];
      }

      post.comment.push(action.comment);

      let filteredArray = state.posts.filter(
        (post) => post._id !== action.postID
      );
      return {
        ...state,
        posts: [...filteredArray, post],
      };
    }
    case DELETE_POST: {
      let filteredArray = state.posts.filter((post) => post._id !== action.id);

      return {
        ...state,
        filteredArray,
      };
    }
    case DELETE_COMMENT: {
      let post = state.posts.filter(() => post._id === action.postID);

      post.comments = post.comments.filter(
        (comment) => comment._id !== action.commentID
      );

      let filteredArray = state.posts.filter(
        (post) => post._id !== action.postID
      );

      return {
        ...state,
        posts: [...filteredArray, post],
      };
    }

    case RESOLVE_DOUBT: {
      let post = state.posts.filter(() => post._id === action.postID);

      post.isDoubt = false;

      let filteredArray = state.posts.filter(
        (post) => post._id !== action.postID
      );

      return {
        ...state,
        posts: [...filteredArray, post],
      };
    }

    default:
      return state;
  }
};
