/**
 * QuestionCard Component
 *
 * A component to display a question card with relevant information.
 *
 * @component
 * @param {Object} data - The question data including title, content, date, etc.
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useState, useEffect } from "react";
import { calculateTimeElapsed } from "../utils/helpers";
import {
  CardContainer,
  QuestionTitle,
  QuestionBody,
  UserName,
  TimeElapsed,
  UserInfo,
  TagContainer,
  Tag,
  VoteCount,
  AnswerCount,
} from "../styles/CardContainerStyles";
import { Link } from "react-router-dom";
import { fetchAnswersApi, getAnswerTotalVotes } from "../api";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/reducers/authReducer";

const QuestionCard = ({ data }) => {
  // State variables for total votes and answer count
  const [totalVotes, setTotalVotes] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);

  // Date calculations for time elapsed since the question was asked
  const questionDate = new Date(data.date);
  const now = new Date();
  const timeElapsed = calculateTimeElapsed(questionDate, now);

  // Extracted properties from the question data
  const questionId = data.question_id;
  const fullName = data.full_name;

  // Redux hooks
  const token = useSelector(selectToken);

  // Fetch total votes and answer count on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const votes = await getAnswerTotalVotes(questionId, token);
        const answersData = await fetchAnswersApi(questionId, token);
        setTotalVotes(votes);
        setAnswerCount(answersData.answers.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [questionId, token]);

  // Component rendering
  return (
    <CardContainer>
      <Link to={`/questions/${questionId}`}>
        <QuestionTitle>{data.title}</QuestionTitle>
      </Link>
      <div>
        <VoteCount>{totalVotes} votes</VoteCount>
        <AnswerCount>{answerCount} answers</AnswerCount>
      </div>
      <QuestionBody>{data.content}</QuestionBody>
      <UserInfo>
        <UserName>
          asked <TimeElapsed>{timeElapsed}</TimeElapsed> by {fullName}
        </UserName>
        <TagContainer>
          {data.tags.map((tag) => (
            <Tag key={tag.id}>{tag}</Tag>
          ))}
        </TagContainer>
      </UserInfo>
    </CardContainer>
  );
};

export default QuestionCard;
