/**
 * LoginForm Component
 *
 * A component for user login, including email and password input fields.
 * Handles form submission, validation, and displays error messages.
 *
 * @component
 * @returns {JSX.Element} - Rendered React component.
 */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Form,
  Label,
  Input,
  ErrorSpan,
  BlueButton,
} from "../styles/SharedStyles";
import { loginUser } from "../redux/actions/authActions";
import {
  selectLoading,
  selectError,
  selectToken,
} from "../redux/reducers/authReducer";
import { fetchUserInfo } from "../redux/actions/userActions";

const StyledErrorSpan = styled(ErrorSpan)`
  font-family: "Roboto", sans-serif;
`;

const LoginForm = () => {
  // Redux hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  // State variables for form fields and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Effect to check if the user is already logged in
  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo(token));
      navigate("/feed");
    }
  }, [token, navigate, dispatch]);

  // Function to validate form fields
  const validateFields = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isPasswordValid;
  };

  // Function to validate email
  const validateEmail = (value) => {
    if (!value.includes("@")) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  // Function to validate password
  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  // Event handler for form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    try {
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error("Error during login or fetching user info", error);
    }
  };

  // Component rendering
  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Email
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        {emailError && <StyledErrorSpan>{emailError}</StyledErrorSpan>}
      </Label>
      <Label>
        Password
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        {passwordError && <StyledErrorSpan>{passwordError}</StyledErrorSpan>}
      </Label>
      <BlueButton type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </BlueButton>
      {error && <StyledErrorSpan>{error.data.error}</StyledErrorSpan>}
    </Form>
  );
};

export default LoginForm;
