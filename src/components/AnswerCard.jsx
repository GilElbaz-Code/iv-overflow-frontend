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
  const [localUserVote, setLocalUserVote] = useState(null);
  const [votes, setVotes] = useState(answer.votes);
  const token = useSelector(selectToken);
  const answerId = answer.answer_id;
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize localUserVote from persisted state when the component mounts
    if (localUserVote === null) {
      const storedUserVote = localStorage.getItem(
        `userVote_${answer.answer_id}`
      );
      setLocalUserVote(storedUserVote);
    }
  }, [localUserVote, answer.answer_id]);

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

  useEffect(() => {
    // Update UI or handle side-effects based on localUserVote changes
    // For example, you might want to update Redux state here if needed
    dispatch(setUserVote(localUserVote));
  }, [localUserVote, dispatch]);

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
