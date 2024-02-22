import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuestionsApi, askQuestionApi, fetchQuestionApi } from "../../api";
import { selectToken } from "../reducers/authReducer";
import { selectUserInfo } from "../reducers/userReducer";

export const fetchQuestionsSuccess = (questions) => ({
  type: "questions/fetchQuestionsSuccess",
  payload: questions,
});

export const askQuestionSuccess = (question) => ({
  type: "questions/askQuestionSuccess",
  payload: question,
});

export const fetchQuestionSuccess = (question) => ({
  type: "questions/fetchQuestionSuccess",
  payload: question,
});

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const token = selectToken(getState());
      const response = await fetchQuestionsApi(token);
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
      const token = selectToken(getState());
      const userInfo = selectUserInfo(getState());
      const requestData = {
        ...questionData,
        user_id: userInfo.user_id,
        full_name: userInfo.full_name,
      };

      const response = await askQuestionApi(requestData, token);
      dispatch(askQuestionSuccess(response.data.question));
      return response.data.question;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchQuestion = createAsyncThunk(
  "questions/fetchQuestion",
  async (questionId, { rejectWithValue, dispatch, getState }) => {
    try {
      const token = selectToken(getState());
      const response = await fetchQuestionApi(questionId, token);
      dispatch(fetchQuestionSuccess(response.data.question));
      return response.data.question;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
