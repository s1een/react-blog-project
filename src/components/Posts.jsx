import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsLoad } from "../redux/actions";
import Post from "../components/Post";
import { useSortedPosts } from "../hooks/usePosts";

function Posts({ filter }) {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();
  const sorted = useSortedPosts(posts, filter.sort);
  useEffect(() => {
    dispatch(postsLoad());
  }, []);

  return (
    <main className="wrapper">
      <div className="posts">
        {sorted.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </main>
  );
}

export default Posts;
