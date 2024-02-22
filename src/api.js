import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

class ApiError extends Error {
  constructor(status, data) {
    super(`HTTP error: ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw new ApiError(error.response.status, error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    throw new ApiError(500, "No response from the server");
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new ApiError(500, error.message);
  }
};

export const loginUserApi = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getUserInfo = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user-info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
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
    handleApiError(error);
  }
};

export const askQuestionApi = async (questionData, token) => {
  try {
    const response = await axios.post(`${API_URL}/questions`, questionData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
