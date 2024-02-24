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

export const Logo = styled.img`
  width: 150px;
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
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
`;

export const GreenButton = styled(Button)`
  background-color: #4caf50;
`;

export const RedButton = styled(Button)`
  background-color: #f44336;
`;

export const BlueButton = styled(Button)`
  background-color: #1d8ff2;
`;

export const CloseButton = styled(RedButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 15px;
`;

export const Form = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
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
