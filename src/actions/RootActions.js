import { TOGGLE_MENU } from "actions/types";

export const toggleMenu = (visibility) => {
  return {
    type: TOGGLE_MENU,
    payload: visibility,
  };
};