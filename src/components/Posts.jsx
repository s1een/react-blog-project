import React from "react";
import Post from "../components/Post";
import { usePosts } from "../hooks/usePosts";

function Posts({ filter, posts }) {
  const sorted = usePosts(posts, filter.sort, filter.query);
  return (
    <main className="wrapper">
      <div className="posts">
        {!sorted.length && (
          <div className="post-item">
            <h1 className="error">No posts found!</h1>
          </div>
        )}
        {sorted.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            avatar={post.avatar}
          />
        ))}
      </div>
    </main>
  );
}

export default Posts;
