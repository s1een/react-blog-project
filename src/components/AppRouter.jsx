import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="posts">
        <Route path=":id" element={<PostPage />} />
        <Route path="" element={<PostsPage />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRouter;
