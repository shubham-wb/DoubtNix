import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./providers";
import { CoursesProvider } from "./providers";
import { PostsProvider } from "./providers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CoursesProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </CoursesProvider>
  </AuthProvider>
);
