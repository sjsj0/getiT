import React from "react";
import styled from "styled-components";
import { Logo } from "../logo/logo_index";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterContainer = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding: 2em 3em;
    ${'' /* border-top: 0.6px solid #000000; */}
    background-color: grey;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  ${'' /* color: #6f6f6f; */}
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  ${'' /* color: #a3a3a3; */}
  color: #fff;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;
`;

const SocialIcon = styled.div`
  ${'' /* color: #8a8a8a; */}
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    color: #777777;
  }
`;

export function Footer(props) {
  return (
      <FooterContainer>
        <TopContainer>
          <ContentContainer>
            <Title>Categories</Title>
            <FLink>Groceries</FLink>
            <FLink>Clothing</FLink>
            <FLink>Footwear</FLink>
            <FLink>Formal</FLink>
            <FLink>Kitchenware</FLink>
            <FLink>Others</FLink>
          </ContentContainer>
          <ContentContainer>
            <Title>Access</Title>
            <FLink>Login</FLink>
            <FLink>Join Us</FLink>
            <FLink>Account</FLink>
            <FLink>Register</FLink>
          </ContentContainer>
        </TopContainer>

        <BottomContainer>
          <LeftBottomContainer>
            <Logo />
            <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
          </LeftBottomContainer>
          <RightBottomContainer>
            <SocialIcon>
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon>
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon>
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon>
              <LinkedInIcon />
            </SocialIcon>
          </RightBottomContainer>
        </BottomContainer>
      </FooterContainer>
  );
}