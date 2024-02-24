import React, { useEffect, useState } from "react";
import {
  FeedHeaderContainer,
  FeedSearchContainer,
  FeedSearchInput,
} from "../styles/QuestionsFeedPageStyles";
import { GreenButton, Logo, RedButton } from "../styles/SharedStyles";
import AskQuestionModal from "../modals/AskQuestionModal";
import logo from "../assests/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken } from "../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { fetchQuestionsApi } from "../api";
import QuestionsList from "../components/QuestionsList";

const QuestionFeedPage = () => {
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
      <FeedHeaderContainer>
        <Logo src={logo} alt="Logo" />
        <FeedSearchContainer>
          <FeedSearchInput type="text" placeholder="Search..." />
          <GreenButton onClick={openModal}>Ask New Question</GreenButton>
          <AskQuestionModal isOpen={isModalOpen} onClose={closeModal} />
        </FeedSearchContainer>
        <RedButton onClick={handleLogout}>Logout</RedButton>
      </FeedHeaderContainer>

      <div>
        <QuestionsList questions={questions}></QuestionsList>
      </div>
    </div>
  );
};

export default QuestionFeedPage;
