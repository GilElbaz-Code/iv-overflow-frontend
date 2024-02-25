import React, { useState } from "react";
import { voteAnswerApi } from "../api";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";
import styled from "styled-components";

const BoxContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 75%; /* Set width to 75% of the parent container */
`;

const VoteButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

const VoteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem; /* Increased font size */
  line-height: 1.2; /* Adjusted line height for better appearance */
  color: #666;
  padding: 5px;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const AnswerContent = styled.p`
  margin-bottom: 8px;
  color: #333;
  font-size: 1.2rem;
  flex-grow: 1;
`;

const AnswerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnsweredBy = styled.span`
  font-style: italic;
  color: #555;
`;

const AnswerDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const AnswerVotes = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-right: 8px;
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

const UpArrow = styled(ArrowIcon)`
  transform: rotate(-135deg);
`;

const DownArrow = styled(ArrowIcon)`
  transform: rotate(45deg);
`;

const AnswerCard = ({ answer }) => {
  const [userVote, setUserVote] = useState(null);
  const token = useSelector(selectToken);
  const answerId = answer.answer_id;

  const handleVote = async (voteType) => {
    try {
      // Check if the user has already voted in the opposite direction
      if (userVote === voteType) {
        // If the user clicks the same vote button again, remove their vote
        await voteAnswerApi(answerId, null, token);
        setUserVote(null);
      } else {
        // Otherwise, update the user's vote
        await voteAnswerApi(answerId, voteType, token);
        setUserVote(voteType);
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return (
    <BoxContainer>
      <VoteButtons>
        <Circle>
          <VoteButton
            onClick={() => handleVote("up")}
            disabled={userVote === "up"}
          >
            <UpArrow />
          </VoteButton>
        </Circle>
        <AnswerVotes>{answer.votes}</AnswerVotes>
        <Circle>
          <VoteButton
            onClick={() => handleVote("down")}
            disabled={userVote === "down"}
          >
            <DownArrow />
          </VoteButton>
        </Circle>
      </VoteButtons>
      <div>
        <AnswerContent>{answer.content}</AnswerContent>
        <AnswerInfo>
          <div>
            <AnsweredBy>Answered by {answer.full_name} on </AnsweredBy>
            <AnswerDate>{answer.date}</AnswerDate>
          </div>
        </AnswerInfo>
      </div>
    </BoxContainer>
  );
};

export default AnswerCard;
