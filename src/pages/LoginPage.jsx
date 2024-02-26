/**
 * LoginPage Component
 *
 * A component representing the login page with a title, logo, and login form.
 *
 * @component
 * @returns {JSX.Element} - Rendered React component.
 */
import LoginForm from "../components/LoginForm";
import { Title, BackgroundContainer, Logo } from "../styles/SharedStyles";
import logo from "../assests/images/logo.png";

const LoginPage = () => {
  // Component rendering
  return (
    <BackgroundContainer>
      <Logo src={logo} alt="Logo" />
      <Title>Welcome to IV Overflow</Title>
      <LoginForm />
    </BackgroundContainer>
  );
};

export default LoginPage;
