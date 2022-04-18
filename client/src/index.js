import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./providers";
import { PostsProvider } from "./providers";

import { CoursesProvider } from "./providers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <PostsProvider>
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </PostsProvider>
  </AuthProvider>
);
