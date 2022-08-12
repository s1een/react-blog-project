import {
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  MODAL_DISPLAY_OFF,
  MODAL_DISPLAY_ON,
} from "./types";

const initialState = {
  loading: false,
  modal: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
