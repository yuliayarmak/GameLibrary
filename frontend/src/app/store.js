import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "./slice/auth";
// import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: [thunk],
});
