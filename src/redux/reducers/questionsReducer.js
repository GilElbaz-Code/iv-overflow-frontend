const initialState = {
  questions: [],
  question: null,
  status: "idle",
  error: null,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "questions/fetchQuestions/pending":
    case "questions/fetchQuestion/pending":
    case "questions/askQuestion/pending":
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case "questions/fetchQuestions/fulfilled":
      return {
        ...state,
        status: "succeeded",
        questions: action.payload,
        error: null,
      };

    case "questions/fetchQuestion/fulfilled":
      return {
        ...state,
        status: "succeeded",
        question: action.payload,
        error: null,
      };

    case "questions/askQuestion/fulfilled":
      return {
        ...state,
        status: "succeeded",
        questions: [...state.questions, action.payload],
        error: null,
      };

    case "questions/fetchQuestions/rejected":
    case "questions/fetchQuestion/rejected":
    case "questions/askQuestion/rejected":
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };

    default:
      return state;
  }
};

export default questionsReducer;
