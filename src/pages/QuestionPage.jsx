import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleQuestionApi, fetchAnswersApi } from "../api";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";
import { selectUserInfo } from "../redux/reducers/userReducer";
import { BlueButton, Label, Title } from "../styles/SharedStyles";
import { TagContainer, Tag } from "../styles/CardContainerStyles";
import AnswerCard from "../components/AnswerCard";
import { TextArea } from "../modals/AskQuestionModalStyle";

const QuestionPage = () => {
  // TODO: Add Header like from feed page + design + buttons functions (including voting)
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const token = useSelector(selectToken);
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      try {
        const questionResponse = await fetchSingleQuestionApi(
          token,
          questionId
        );
        setQuestion(questionResponse.question);

        const answersResponse = await fetchAnswersApi(token, questionId);
        setAnswers(answersResponse.answers);
      } catch (error) {
        console.error("Error fetching question and answers:", error);
      }
    };

    fetchQuestionAndAnswers();
  }, [questionId, token]);

  if (!question || answers.length === 0) {
    // You can render a loading state or handle the case where the data hasn't been fetched yet
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title>{question.title}</Title>
      <Label>
        Asked {question.date} by {userInfo}
      </Label>
      <p>{question.content}</p>
      <TagContainer>
        {question.tags.map((tag) => (
          <Tag key={tag.id}>{tag}</Tag>
        ))}
      </TagContainer>

      <Title>Answers</Title>
      <ul>
        {answers.map((answer) => (
          <li key={answer.answer_id}>
            <AnswerCard answer={answer}></AnswerCard>
          </li>
        ))}
      </ul>

      <TextArea placeholder="Type answer here"></TextArea>
      <BlueButton>Answer</BlueButton>
    </div>
  );
};

export default QuestionPage;
