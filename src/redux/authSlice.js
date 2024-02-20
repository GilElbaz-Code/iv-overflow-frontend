import { createSlice } from "@reduxjs/toolkit";
import { loginUserApi } from "../api"; // Import the API function

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    token: null,
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.error = null;
    },
    loginUserFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginUserSuccess, loginUserFailure, logoutUser } =
  authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const data = await loginUserApi(credentials);
    dispatch(loginUserSuccess(data));
  } catch (error) {
    dispatch(loginUserFailure(error));
  }
};

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectToken = (state) => state.auth.token;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
