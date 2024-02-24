import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.question_id} data={question} />
      ))}
    </div>
  );
};

export default QuestionsList;
