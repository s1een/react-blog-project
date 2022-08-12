import {
  POSTS_LOAD,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  POST_CREATE,
  MODAL_DISPLAY_ON,
  MODAL_DISPLAY_OFF,
} from "./types";

export function postCreate(title, body, id) {
  return {
    type: POST_CREATE,
    data: {
      id,
      title,
      body,
    },
  };
}

export function postsLoad() {
  return async (dispatch) => {
    dispatch(loaderOn());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      setTimeout(() => {
        dispatch({
          type: POSTS_LOAD,
          data: data,
        });
        dispatch(loaderOff());
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(loaderOff());
    }
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function showModal() {
  return {
    type: MODAL_DISPLAY_ON,
  };
}

export function closeModal() {
  return {
    type: MODAL_DISPLAY_OFF,
  };
}
