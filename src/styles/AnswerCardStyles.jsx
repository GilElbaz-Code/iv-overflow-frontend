import styled from "styled-components";

export const BoxContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 75%;
`;

export const VoteButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

export const VoteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  line-height: 1.2;
  color: #666;
  padding: 5px;
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const AnswerContent = styled.p`
  margin-bottom: 8px;
  color: #333;
  font-size: 1.2rem;
  flex-grow: 1;
`;

export const AnswerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AnsweredBy = styled.span`
  font-style: italic;
  color: #555;
`;

export const AnswerDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

export const AnswerVotes = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-right: 8px;
`;

export const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

export const UpArrow = styled(ArrowIcon)`
  transform: rotate(-135deg);
`;

export const DownArrow = styled(ArrowIcon)`
  transform: rotate(45deg);
`;
