import React from "react";
import styled from "styled-components";
import { RegisterApp } from "../../components/accountBox/Login-register";
import { Navbar } from "../../components/navbar/nav_index";


const RegisterContainer = styled.div`
    margin-top: 3em;
`;

const RegisterPageContainer  = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
`;

export function RegisterPage(props) {
    return (
        <RegisterPageContainer>
            <Navbar />
            <RegisterContainer>
                <RegisterApp />
            </RegisterContainer>
        </RegisterPageContainer>
    )
}