import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../redux/reducers/userReducer";
import { ModalOverlay, CloseButton, ModalContainer, TitleInput, TextArea, TagsInput, SubmitButton } from "./AskQuestionModalStyle";
import { askQuestionApi } from "../api"; // Import the askQuestionApi function from your api.js file
import { selectToken } from "../redux/reducers/authReducer";

const AskQuestionModal = ({ isOpen, onClose }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const userInfo = useSelector(selectUserInfo);
  const token = useSelector(selectToken)

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
    try {
      const categories = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");

      // Make the API call using the askQuestionApi function
      const response = await askQuestionApi(
        {
          content,
          title,
          categories,
        },
        token
      );

      // Handle the response as needed
      console.log("API Response:", response);

      // Close the modal
      onClose();
    } catch (error) {
      // Handle errors
      console.error("Error submitting question:", error);
    }
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
