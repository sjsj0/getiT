import React from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "./marginer";


export function RegisterForm(props) {
    return (
    <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
        </FormContainer>

        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />

        <SubmitButton type="submit">Register</SubmitButton>
        <Marginer direction="vertical" margin="1em" />

        <MutedLink href="#">
            Already registered?{" "}
            <BoldLink href="#" >Signin</BoldLink>
        </MutedLink>
    </BoxContainer>
    )
}