import React from "react";
import styled from "styled-components";
import  ProfileImage from "../../static/car.jpg";

const ProfileImageContainer = styled.div`
width: 320px;
height: 280px;
display: block;
object-fit: cover;

margin: 25px;
border: 1px solid #eee;

img{
    width: 100%;
    height: 100%
}

`;

const ServiceThumbnail = styled.div`
  width: 320px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProfileFormContainer = styled.div`
width: 400px;
display: inline-block;
// flex-direction: column;

`;

const AccountPageContainer = styled.div`
// display: inline;
// flex-direction: column;
align-items:center;
justify-content:space-between;
padding: 100px;
`;

export const FormContainer = styled.form`
    width: 100%;
    // display: inline-block;
    // flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15,15,15, 0.19);
`;

export const Input = styled.input`
    width: 100%;
    height: 42px; 
    outline: none;
    border: 1px solid rgba(200,200,200, 0.3);
    padding: 40px 10px;
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



export function Profile(){
    return(
        <AccountPageContainer> 
            <ProfileImageContainer> 
            <ServiceThumbnail>
                <img src={ProfileImage} alt="title img" />
            </ServiceThumbnail>
            </ProfileImageContainer>

            <ProfileFormContainer>
        <FormContainer>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Address" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Contact" />
        </FormContainer>
        </ProfileFormContainer> 
        </AccountPageContainer>
        

    )
}