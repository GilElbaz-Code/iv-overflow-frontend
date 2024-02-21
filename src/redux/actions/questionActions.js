import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuestionsApi, askQuestionApi } from "../../api";
import { selectToken } from "../reducers/authReducer"; // adjust the path based on your actual structure
import { decodeToken } from "react-jwt";

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
      const decodedToken = decodeToken(token);
      const userId = decodedToken ? decodedToken.sub : null;

      // Include user ID in the request payload
      const requestData = {
        ...questionData,
        userId: userId,
      };

      console.log(requestData);

      const response = await askQuestionApi(requestData, token); // pass the token and modified payload to the API function
      dispatch(askQuestionSuccess(response.data.question));
      return response.data.question;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
