import styled from "styled-components";

// Header Styles
export const FeedHeaderContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const FeedSearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FeedSearchInput = styled.input`
  width: 200px;
  padding: 8px;
  margin-right: 10px;
`;

export const FeedAskQuestionButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Questions Styles
export const FeedQuestionsContainer = styled.div`
  margin-top: 20px;
`;

export const FeedQuestionContainer = styled.div`
  background-color: #fff;
`;

export const FeedQuestionTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

export const FeedQuestionContent = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

export const FeedTags = styled.div`
  color: #777;
  margin-bottom: 10px;
`;
