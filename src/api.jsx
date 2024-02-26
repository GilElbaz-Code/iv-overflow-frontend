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
    throw new ApiError(error.response.status, error.response.data);
  } else if (error.request) {
    throw new ApiError(500, "No response from the server");
  } else {
    throw new ApiError(500, error.message);
  }
};

export const loginUserApi = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response;
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

export const fetchSingleQuestionApi = async (questionId, token) => {
  try {
    const response = await axios.get(`${API_URL}/questions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        questionId: `${questionId}`,
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

export const fetchAnswersApi = async (questionId, token) => {
  try {
    const response = await axios.get(`${API_URL}/answers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        questionId: `${questionId}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const answerQuestionApi = async (answerData, token) => {
  try {
    const response = await axios.post(`${API_URL}/answers`, answerData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getAnswerTotalVotes = async (questionId, token) => {
  try {
    const response = await axios.get(`${API_URL}/votes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        questionId: questionId,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const voteAnswerApi = async (answerId, voteType, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/votes`,
      { answerId, voteType },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
