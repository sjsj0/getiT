import React from "react";
import styled from "styled-components";
import { LoginApp } from "../../components/accountBox/Login-register";
import { PageContainer } from "../../components/pageContainer/pageContainer_index";


const LoginContainer = styled.div`
    margin-top: 3em;
`;

export function LoginPage(props) {
    return (
        <PageContainer>
            <LoginContainer>
                <LoginApp />
            </LoginContainer>
        </PageContainer>
    )
}