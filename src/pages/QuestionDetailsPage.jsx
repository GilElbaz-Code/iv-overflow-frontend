// pages/QuestionDetailPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../redux/actions/questionActions";
import { QuestionContainer, QuestionTitle, QuestionContent, UserInfo, UserName, TimeElapsed, TagContainer, Tag } from "../styles/QuestionStyles";

const QuestionDetailsPage = () => {
  const { questionTitle } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question.selectedQuestion);

  useEffect(() => {
    dispatch(fetchQuestions(questionTitle));
  }, [dispatch, questionTitle]);

  if (!question) {
    // Handle loading or not found state
    return <p>Loading...</p>;
  }

  return (
    <QuestionContainer>
      <QuestionTitle>{question.title}</QuestionTitle>
      <QuestionContent>{question.content}</QuestionContent>
      <UserInfo>
        <UserName>{question.created_by}</UserName>
        <TimeElapsed>{/* Calculate time elapsed */}</TimeElapsed>
        <TagContainer>
          {question.categories.map((category, index) => (
            <Tag key={index}>{category}</Tag>
          ))}
        </TagContainer>
      </UserInfo>
    </QuestionContainer>
  );
};

export default QuestionDetailsPage;
