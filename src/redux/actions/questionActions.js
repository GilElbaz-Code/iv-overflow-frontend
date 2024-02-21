import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuestionsApi, askQuestionApi } from "../../api";
import { selectToken } from "../reducers/authReducer"; // adjust the path based on your actual structure

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
      console.log(response);
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
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await askQuestionApi(questionData, config); // pass the token to the API function
      dispatch(askQuestionSuccess(response.data.question));
      return response.data.question;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
