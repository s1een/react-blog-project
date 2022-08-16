import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import { useSelector } from "react-redux";

function AppRouter() {
  const login = useSelector((state) => state.appReducer.user.login);
  return (
    <Routes>
      <Route
        path="/react-blog-project"
        element={login ? <MainPage /> : <PostsPage />}
      />
      {!login && (
        <>
          <Route path="posts">
            <Route path=":id" element={<PostPage />} />
            <Route path="" element={<PostsPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </>
      )}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}

export default AppRouter;
