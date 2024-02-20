// shared/SharedStyles.js
import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const StyledImg = styled.img`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
`;

export const BackgroundContainer = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-bottom: 4px;
  color: #333;
  vertical-align: top;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Form = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;
  box-sizing: border-box;
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
`;

export const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
`;

export const QuestionContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
`;

export const QuestionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const QuestionContent = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Tags = styled.div`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 10px;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;
