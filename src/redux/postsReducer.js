import { POSTS_LOAD, POST_CREATE, POST_DELETE, POST_EDIT } from "./types";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CREATE:
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    case POST_EDIT:
      return {
        ...state,
        posts: [
          ...state.posts.map((el) =>
            el.id == action.data.id
              ? { ...el, title: action.data.title, body: action.data.body }
              : el
          ),
        ],
      };
    case POST_DELETE:
      const id = action.data;
      const { posts } = state;
      const itemIndex = posts.findIndex((res) => res.id === id);
      const nextPost = [
        ...posts.slice(0, itemIndex),
        ...posts.slice(itemIndex + 1),
      ];
      return { ...state, posts: nextPost };
    case POSTS_LOAD:
      const newPosts = action.data.map((el, index) => {
        return {
          id: el.id,
          userId: index,
          title: el.title,
          body: el.body,
          avatar: el.avatar,
        };
      });
      return {
        ...state,
        posts: newPosts,
      };
    default:
      return state;
  }
};
