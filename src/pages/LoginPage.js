import LoginForm from "../componenets/LoginForm";
import {
  Title,
  StyledImg,
  BackgroundContainer,
} from "../componenets/shared/SharedStyles";
import logo from "../logo.png";

const LoginPage = () => {
  return (
    <BackgroundContainer>
      <StyledImg src={logo} alt="Logo" />
      <Title>Welcome to IV Overflow</Title>
      <LoginForm />
    </BackgroundContainer>
  );
};

export default LoginPage;
