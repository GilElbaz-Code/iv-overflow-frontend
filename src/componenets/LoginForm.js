import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Label, Input, Button, ErrorSpan } from "./shared/SharedStyles";
import { loginUser } from "../redux/actions/authActions";
import {
  selectLoading,
  selectError,
  selectToken,
} from "../redux/reducers/authReducer";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/feed");
    }
  }, [token, navigate]);

  const validateFields = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isPasswordValid;
  };

  const validateEmail = (value) => {
    if (!value.includes("@")) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    // Dispatch loginUser action with credentials
    await dispatch(loginUser({ email, password }));

    // Additional logic if needed
  };

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
        {emailError && <ErrorSpan>{emailError}</ErrorSpan>}
      </Label>
      <Label>
        Password
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        {passwordError && <ErrorSpan>{passwordError}</ErrorSpan>}
      </Label>
      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
      {error && <p style={{ color: "red" }}>{error.data.error}</p>}
      {/* No need to check token here, it will be logged via useEffect */}
    </Form>
  );
};

export default LoginForm;
