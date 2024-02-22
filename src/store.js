import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/authReducer";
import questionsReducer from "./redux/reducers/questionsReducer";
import userReducer from "./redux/reducers/userReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    question: questionsReducer,
    user: userReducer,
  },
});
