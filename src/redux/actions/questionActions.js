import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuestionsApi, askQuestionApi } from "../../api";
import { selectToken } from "../reducers/authReducer"; // adjust the path based on your actual structure
import { selectUserInfo } from "../reducers/userReducer";

export const fetchQuestionsSuccess = (questions) => ({
  type: "questions/fetchQuestionsSuccess",
  payload: questions,
});

export const askQuestionSuccess = (question) => ({
  type: "questions/askQuestionSuccess",
  payload: question,
});

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const token = selectToken(getState()); // access token from the Redux store
      const response = await fetchQuestionsApi(token); // pass the token to the API function
      dispatch(fetchQuestionsSuccess(response.data.questions));
      return response.data.questions;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const askQuestion = createAsyncThunk(
  "questions/askQuestion",
  async (questionData, { rejectWithValue, dispatch, getState }) => {
    try {
      const token = selectToken(getState()); // access token from the Redux store
      const userInfo = selectUserInfo(getState()); // Access userInfo from the Redux store
      console.log(userInfo);
      const requestData = {
        ...questionData,
        user_id: userInfo.user_id,
        full_name: userInfo.full_name,
      };

      const response = await askQuestionApi(requestData, token); // pass the token and modified payload to the API function
      dispatch(askQuestionSuccess(response.data.question));
      return response.data.question;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
