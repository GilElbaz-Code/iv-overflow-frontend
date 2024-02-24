import LoginForm from "../componenets/LoginForm";
import { Title, BackgroundContainer, Logo } from "../styles/SharedStyles";
import logo from "../assests/images/logo.png";

const LoginPage = () => {
  return (
    <BackgroundContainer>
      <Logo src={logo} alt="Logo" />
      <Title>Welcome to IV Overflow</Title>
      <LoginForm />
    </BackgroundContainer>
  );
};

export default LoginPage;
