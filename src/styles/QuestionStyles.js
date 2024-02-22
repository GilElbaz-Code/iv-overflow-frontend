import styled from "styled-components";

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

export const QuestionTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
`;

export const QuestionContent = styled.p`
  color: #666;
  line-height: 1.5;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  margin-top: 16px;
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const TimeElapsed = styled.span`
  font-size: 0.8em;
  color: #888;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const Tag = styled.span`
  margin-right: 8px;
  color: #555;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
`;
