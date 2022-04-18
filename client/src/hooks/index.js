import { useContext, useState, useEffect } from "react";
import jwt from "jwt-decode";

import { AuthContext, PostsContext, CoursesContext } from "../providers";
import {
  getCourse,
  login as userLogin,
  listAllCourses as getCourses,
  addCourse as newCourse,
  listMyCourses,
  publishMyCourse,
  publishCourse,
  deleteCourse,
  updateCourse,
} from "../api";
import {
  setItemInLocalStorage,
  LOCALSTORAGE_TOKEN_KEY,
  removeItemFromLocalStorage,
  getItemFromLocalStorage,
} from "../utils";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

      if (userToken) {
        const user = jwt(userToken);
        setUser({
          ...user,
        });
      }

      setLoading(false);
    };

    getUser();
  }, []);

  const login = async (email, password) => {
    const response = await userLogin(email, password);

    if (response) {
      setUser(response.data.user);
      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.data ? response.data.data : null
      );
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
    // };
    //   const updateUser = async (userId, name, password, confirmPassword) => {
    //   const response = await editProfile(userId, name, password, confirmPassword);

    //   console.log("response", response);
    //   if (response.success) {
    //     setUser(response.data.user);
    //     setItemInLocalStorage(
    //       LOCALSTORAGE_TOKEN_KEY,
    //       response.data.token ? response.data.token : null
    //     );
    //     return {
    //       success: true,
    //     };
    //   } else {
    //     return {
    //       success: false,
    //       message: response.message,
    //     };
    //   }
    // };
    //   const signup = async (name, email, password, confirmPassword) => {
    //     const response = await register(name, email, password, confirmPassword);

    //     if (response.success) {
    //       return {
    //         success: true,
    //       };
    //     } else {
    //       return {
    //         success: false,
    //         message: response.message,
    //       };
    //     }
  };

  const logout = () => {
    setUser(null);
    removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };

  return {
    user,
    login,
    loading,
  };
};

export const useCourses = () => {
  return useContext(CoursesContext);
};

export const useProvideCourses = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const listAllCourses = async () => {
    const response = await getCourses();

    if (response) {
      setCourses(response.data.data);
      return {
        data: response.data.data,
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const addCourse = async (values) => {
    const response = await newCourse(values);
    console.log(response, "response");
    if (response) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  };

  const myCourses = async (id) => {
    const response = await listMyCourses(id);

    if (response) {
      return {
        data: response.data.data,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  };

  const getCourseById = async (id) => {
    const response = await getCourse(id);
    console.log(response);
    if (response) {
      return {
        data: response.data.data,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  };

  const publishMyCourse = async (id) => {
    const response = await publishCourse(id);
    console.log(response);
    if (response) {
      return {
        // data: response.data.data,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  };

  const deleteOne = async (id) => {
    const response = await deleteCourse(id);
    if (response) {
      return {
        success: true,
      };
    } else {
      return { success: false };
    }
  };

  const updateTutCourse = async (id, body) => {
    const response = await updateCourse(id, body);
    if (response) {
      return {
        success: true,
      };
    } else {
      return { success: false };
    }
  };

  return {
    updateTutCourse,
    publishMyCourse,
    listAllCourses,
    courses,
    addCourse,
    myCourses,
    getCourseById,
    deleteOne,
  };
};

export const usePosts = () => {
  return useContext(PostsContext);
};

// export const useProvidePosts = () => {
//   const [posts, setPosts] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await getPosts();

//       if (response.success) {
//         setPosts(response.data.posts);
//       }

//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   const addPostToState = (post) => {
//     const newPosts = [post, ...posts];

//     setPosts(newPosts);
//   };

//   const addComment = (comment, postId) => {
//     const newPosts = posts.map((post) => {
//       if (post._id === postId) {
//         return { ...post, comments: [...post.comments, comment] };
//       }
//       return post;
//     });

//     setPosts(newPosts);
//   };

//   return {
//     data: posts,
//     loading,
//     addPostToState,
//     addComment,
//   };
// };
