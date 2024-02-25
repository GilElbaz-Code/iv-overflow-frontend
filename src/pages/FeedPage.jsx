import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";
import { fetchQuestionsApi } from "../api";
import QuestionsList from "../components/QuestionsList";
import ConstantHeader from "../components/ConstantHeader";

const QuestionFeedPage = () => {
  const [questions, setQuestions] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await fetchQuestionsApi(token);
        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [token]);

  return (
    <div>
      <ConstantHeader></ConstantHeader>
      <div>
        <QuestionsList questions={questions}></QuestionsList>
      </div>
    </div>
  );
};

export default QuestionFeedPage;
