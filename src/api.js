// api/index.js

import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const loginUserApi = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchQuestionsApi = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/questions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const askQuestionApi = async (questionData, config) => {
  try {
    const response = await axios.post(
      `${API_URL}/questions`,
      questionData,
      config
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
