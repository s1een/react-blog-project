import {
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  LOGIN_OFF,
  LOGIN_ON,
  MODAL_DISPLAY_OFF,
  MODAL_DISPLAY_ON,
  MODAL_EDIT_OFF,
  MODAL_EDIT_ON,
} from "./types";

const initialState = {
  loading: false,
  modal: false,
  edit: false,
  user: {
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    login: localStorage.getItem("email") ? false : true,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ON:
      localStorage.setItem("email", action.data.email);
      localStorage.setItem("password", action.data.password);
      return {
        ...state,
        user: {
          ...state.user,
          email: action.data.email,
          password: action.data.password,
          login: false,
        },
      };
    case LOGIN_OFF:
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      return {
        ...state,
        user: {
          ...state.user,
          email: "",
          password: "",
          login: true,
        },
      };
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };
    case MODAL_DISPLAY_OFF:
      return {
        ...state,
        modal: false,
      };
    case MODAL_DISPLAY_ON:
      return {
        ...state,
        modal: true,
      };
    case MODAL_EDIT_ON:
      return {
        ...state,
        edit: true,
      };
    case MODAL_EDIT_OFF:
      return {
        ...state,
        edit: false,
      };
    default:
      return state;
  }
};
