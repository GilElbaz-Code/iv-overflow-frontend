import { createAsyncThunk } from "@reduxjs/toolkit";
import { voteAnswerApi } from "../../api";
import { setUserVote } from "../reducers/userVoteReducer";

export const voteAnswer = createAsyncThunk(
  "userVote/voteAnswer",
  async ({ answerId, voteType, token }, { rejectWithValue, dispatch }) => {
    try {
      await voteAnswerApi(answerId, voteType, token);
      dispatch(setUserVote(voteType));
      return voteType;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
