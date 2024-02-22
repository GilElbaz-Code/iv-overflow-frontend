import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "../../api";

// Async action to perform user info API call
export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (token, { rejectWithValue }) => {
    try {
      const response = await getUserInfo(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
