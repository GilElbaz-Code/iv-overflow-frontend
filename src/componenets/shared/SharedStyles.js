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
  border: none; /* Add this line to remove the border */
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
  font-size: 0.875rem; /* Adjust the font size as needed */
  margin-top: 4px; /* Add margin for spacing */
`;
