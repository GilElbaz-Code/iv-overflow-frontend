import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectToken } from "../redux/reducers/authReducer";
import { answerQuestionApi } from "../api";
import { selectUserInfo } from "../redux/reducers/userReducer";

const AnswerTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; /* Allow vertical resizing */
`;

const AnswerForm = styled.form`
  margin-top: 16px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AnswerInput = ({ questionId, addAnswer }) => {
  const [answer, setAnswer] = useState("");
  const token = useSelector(selectToken);
  const userInfo = useSelector(selectUserInfo);

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming answerQuestionApi returns the newly created answer
      const newAnswer = await answerQuestionApi(
        {
          questionId: questionId,
          fullName: userInfo,
          content: answer,
        },
        token
      );

      addAnswer(newAnswer.answer);

      setAnswer("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnswerForm onSubmit={handleSubmit}>
      <AnswerTextArea
        placeholder="Type your answer here..."
        value={answer}
        onChange={handleInputChange}
      />
      <SubmitButton type="submit">Answer</SubmitButton>
    </AnswerForm>
  );
};

export default AnswerInput;
