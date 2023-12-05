import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/UseReducer";
// import itemsReducer from "./reducers/itemsReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    // items: itemsReducer,
  },
});

export default store;
