// authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi } from "../../api"; // Import your API function

// Action for successful login
export const loginSuccess = (token) => ({
  type: "auth/loginSuccess",
  payload: token,
});

// Action for login failure
export const loginFailure = (error) => ({
  type: "auth/loginFailure",
  payload: error,
});

// Async action to perform login API call
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await loginUserApi(credentials);
      dispatch(loginSuccess(response.data.token)); // Dispatch loginSuccess with the token
      return response.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
