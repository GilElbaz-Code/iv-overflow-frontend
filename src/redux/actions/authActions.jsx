import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi } from "../../api";

const loginStart = () => ({
  type: "auth/loginStart",
});

const loginSuccess = (token) => ({
  type: "auth/loginSuccess",
  payload: token,
});

const logout = () => ({
  type: "auth/logout",
});

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

const logoutUser = () => async (dispatch) => {
  dispatch(logout());
};

export { loginUser, logoutUser };
