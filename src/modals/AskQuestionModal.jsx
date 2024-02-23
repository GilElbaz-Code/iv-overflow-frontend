import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ModalOverlay,
  CloseButton,
  ModalContainer,
  TitleInput,
  TextArea,
  TagsInput,
  SubmitButton,
} from "./AskQuestionModalStyle";
import { askQuestionApi } from "../api";
import { selectToken } from "../redux/reducers/authReducer";

const AskQuestionModal = ({ isOpen, onClose }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tagList, setTagList] = useState("");
  const token = useSelector(selectToken);

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
          value={tagList}
          onChange={handleTagsChange}
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AskQuestionModal;
