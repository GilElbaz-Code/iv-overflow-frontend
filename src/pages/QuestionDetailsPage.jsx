// QuestionDetailsPage.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const QuestionDetailsPage = ({ questions }) => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  // Find the selected question based on the questionId
  const selectedQuestion = questions.find((question) => question.id === questionId);

  // If the selected question is not found, navigate back to the questions feed page
  if (!selectedQuestion) {
    navigate('/questions');
    return null; // or display an error message
  }

  return (
    <div>
      {/* Render the details of the selected question here */}
      <h1>{selectedQuestion.title}</h1>
      <p>{selectedQuestion.content}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default QuestionDetailsPage;
