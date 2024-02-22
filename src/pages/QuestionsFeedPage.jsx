// pages/QuestionFeedPage.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/CardContainer";
import { FeedQuestionContainer } from "../styles/QuestionsFeedPageStyles";

const QuestionFeedPage = ({ questions }) => {
  return (
    <div>
      <FeedQuestionsContainer>
        {questions.map((question) => (
          <Link key={question.id} to={`/questions/${question.title}`}>
            <FeedQuestionContainer>
              <Card data={question} />
            </FeedQuestionContainer>
          </Link>
        ))}
      </FeedQuestionsContainer>
    </div>
  );
};

export default QuestionFeedPage;
