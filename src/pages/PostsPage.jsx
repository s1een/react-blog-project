import React from "react";
import PostFilter from "../components/PostFilter";
import Posts from "../components/Posts";
import Spin from "../components/Spin";
import { useState } from "react";

function PostsPage() {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  return (
    <>
      <PostFilter filter={filter} setFilter={setFilter} />
      <Spin />
      <Posts filter={filter} />
    </>
  );
}

export default PostsPage;
