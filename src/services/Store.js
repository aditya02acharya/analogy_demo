import { configureStore } from "@reduxjs/toolkit"

import rootReducer from "reducers";

export const configStore = (initialState) => {
    return configureStore({reducer: rootReducer, initialState});

};

const Store = configStore();

export default Store;