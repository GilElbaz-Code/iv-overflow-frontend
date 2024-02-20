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

export const fetchQuestionsApi = async (credentials) => {
  try {
    const response = await axios.get(`${API_URL}/questions`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const askQuestionApi = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/questions`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
