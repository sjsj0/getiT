import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';


const FooterContainer = styled.div`
width: 100%;
min-height: 250px;
padding: 20px 150px;
color:#f0f9ff;
background-color:#282d32;
display: flex;
flex-direction: column;
bottom: 0;
`;

const Copyright = styled.div` 
bottom: 7px;
margin-top:30px;
display:flex;
justify-content: center;
font-size: 12px;
color: grey;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

const Title = styled.p`
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:20px;
`;




export function FooterV2(props) {
    return (
        <FooterContainer> 
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
              <p> <EmailIcon/> getitofficial@gmail.com </p>
              <p> <PhoneIcon/> +91 9999XXXXXX </p>
              <p> <BusinessIcon/> Patiala, Punjab </p>
              </Column>
           </Row>


           <Copyright> © Copyright 2021 getiT. All rights reserved. </Copyright>
  
        </FooterContainer>
 

    )
}