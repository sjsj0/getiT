import React from "react";
import styled from "styled-components";
import { RegisterApp } from "../../components/accountBox/Login-register";
import { PageContainer } from "../../components/pageContainer/pageContainer_index";


const RegisterContainer = styled.div`
    margin-top: 3em;
`;

export function RegisterPage(props) {
    return (
        <PageContainer>
            <RegisterContainer>
                <RegisterApp />
            </RegisterContainer>
        </PageContainer>
    )
}