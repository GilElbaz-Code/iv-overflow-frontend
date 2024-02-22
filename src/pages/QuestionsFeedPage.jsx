import React, { useState, useEffect } from "react";
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
} from "../styles/QuestionsFeedPageStyles";
import Card from "../componenets/shared/CardContainer";
import { SeparatorLine } from "../componenets/shared/SharedStyles";
import logo from "../assests/images/logo.png";
import { fetchQuestions } from "../redux/actions/questionActions";
import AskQuestionModal from "../modals/AskQuestionModal";

const QuestionFeedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.questions);
  const loading = useSelector((state) => state.question.loading);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

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
          <FeedAskQuestionButton onClick={openModal}>
            Ask New Question
          </FeedAskQuestionButton>
        </FeedSearchContainer>
        <FeedLogoutButton>Logout</FeedLogoutButton>
      </FeedHeaderContainer>

      <SeparatorLine></SeparatorLine>

      {/* Questions Container */}
      <FeedQuestionsContainer>
        {loading ? (
          <p>Loading...</p>
        ) : (
          questions.map((question) => (
            <FeedQuestionContainer key={question.id}>
              <Card data={question}></Card>
            </FeedQuestionContainer>
          ))
        )}
      </FeedQuestionsContainer>
      <AskQuestionModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default QuestionFeedPage;