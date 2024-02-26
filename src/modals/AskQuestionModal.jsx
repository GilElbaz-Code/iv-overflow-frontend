/**
 * AskQuestionModal Component
 *
 * A modal component for asking a new question.
 *
 * @component
 * @param {boolean} isOpen - Indicates whether the modal is open or closed.
 * @param {function} onClose - Function to close the modal.
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ModalOverlay,
  ModalContainer,
  TextArea,
  Input,
} from "../styles/AskQuestionModalStyle";
import { askQuestionApi } from "../api";
import { selectToken } from "../redux/reducers/authReducer";
import { selectUserInfo } from "../redux/reducers/userReducer";
import { BlueButton, Title, CloseButton } from "../styles/SharedStyles";

const AskQuestionModal = ({ isOpen, onClose }) => {
  // State variables for form fields
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tagList, setTagList] = useState("");

  // Redux hooks
  const token = useSelector(selectToken);
  const fullName = useSelector(selectUserInfo);

  // Event handlers for form fields
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTagList(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async () => {
    try {
      // Extract tags from the comma-separated list
      const tags = tagList
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");

      // Call the API to submit the question
      await askQuestionApi(
        {
          content,
          title,
          tags,
          fullName,
        },
        token
      );

      // Close the modal after successful submission
      onClose();
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  // Component rendering
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Ask a question</Title>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <TextArea
          placeholder="Type your question here..."
          value={content}
          onChange={handleInputChange}
          rows={5}
          cols={40}
        />
        <Input
          type="text"
          placeholder="Add tags separated by commas"
          value={tagList}
          onChange={handleTagsChange}
        />
        <BlueButton onClick={handleSubmit}>Submit</BlueButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AskQuestionModal;
