import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Marginer } from "../accountBox/marginer";

const AccessibilityContainer = styled.div`
    display: flex;
`;

const RegisterButton = styled.button`
    border: 0;
    outline: 0;
    padding: 7px 1em;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    border-radius: 20px;
    background-color: #6adf76;
    background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
    background-color: #00c9ff;
    }

    &:not(:last-of-type) {
        margin-right: 7px;
    }
`;

const LoginButton = styled.button`
    border: 0;
    outline: 0;
    padding: 5px 1em;
    color: #222;
    font-size: 13px;
    font-weight: 600;
    border-radius: 20px;
    background-color: transparent;
    border: 2px solid #00c9ff;
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #00c9ff;
    }

    &:not(:last-of-type) {
        margin-right: 7px;
    }
`;


export function Accessibility(props) {
    return (
        <AccessibilityContainer>
            <Link to="/register">
                <RegisterButton>Register</RegisterButton>
            </Link>
            <Marginer direction="horizontal" margin={10} />

            <Link to="/login">
                <LoginButton>Login</LoginButton>
            </Link>
        </AccessibilityContainer>
    )
}