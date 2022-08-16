import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      switch (sort) {
        case "id":
          return [...posts].sort((a, b) => b[sort] - a[sort]);
        case "title":
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        case "body":
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        default:
          return posts;
      }
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};

export function postValidate(title, text) {
  if (
    title &&
    text &&
    title.length > 5 &&
    title.length < 80 &&
    text.length > 5 &&
    title.length < 400
  ) {
    return true;
  } else {
    return false;
  }
}
