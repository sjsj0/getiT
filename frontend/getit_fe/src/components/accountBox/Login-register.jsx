import React from "react";
import styled from "styled-components"
import { LoginForm } from "./loginForm";
import { RegisterForm } from "./registerForm";
import { motion } from "framer-motion";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display : flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: linear-gradient(to right, #2ebf91, #8360c3);
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-height: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
    text-align: left;
`;

const SmallText = styled.h5`
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    z-index: 10;
    text-align: left;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

// const backdropVariants = {
//     expanded: {
//         width: "233%",
//         height: "1050px",
//         borderRadius: "20%",
//         transform: "rotate(60deg)"
//     },
//     collapsed: {
//         width: "160%",
//         height: "550px",
//         borderRadius: "50%",
//         transform: "rotate(60deg)"
//     },
// };


export function LoginApp(props) {
    return (
        <AppContainer>
            <BoxContainer>
                <TopContainer>
                    <BackDrop />
                    <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Please sign-in to continue!</SmallText>
                    </HeaderContainer>
                </TopContainer>

                <InnerContainer>
                    <LoginForm />
                </InnerContainer>
            </BoxContainer>
        </AppContainer>
    )
}

export function RegisterApp(props) {
    return (
        <AppContainer>
            <BoxContainer>
                <TopContainer>
                    <BackDrop />
                    <HeaderContainer>
                        <HeaderText>Welcome to</HeaderText>
                        <HeaderText>getiT</HeaderText>
                        <SmallText>Please register to continue!</SmallText>
                    </HeaderContainer>
                </TopContainer>

                <InnerContainer>
                    <RegisterForm />
                </InnerContainer>
            </BoxContainer>
        </AppContainer>
    )
}