import {
  POSTS_LOAD,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  POST_CREATE,
  MODAL_DISPLAY_ON,
  MODAL_DISPLAY_OFF,
  POST_DELETE,
  POST_EDIT,
  MODAL_EDIT_ON,
  MODAL_EDIT_OFF,
  LOGIN_ON,
  LOGIN_OFF,
} from "./types";

export function userLogin(email, password) {
  return {
    type: LOGIN_ON,
    data: {
      email,
      password,
    },
  };
}
export function userLogout() {
  return {
    type: LOGIN_OFF,
  };
}
export function postCreate(title, body, id) {
  return {
    type: POST_CREATE,
    data: {
      id,
      title,
      body,
      avatar: `https://robohash.org/${id}`,
    },
  };
}
export function postDelete(id) {
  return {
    type: POST_DELETE,
    data: id,
  };
}

export function postEdit(id, title, body) {
  return {
    type: POST_EDIT,
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
      const newData = data.map((el, index) => {
        return {
          ...el,
          avatar: `https://robohash.org/${index + 1}`,
        };
      });
      setTimeout(() => {
        dispatch({
          type: POSTS_LOAD,
          data: newData,
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

export function showEdit() {
  return {
    type: MODAL_EDIT_ON,
  };
}

export function closeEdit() {
  return {
    type: MODAL_EDIT_OFF,
  };
}
