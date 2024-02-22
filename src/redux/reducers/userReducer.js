import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfo } from "../actions/userActions";

const initialState = {
  userInfo: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    getUserInfoFailure: (state, action) => {
      // Handle failure, if needed
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const { setUserInfo, getUserInfoFailure } = userReducer.actions;
export const selectUserInfo = (state) => state.user.userInfo;

export default userReducer.reducer;
