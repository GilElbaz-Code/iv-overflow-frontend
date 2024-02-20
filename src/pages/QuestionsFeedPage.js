import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FeedLogo,
  FeedHeaderContainer,
  FeedSearchContainer,
  FeedSearchInput,
  FeedAskQuestionButton,
  FeedLogoutButton,
  FeedQuestionsContainer,
  FeedQuestionContainer,
  FeedQuestionTitle,
  FeedQuestionContent,
} from "../styles/QuestionsFeedPageStyles";
import logo from "../assests/images/logo.png";
import { fetchQuestions } from "../redux/actions/questionActions";

const QuestionFeedPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <div>
      {/* Header Container */}
      <FeedHeaderContainer>
        <FeedLogo src={logo} alt="Logo" />
        <FeedSearchContainer>
          <FeedSearchInput type="text" placeholder="Search..." />
          <FeedAskQuestionButton>Ask New Question</FeedAskQuestionButton>
        </FeedSearchContainer>
        <FeedLogoutButton>Logout</FeedLogoutButton>
      </FeedHeaderContainer>

      {/* Questions Container */}
      <FeedQuestionsContainer>
        {questions.map((question) => (
          <FeedQuestionContainer key={question.id}>
            <FeedQuestionTitle>{question.title}</FeedQuestionTitle>
            <FeedQuestionContent>{question.content}</FeedQuestionContent>
            <div>
              Votes: {question.votes} | Answers: {question.answers}
            </div>
          </FeedQuestionContainer>
        ))}
      </FeedQuestionsContainer>
    </div>
  );
};

export default QuestionFeedPage;
