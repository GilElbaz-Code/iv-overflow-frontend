import { createSlice } from "@reduxjs/toolkit";

const userVoteReducer = createSlice({
  name: "userVote",
  initialState: null,
  reducers: {
    setUserVote: (state, action) => action.payload,
  },
});

export const { setUserVote } = userVoteReducer.actions;
export default userVoteReducer.reducer;
