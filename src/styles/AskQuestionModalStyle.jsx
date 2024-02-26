import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 40px; /* Increase padding to make the box bigger */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px; /* Explicit width */
`;

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  width: 100%;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  width: 100%;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
