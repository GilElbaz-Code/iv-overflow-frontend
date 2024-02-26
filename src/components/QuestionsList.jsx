/**
 * QuestionList Component
 *
 * A component to display a list of questions fetched from the API.
 *
 * @component
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { fetchQuestionsApi } from "../api";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";

const QuestionList = () => {
  // State variable for storing the list of questions
  const [questions, setQuestions] = useState([]);

  // Redux hook to get the user token
  const token = useSelector(selectToken);

  // Fetch questions from the API on component mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = await fetchQuestionsApi(token);
        setQuestions(questionsData.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [token]);

  // Display a loading message if questions are still being fetched
  if (!questions) {
    return <div>Loading...</div>;
  }

  // Component rendering
  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.question_id} data={question} />
      ))}
    </div>
  );
};

export default QuestionList;
