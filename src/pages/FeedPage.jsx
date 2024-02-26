/**
 * FeedPage Component
 *
 * A component representing the main feed page with a list of questions.
 *
 * @component
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";
import { fetchQuestionsApi } from "../api";
import QuestionsList from "../components/QuestionsList";
import ConstantHeader from "../components/ConstantHeader";

const FeedPage = () => {
  // State variable for storing the list of questions
  const [questions, setQuestions] = useState([]);

  // Redux hook to get the user token
  const token = useSelector(selectToken);

  // Fetch questions from the API on component mount
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

  // Component rendering
  return (
    <div>
      <ConstantHeader></ConstantHeader>
      <div>
        <QuestionsList questions={questions}></QuestionsList>
      </div>
    </div>
  );
};

export default FeedPage;
