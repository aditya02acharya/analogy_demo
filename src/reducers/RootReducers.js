import { TOGGLE_MENU } from "../actions/types";

const initialState = {
  menuBarVisible: undefined
};

const RootReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                menuBarVisible: action.payload,
            };
        default:
            return state;
    }
};

export default RootReducers;