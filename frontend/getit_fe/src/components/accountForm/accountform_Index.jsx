import React, { useState, useEffect } from 'react';
import { BoxContainer, FormContainer, HeaderContainer, Input, SubmitButton, TextLabel } from "./common_account";
import { Marginer } from "../accountBox/marginer";
import { connect } from 'react-redux';

export class AccountForm extends Component{

    render() {
        return(
            <div>
                <Marginer direction="vertical" margin={10} />
                <HeaderContainer>
                    Profile Details
                </HeaderContainer>
                
                <BoxContainer>
                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Username</TextLabel>
                        <Input type="text" name="title"  />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Email</TextLabel>
                        <Input type="email" name="about"  />
                    </FormContainer>
        
                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Contact</TextLabel>
                        <Input type="text" name="description"/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Is Seller</TextLabel>
                        <Input type="text" name="category"  />
                    </FormContainer>
{/* 
                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Update Profile Picture</TextLabel>
                        <input type="file" id="img" name="image" accept="image/*"/>
                    </FormContainer> */}

                    <Marginer direction="vertical" margin={15} />
                    <SubmitButton  type="submit">Update Profile</SubmitButton>
                    <Marginer direction="vertical" margin="1em" />
                </BoxContainer>
            </div>
        )
    }
}