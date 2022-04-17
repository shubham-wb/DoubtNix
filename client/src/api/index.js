import { API_URLS, getFormBody, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const headers = {
    "content-type": "application/json",
  };

  if (token) {
    headers["x-auth-token"] = token;
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

  try {
    console.log(config, url);
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
