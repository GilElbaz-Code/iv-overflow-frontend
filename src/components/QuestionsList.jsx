import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { fetchQuestionsApi } from "../api";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionsData = await fetchQuestionsApi(token);
      setQuestions(questionsData.questions);
    };

    fetchQuestions();
  }, [token]);

  if (!questions) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.question_id} data={question} />
      ))}
    </div>
  );
};

export default QuestionList;
