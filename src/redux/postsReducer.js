import { POSTS_LOAD, POST_CREATE } from "./types";

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
    case POSTS_LOAD:
      const newPosts = action.data.map((el, index) => {
        return {
          id: el.id,
          userId: index,
          title: el.title,
          body: el.body,
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
