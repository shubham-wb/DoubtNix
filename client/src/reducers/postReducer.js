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
      console.log(action, "action tea");
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
    }
    case ADD_COMMENT: {
      let post = state.posts.find((element) => element._id === action.postID);

      if (!post.comments.length) {
        post.comments = [];
      }
      post.comments.push(action.content);
      console.log(post, "reducer");
      let filteredArray = state.posts.filter(
        (post) => post._id !== action.postID
      );
      return {
        ...state,
        posts: [...filteredArray, post],
      };
    }
    case DELETE_POST: {
      console.log(action, "action");
      let filteredArray = state.posts.filter((post) => post._id !== action.id);

      return {
        ...state,
        posts: [...filteredArray],
      };
    }
    case DELETE_COMMENT: {
      let post = state.posts.find((element) => element._id === action.postID);
      post.comments = post.comments.filter(
        (comment) => comment._id !== action.commentID
      );
      console.log(post.comments.length);
      let filteredArray = state.posts.filter(
        (post) => post._id !== action.postID
      );
      return {
        ...state,
        posts: [...filteredArray, post],
      };
    }

    case RESOLVE_DOUBT: {
      let post = state.posts.find((elem) => elem._id === action.id);

      post.doubt = false;

      console.log(post);

      let filteredArray = state.posts.filter((post) => post._id !== action.id);

      return {
        ...state,
        posts: [...filteredArray, post],
      };
    }

    default:
      return state;
  }
};
