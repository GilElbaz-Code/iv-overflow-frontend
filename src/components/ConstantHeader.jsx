/**
 * ConstantHeader Component
 *
 * A component representing the constant header of the application.
 * It includes a logo, search bar, "Ask New Question" button, and a "Logout" button.
 *
 * @component
 * @returns {JSX.Element} - Rendered React component.
 */
import { React, useState } from "react";
import {
  FeedHeaderContainer,
  FeedSearchContainer,
  FeedSearchInput,
} from "../styles/QuestionsFeedPageStyles";
import { GreenButton, Logo, RedButton } from "../styles/SharedStyles";
import AskQuestionModal from "../modals/AskQuestionModal";
import logo from "../assests/images/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const ConstantHeader = () => {
  // State variables
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Event handlers
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Component rendering
  return (
    <FeedHeaderContainer>
      <Logo src={logo} alt="Logo" />
      <FeedSearchContainer>
        <FeedSearchInput type="text" placeholder="Search..." />
        <GreenButton onClick={openModal}>Ask New Question</GreenButton>
        <AskQuestionModal isOpen={isModalOpen} onClose={closeModal} />
      </FeedSearchContainer>
      <RedButton onClick={handleLogout}>Logout</RedButton>
    </FeedHeaderContainer>
  );
};

export default ConstantHeader;
