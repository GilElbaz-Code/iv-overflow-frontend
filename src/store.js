import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/authReducer";
import questionsReducer from "./redux/reducers/questionsReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    question: questionsReducer,
  },
});
