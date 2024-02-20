// Card.js

import React from "react";
import styled from "styled-components";

// Styled components for the card content
const QuestionTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
`;

const QuestionBody = styled.p`
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  margin-right: 8px;
  color: #555;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
`;

const TimeElapsed = styled.span`
  font-size: 0.8em;
  color: #888;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 500px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* No margin between cards */
  padding: 8px; /* Adjust the padding to control spacing */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card = ({ data }) => {
  // Assuming data.date is a timestamp or a valid date string
  const questionDate = new Date(data.date);
  const now = new Date();

  // Calculate the time elapsed
  const timeElapsed = calculateTimeElapsed(questionDate, now);

  return (
    <CardContainer>
      <QuestionTitle>{data.title}</QuestionTitle>
      <QuestionBody>{data.content}</QuestionBody>
      <UserInfo>
        <UserName>
          asked <TimeElapsed>{timeElapsed}</TimeElapsed> by {data.created_by}
        </UserName>
        <TagContainer>
          {data.categories.map((category, index) => (
            <Tag key={index}>{category}</Tag>
          ))}
        </TagContainer>
      </UserInfo>
    </CardContainer>
  );
};

// Helper function to calculate time elapsed
const calculateTimeElapsed = (startDate, endDate) => {
  const seconds = Math.floor((endDate - startDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return `${seconds}s ago`;
  }
};

export default Card;
