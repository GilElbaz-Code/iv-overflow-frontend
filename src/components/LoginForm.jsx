import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
      dispatch(fetchUserInfo(token));
      navigate("/feed");
    }
  }, [token, navigate, dispatch]);

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

    try {
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error("Error during login or fetching user info", error);
    }
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
      <BlueButton type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </BlueButton>
      {error && <p style={{ color: "red" }}>{error.data.error}</p>}
    </Form>
  );
};

export default LoginForm;
