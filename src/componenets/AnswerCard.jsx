import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
`;

const AnswerContent = styled.p`
  margin-bottom: 8px;
`;

const AnswerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnsweredBy = styled.span`
  font-style: italic;
`;

const AnswerDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const VoteContainer = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 4px;
`;

const AnswerCard = ({ answer }) => {
  const handleVote = (voteType) => {
    // Implement your logic for handling upvote/downvote
    console.log(`${voteType} voted for answer with id ${answer.id}`);
  };

  return (
    <CardContainer>
      <AnswerContent>{answer.content}</AnswerContent>
      <AnswerInfo>
        <div>
          <AnsweredBy>Answered by {answer.created_by} on </AnsweredBy>
          <AnswerDate>{answer.date}</AnswerDate>
        </div>
        <VoteContainer>
          <VoteButton onClick={() => handleVote("up")}>↑</VoteButton>
          <span>{answer.rating}</span>
          <VoteButton onClick={() => handleVote("down")}>↓</VoteButton>
        </VoteContainer>
      </AnswerInfo>
    </CardContainer>
  );
};

export default AnswerCard;
