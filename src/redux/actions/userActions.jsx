import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "../../api";
import { setUserInfo } from "../reducers/userReducer";

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const response = await getUserInfo(token);
      dispatch(setUserInfo(response.data.fullName));
      return response.data.fullName;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
