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

const QuestionPage = () => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const token = useSelector(selectToken);
  const userInfo = useSelector(selectUserInfo);

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

  const addAnswer = (newAnswer) => {
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  if (!question || answers.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
        <AnswerCard answer={answer} />
      ))}
      <AnswerInput questionId={questionId} addAnswer={addAnswer} />
    </div>
  );
};

export default QuestionPage;
