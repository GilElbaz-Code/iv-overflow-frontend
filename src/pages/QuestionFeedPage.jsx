import React, { useState, useEffect } from 'react';
import {
  FeedLogo,
  FeedHeaderContainer,
  FeedSearchContainer,
  FeedSearchInput,
  FeedAskQuestionButton,
  FeedLogoutButton,
  FeedQuestionsContainer,
  FeedQuestionContainer,
} from '../styles/QuestionsFeedPageStyles';
import Card from '../componenets/shared/CardContainer'
import { SeparatorLine } from '../componenets/shared/SharedStyles';  
import AskQuestionModal from '../modals/AskQuestionModal';
import { fetchQuestionsApi } from '../api';
import logo from '../assests/images/logo.png'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authReducer';

const QuestionFeedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  const dispatch = useDispatch()

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleLogout = () =>{
    dispatch(logout());
    window.location.href = "/";
  }

  useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const response = await fetchQuestionsApi(localStorage.getItem('token'));
        console.log(response);
        setQuestions(response.questions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };
    fetchQuestionsData();
  }, []);
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
        <FeedLogoutButton onClick={handleLogout}>Logout</FeedLogoutButton>
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
