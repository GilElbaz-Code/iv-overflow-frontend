import React, { useState, useEffect } from "react";
import {
  FeedHeaderContainer,
  FeedSearchContainer,
  FeedSearchInput,
  FeedQuestionsContainer,
  FeedQuestionContainer,
} from "../styles/QuestionsFeedPageStyles";
import Card from "../componenets/shared/CardContainer";
import {
  GreenButton,
  Logo,
  RedButton,
  SeparatorLine,
} from "../componenets/shared/SharedStyles";
import AskQuestionModal from "../modals/AskQuestionModal";
import { fetchQuestionsApi } from "../api";
import logo from "../assests/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken } from "../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const QuestionFeedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const response = await fetchQuestionsApi(token);
        setQuestions(response.questions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };
    fetchQuestionsData();
  }, [token]);
  return (
    <div>
      {/* Header Container */}
      <FeedHeaderContainer>
        <Logo src={logo} alt="Logo" />
        <FeedSearchContainer>
          <FeedSearchInput type="text" placeholder="Search..." />
          <GreenButton onClick={openModal}>Ask New Question</GreenButton>
        </FeedSearchContainer>
        <RedButton onClick={handleLogout}>Logout</RedButton>
      </FeedHeaderContainer>

      <SeparatorLine></SeparatorLine>

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
