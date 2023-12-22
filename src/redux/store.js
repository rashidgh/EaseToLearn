import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducer";

let store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

export default store;
