import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/accountBox/marginer";
import  ProfileImage from "../../static/car.jpg";
import { Navbar } from "../../components/navbar/nav_index";
import { AccountForm } from "../../components/accountForm/accountform_Index";
import { FooterV2 } from "../../components/footer_V2/footer_index";

const ProfileImageContainer = styled.div`
width: 350px;
height: 350px;
display: block;
object-fit: cover;

margin: 25px;
border: 1px solid #eee;

img{
    width: 100%;
    height: 100%
}
border-radius: 50%;

`;

const ServiceThumbnail = styled.div`
width: 350px;
height:350px;
overflow: hidden;
-webkit-border-radius: 40%;
-moz-border-radius: 50%;
-ms-border-radius: 50%;
-o-border-radius: 50%;
border-radius: 50%;
box-shadow: 7px 5px 5px rgba(15,15,15, 0.19);
`;

const ProfileFormContainer = styled.div`
width: 420px;
padding:50px;
display: inline-block;
//  flex-direction: row;

`;

const AccountPageContainer = styled.div`
display: flex;
// flex-direction: row;
align-items:center;
// justify-content:space-between;
padding: 100px;
`;


export const FormContainer = styled.form`
    width: 100%;
    // display: inline;
    // flex-direction: column;
    box-shadow: 7px 5px 5px rgba(15,15,15, 0.19);
`;

export const Input = styled.input`
    width: 100%;
    height: 42px; 
    outline: none;
    border: 1px solid rgba(200,200,200, 0.3);
    padding: 30px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 18px;

    &:plceholder{
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus{
        outline: none;
        border-bottom: 2px solid #5963c3;
    }
`;

const PageContainer  = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
`;




export function Profile(){
    return(
        <PageContainer>
            <Navbar/>
        <AccountPageContainer> 
            <ProfileImageContainer> 
            <ServiceThumbnail>
            <img src={ProfileImage}  alt="title img" />
            </ServiceThumbnail>
            </ProfileImageContainer>
            <Marginer direction="horizontal" margin={120} />

            <AccountForm/>

        </AccountPageContainer>
        <FooterV2/>
        </PageContainer>

    )
}


