/**
 * QuestionPage Component
 *
 * A component representing the page for a single question, including its details,
 * answers, and the ability to submit new answers.
 *
 * @component
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleQuestionApi, fetchAnswersApi } from "../api";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";
import { selectUserInfo } from "../redux/reducers/userReducer";
import { Paragraph, SecondaryTitle, Title } from "../styles/SharedStyles";
import { TagContainer, Tag } from "../styles/CardContainerStyles";
import AnswerCard from "../components/AnswerCard";
import AnswerInput from "../components/AnswerInput";
import ConstantHeader from "../components/ConstantHeader";

const QuestionPage = () => {
  // Get the questionId from the URL parameters
  const { questionId } = useParams();

  // State variables for storing question details and answers
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  // Redux hooks
  const token = useSelector(selectToken);
  const userInfo = useSelector(selectUserInfo);

  // Fetch question details and answers on component mount
  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      try {
        const questionResponse = await fetchSingleQuestionApi(
          questionId,
          token
        );
        setQuestion(questionResponse.question);

        const answersResponse = await fetchAnswersApi(questionId, token);
        setAnswers(answersResponse.answers);
      } catch (error) {
        console.error("Error fetching question and answers:", error);
      }
    };

    fetchQuestionAndAnswers();
  }, [questionId, token]);

  // Function to add a new answer to the answers state
  const addAnswer = (newAnswer) => {
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  // Display a loading message if the question details are still being fetched
  if (!question) {
    return <div>Loading..</div>;
  }

  // Component rendering
  return (
    <div>
      <ConstantHeader></ConstantHeader>
      <Title>{question.title}</Title>
      <SecondaryTitle>
        Asked {question.date} by {userInfo}
      </SecondaryTitle>
      <Paragraph>{question.content}</Paragraph>
      <TagContainer>
        {question.tags.map((tag) => (
          <Tag key={tag.id}>{tag}</Tag>
        ))}
      </TagContainer>

      <SecondaryTitle>Answers</SecondaryTitle>
      {answers.map((answer) => (
        <AnswerCard key={answer.answer_id} answer={answer} />
      ))}
      <AnswerInput questionId={questionId} addAnswer={addAnswer} />
    </div>
  );
};

export default QuestionPage;
