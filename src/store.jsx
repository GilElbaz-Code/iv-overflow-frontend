import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/authReducer";
import userReducer from "./redux/reducers/userReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
