import styled from "styled-components";

export const QuestionTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
`;

export const QuestionBody = styled.p`
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  margin-right: 8px;
  color: #555;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
`;

export const TimeElapsed = styled.span`
  font-size: 0.8em;
  color: #888;
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 500px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* No margin between cards */
  padding: 8px; /* Adjust the padding to control spacing */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const VoteCount = styled.div`
  color: #4caf50; /* Green color for votes */
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 8px;
  font-family: "Roboto", sans-serif; /* Use the desired font */
`;

export const AnswerCount = styled.div`
  color: #2196f3; /* Blue color for answers */
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 8px;
  font-family: "Roboto", sans-serif; /* Use the same font as VoteCount or another font */
`;
