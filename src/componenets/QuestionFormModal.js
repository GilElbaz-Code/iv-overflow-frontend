// QuestionFormModal.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { Form, Label, Input, Button, ErrorSpan } from "./shared/SharedStyles";
import { askQuestion } from "../redux/actions/questionActions";
import { selectToken } from "../redux/reducers/authSlice";

const QuestionFormModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const validateFields = () => {
    // Basic client-side validation
    const isTitleValid = title.trim() !== "";
    const isContentValid = content.trim() !== "";

    if (!isTitleValid || !isContentValid) {
      setTitleError("Title is required");
      setContentError("Content is required");
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    // Dispatch askQuestion action with question details
    await dispatch(askQuestion({ title, content, tags, token }));

    // Clear form fields after submitting
    setTitle("");
    setContent("");
    setTags("");

    // Close the modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ask a New Question"
    >
      <h2>Ask a New Question</h2>
      <Form onSubmit={handleFormSubmit}>
        <Label>
          Title
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <ErrorSpan>{titleError}</ErrorSpan>}
        </Label>
        <Label>
          Content
          <Input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {contentError && <ErrorSpan>{contentError}</ErrorSpan>}
        </Label>
        <Label>
          Tags
          <Input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Label>
        <Button type="submit">Ask Question</Button>
      </Form>
    </Modal>
  );
};

export default QuestionFormModal;
