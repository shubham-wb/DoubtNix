import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const headers = {
    "content-type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  console.log(config, url);

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (data.data) {
      return {
        data: data,
        success: true,
      };
    }
    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
};

export const login = (email, hashed_password) => {
  return customFetch(API_URLS.login(), {
    method: "POST",
    body: { email, hashed_password },
  });
};

export const listAllCourses = () => {
  return customFetch(API_URLS.listAllCourses(), {
    method: "GET",
  });
};

export const addCourse = (value) => {
  return customFetch(API_URLS.addCourse(), {
    method: "POST",
    body: value,
  });
};

export const listMyCourses = (id) => {
  let url = API_URLS.listMyCourses() + id;

  return customFetch(url, {
    method: "GET",
  });
};

export const getCourse = (id) => {
  let url = API_URLS.getCourse() + id;

  return customFetch(url, {
    method: "GET",
  });
};

export const publishCourse = (id) => {
  let url = API_URLS.publishCourse() + id;

  return customFetch(url, {
    method: "PATCH",
  });
};

export const deleteCourse = (id) => {
  let url = API_URLS.deleteCourse() + id;
  return customFetch(url, {
    method: "DELETE",
  });
};

export const updateCourse = (id, body) => {
  let url = API_URLS.updateCourse() + id;
  return customFetch(url, {
    method: "PATCH",
    body: body,
  });
};

export const addPost = (content) => {
  return customFetch(API_URLS.createPost(), {
    method: "POST",
    body: content,
  });
};

export const getPosts = () => {
  return customFetch(API_URLS.getPosts(), {
    method: "GET",
  });
};

export const removePost = (id, user) => {
  console.log(user);
  let url = API_URLS.removePost() + id;
  return customFetch(url, {
    method: "POST",
    body: user,
  });
};

export const resolveDoubt = (id, user) => {
  let url = API_URLS.resolveDoubt() + id;

  return customFetch(url, {
    method: "POST",
    body: user,
  });
};

export const removeComment = (id, user_id, post_id) => {
  let url = API_URLS.removeComment();
  return customFetch(url, {
    method: "POST",
    body: {
      id: id,
      userId: user_id,
      post_id: post_id,
    },
  });
};
