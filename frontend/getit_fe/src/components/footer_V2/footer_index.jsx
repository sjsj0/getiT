import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export const Container = styled.div`
padding:30px 60px;
color:#f0f9ff;
background-color:#282d32;
position: relative;
bottom: 0;
`;

export const copyrightContainer = styled.div`
padding:30px 60px;
background-color:#282d32;
color:#808080;
position: relative;
bottom: 0;
`;



export const Copyright = styled.div`
position: absolute; 
bottom: 7px;
margin-left: 585px;
font-size: 12px;
color: grey;
`;

export const Wrapper = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 150px;
`;

export const about = styled.div`
 
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:20px;
`;

export const logo = styled.p`{
  display: flex;
  justify-content: space-between;
  left-padding:200px;
`;


export function FooterContainer(props) {
    return (
        <Container> 
           <Row>
             <Column> 
              <Title>About Us</Title>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision and Mission</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
             </Column>
             <Column> 
              <Title> Services</Title>
              <FooterLink href="#">Buy Now </FooterLink>
              <FooterLink href="#">Sell Your Products</FooterLink>
              <FooterLink href="#">Delivery</FooterLink>
             </Column>
             <Column> 
              <Title> Social </Title>
                  <FooterLink href="#">  <FacebookIcon/> Facebook  </FooterLink>
                  <FooterLink href="#"> <InstagramIcon/> Instagram </FooterLink>
                <FooterLink href="#"><TwitterIcon/> Twitter </FooterLink>
                 <FooterLink href="#"><LinkedInIcon/> LinkedIn</FooterLink> 
             </Column>
             <Column>
              <h3>getiT</h3>
              <p>Your Local Store</p>
              </Column>
           </Row>

           <Copyright> © Copyright 2021 getiT. All rights reserved. </Copyright>
   
       
  
        </Container>
 

    )
}