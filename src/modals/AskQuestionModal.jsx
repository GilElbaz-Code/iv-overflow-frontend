import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ModalOverlay,
  ModalContainer,
  TextArea,
  Input,
} from "./AskQuestionModalStyle";
import { askQuestionApi } from "../api";
import { selectToken } from "../redux/reducers/authReducer";
import { selectUserInfo } from "../redux/reducers/userReducer";
import { BlueButton, Title, CloseButton } from "../styles/SharedStyles";

const AskQuestionModal = ({ isOpen, onClose }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tagList, setTagList] = useState("");
  const token = useSelector(selectToken);
  const fullName = useSelector(selectUserInfo);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTagList(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const tags = tagList
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");

      await askQuestionApi(
        {
          content,
          title,
          tags,
          fullName,
        },
        token
      );

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
