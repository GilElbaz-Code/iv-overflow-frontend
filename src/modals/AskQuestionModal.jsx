import React, { useState } from "react";
import styled from "styled-components";
import { askQuestion } from "../redux/actions/questionActions";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../redux/reducers/userReducer";

// Styled components for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column; /* Stack child elements vertically */
  align-items: center; /* Center child elements horizontally */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
`;

const TitleInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
`;

const TagsInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AskQuestionModal = ({ isOpen, onClose }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  console.log(userInfo);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleSubmit = async () => {
    const categories = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    await dispatch(askQuestion({ content, title, categories }));

    // Close the modal
    onClose();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Ask a Question</h2>
        <TitleInput
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
        <TagsInput
          type="text"
          placeholder="Add tags separated by commas"
          value={tags}
          onChange={handleTagsChange}
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AskQuestionModal;
