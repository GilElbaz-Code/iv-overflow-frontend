import React, { useState } from "react";
import { Form, Label, Input, Button } from "../componenets/shared/SharedStyles";
import { loginUserApi } from "../api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      try {
        const credentials = { email, password };
        const loginData = await loginUserApi(credentials);
        console.log("Login successful:", loginData);
        // You can handle the successful login, e.g., redirect or update state
      } catch (error) {
        console.error("Login failed:", error);
        // Handle the login failure, e.g., show an error message
      }
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Email:
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
