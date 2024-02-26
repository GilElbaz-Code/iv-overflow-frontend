/**
 * AnswerInput Component
 *
 * A component to input and submit answers to a specific question.
 *
 * @component
 * @param {string} questionId - The unique identifier of the question to which the answer belongs.
 * @param {function} addAnswer - A function to add the new answer to the list of answers.
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectToken } from "../redux/reducers/authReducer";
import { answerQuestionApi } from "../api";
import { selectUserInfo } from "../redux/reducers/userReducer";
import { BlueButton } from "../styles/SharedStyles";

const AnswerTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const AnswerForm = styled.form`
  margin-top: 16px;
`;

const AnswerInput = ({ questionId, addAnswer }) => {
  // State variables
  const [answer, setAnswer] = useState("");

  // Redux hooks
  const token = useSelector(selectToken);
  const userInfo = useSelector(selectUserInfo);

  // Event handler for input change
  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API to submit the answer
      const newAnswer = await answerQuestionApi(
        {
          questionId: questionId,
          fullName: userInfo,
          content: answer,
        },
        token
      );

      // Clear the answer input
      setAnswer("");

      // Add the new answer to the list of answers
      addAnswer(newAnswer.answer);
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  // Component rendering
  return (
    <AnswerForm onSubmit={handleSubmit}>
      <AnswerTextArea
        placeholder="Type your answer here..."
        value={answer}
        onChange={handleInputChange}
      />
      <BlueButton type="submit" onSubmit={handleSubmit}>
        Answer
      </BlueButton>
    </AnswerForm>
  );
};

export default AnswerInput;
