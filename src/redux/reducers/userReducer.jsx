import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  error: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    getUserInfoFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserInfo, getUserInfoFailure } = userReducer.actions;
export const selectUserInfo = (state) => state.user.userInfo;

export default userReducer.reducer;
