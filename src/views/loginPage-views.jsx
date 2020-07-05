import React, { Component } from "react";

import SignIn from "../components/sign-in/sign-in.component";
import Toggle from "../components/sign-in/toggle.component";
import SignUp from "../components/sign-up/sign-up.component";
import logo from "../static/walmartIcon.svg";

import {
  SupportTag,
  SignInAndSignUpContainer,
  SideCard,
  LogoHeader,
  WelcomeTag,
  LoginContainer,
} from "../view-styles/loginPage-styles";

const pageMode = {
  WELCOME: "WELCOME",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  SUPPORT: "SUPPORT",
};
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageState: "WELCOME",
    };
  }

  onLoginClick = () => {
    this.setState({
      pageState: pageMode.LOGIN,
    });
  };
  onRegisterClick = () => {
    this.setState({
      pageState: pageMode.REGISTER,
    });
  };
  onSupportClick = () => {
    this.setState({
      pageState: pageMode.SUPPORT,
    });
  };
  render() {
    const SignRender = () => {
      switch (this.state.pageState) {
        case pageMode.LOGIN:
          return <SignIn />;
        case pageMode.REGISTER:
          return <SignUp />;
        case pageMode.SUPPORT:
          return (
            <SupportTag>
              <span>support@techmart.com</span>
            </SupportTag>
          );
        default:
          return <WelcomeTag>Explore & purchase</WelcomeTag>;
      }
    };
    return (
      <LoginContainer>
        <SignInAndSignUpContainer>
          <Toggle
            onLoginClick={this.onLoginClick}
            onRegisterClick={this.onRegisterClick}
            onSupportClick={this.onSupportClick}
          />
          <SideCard>
            <LogoHeader
              style={{ cursor: "pointer" }}
              onClick={() => this.props.history.push("/")}
            >
              Techmart <img src={logo} alt="" style={{ height: "30px" }} />
            </LogoHeader>
            <SignRender />
          </SideCard>
        </SignInAndSignUpContainer>
      </LoginContainer>
    );
  }
}

export default LoginPage;
