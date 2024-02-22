// authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi } from "../../api"; // Import your API function

// Action for starting the login process
const loginStart = () => ({
  type: "auth/loginStart",
});

// Action for successful login
const loginSuccess = (token) => ({
  type: "auth/loginSuccess",
  payload: token,
});

// Action for logging out
const logout = () => ({
  type: "auth/logout",
});

// Async action to perform login API call
const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      dispatch(loginStart()); // Set loading state to true
      const response = await loginUserApi(credentials);
      dispatch(loginSuccess(response.data.token));
      return response.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async action to perform logout
const logoutUser = () => async (dispatch) => {
  dispatch(logout());
  // Redirect to the home page or login page after logout
  window.location.href = "/";
};

// Export necessary actions
export { loginUser, logoutUser };
