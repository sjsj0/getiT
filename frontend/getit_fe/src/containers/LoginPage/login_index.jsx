import React from "react";
import styled from "styled-components";
import { LoginApp } from "../../components/accountBox/Login-register";
import { Navbar } from "../../components/navbar/nav_index";


const LoginContainer = styled.div`
    margin-top: 3em;
`;
const LoginPageContainer  = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
`;

export function LoginPage(props) {
    return (
        <LoginPageContainer>
            <Navbar />
            <LoginContainer>
                <LoginApp />
            </LoginContainer>
        </LoginPageContainer>
    )
}