import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(state.auth);
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authReducer.actions;
export const selectToken = (state) => state.auth.token;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;

export default authReducer.reducer;
