import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuestionsApi, askQuestionApi } from "../../api";

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
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchQuestionsApi();
      dispatch(fetchQuestionsSuccess(response.data.questions));
      return response.data.questions;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const askQuestion = createAsyncThunk(
  "questions/askQuestion",
  async (questionData, { rejectWithValue, dispatch }) => {
    try {
      const response = await askQuestionApi(questionData);
      dispatch(askQuestionSuccess(response.data.question));
      return response.data.question;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
