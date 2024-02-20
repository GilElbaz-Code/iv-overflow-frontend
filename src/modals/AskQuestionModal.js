import React, { useState } from "react";
import styled from "styled-components";

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
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [tagList, setTagList] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleTagsKeyPress = (e) => {
    if (e.key === "Enter" && tags.trim() !== "") {
      setTagList([...tagList, tags.trim()]);
      setTags("");
    }
  };

  const removeTag = (index) => {
    const updatedTags = [...tagList];
    updatedTags.splice(index, 1);
    setTagList(updatedTags);
  };

  const handleSubmit = () => {
    // Implement your logic to submit the question
    // You can dispatch an action, make an API call, etc.
    console.log("Submitted Question:", title, question, "Tags:", tagList);

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
          value={question}
          onChange={handleInputChange}
          rows={5}
          cols={40}
        />
        <TagsInput
          type="text"
          placeholder="Add tags (press Enter to add)"
          value={tags}
          onChange={handleTagsChange}
          onKeyPress={handleTagsKeyPress}
        />
        <div>
          {tagList.map((tag, index) => (
            <span key={index} onClick={() => removeTag(index)}>
              {tag}
              <span>&times;</span>
            </span>
          ))}
        </div>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AskQuestionModal;
