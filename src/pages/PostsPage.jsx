import React, { useEffect } from "react";
import PostFilter from "../components/PostFilter";
import Posts from "../components/Posts";
import Spin from "../components/Spin";
import { useState } from "react";
import { postsLoad } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function PostsPage() {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const spinner = useSelector((state) => state.appReducer.loading);
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsLoad());
  }, []);

  return (
    <>
      <PostFilter filter={filter} setFilter={setFilter} />
      {spinner ? (
        <Spin spinner={spinner} />
      ) : (
        <Posts posts={posts} filter={filter} />
      )}
    </>
  );
}

export default PostsPage;
