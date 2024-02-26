/**
 * AnswerCard Component
 *
 * A component to display an answer with voting functionality.
 *
 * @component
 * @param {Object} answer - The answer object containing information like content, votes, etc.
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useState, useEffect } from "react";
import { voteAnswerApi } from "../api";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";
import { setUserVote } from "../redux/reducers/userVoteReducer";

import {
  BoxContainer,
  VoteButtons,
  Circle,
  VoteButton,
  UpArrow,
  AnswerVotes,
  DownArrow,
  AnswerContent,
  AnswerInfo,
  AnsweredBy,
  AnswerDate,
} from "../styles/AnswerCardStyles";

const AnswerCard = ({ answer }) => {
  // State variables
  const [localUserVote, setLocalUserVote] = useState(null);
  const [votes, setVotes] = useState(answer.votes);

  // Redux hooks
  const token = useSelector(selectToken);
  const answerId = answer.answer_id;
  const dispatch = useDispatch();

  // Effect to get stored user vote from local storage
  useEffect(() => {
    if (localUserVote === null) {
      const storedUserVote = localStorage.getItem(
        `userVote_${answer.answer_id}`
      );
      setLocalUserVote(storedUserVote);
    }
  }, [localUserVote, answer.answer_id]);

  // Function to handle voting
  const handleVote = async (voteType) => {
    try {
      if (localUserVote === voteType) {
        await voteAnswerApi(answerId, null, token);
        setLocalUserVote(null);
        setVotes((prevVotes) => prevVotes - 1);
      } else {
        await voteAnswerApi(answerId, voteType, token);
        setLocalUserVote(voteType);
        setVotes((prevVotes) => {
          if (localUserVote === null) return prevVotes + 1;
          return prevVotes + (voteType === "up" ? 1 : -1);
        });
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  // Effect to update user vote in Redux state
  useEffect(() => {
    dispatch(setUserVote(localUserVote));
  }, [localUserVote, dispatch]);

  // Component rendering
  return (
    <BoxContainer>
      <VoteButtons>
        <Circle>
          <VoteButton
            onClick={() => handleVote("up")}
            disabled={localUserVote === "up"}
          >
            <UpArrow />
          </VoteButton>
        </Circle>
        <AnswerVotes>{votes}</AnswerVotes>
        <Circle>
          <VoteButton
            onClick={() => handleVote("down")}
            disabled={localUserVote === "down"}
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
