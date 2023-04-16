import { configureStore } from "@reduxjs/toolkit";

import languageReducer from "./languageSlice";
import menuReducer from "./menuSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    menu: menuReducer,
  },
});

export default store;
