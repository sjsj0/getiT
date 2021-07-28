import React, { Component } from "react";
import { BoldLink, BoxContainer, CheckboxContainer, FormContainer, Input, MutedLink, SellerContainer, SellerText, SubmitButton } from "./common";
import { Marginer } from "./marginer";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import swal from 'sweetalert2';
window.Swal = swal;

export class RegisterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            CPassword: '',
            seller: false,
            isRegistered: false
        }

        this.initialState = this.state
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    clickHandler = (e) => {
        this.setState(prevState => ({
            seller: !prevState.seller
        }));
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        const { username, email, password, CPassword } = this.state;

        const username_length = username.length
        const email_length = email.length
        const pass_length = password.length

        if (username_length === 0) {
            swal.fire("Username can't be blank.")
        }

        else if (email_length === 0) {
            swal.fire("Email can't be blank.")
        }

        else if (pass_length < 5) {
            swal.fire("Password should be at least of 5 characters.")
        }

        else {
            // Password Validation
            if (password !== CPassword) {
                swal.fire("Passwords are not Same ! Try Again");
            }

            else {

                // Retrieving data in the state (Except Confirm Password Field/Key)
                const uname = this.state.username;
                const em = this.state.email;
                const pass = this.state.password;
                const seller = this.state.seller

                this.dataState = {
                    username: uname,
                    email: em,
                    password: pass,
                    is_seller: seller
                }
                // updated state with confirm password KEY removed

                //clear state
                this.setState(this.initialState)

                axios
                    .post('http://127.0.0.1:8000/account/register/', this.dataState)
                    .then(response => {
                        // console.log("Got response")
                        // console.log(response)
                        this.setState({
                            isRegistered: true
                        });
                        swal.fire("You are Registered !");
                    })
                    .catch(error => {
                        // console.log("Got error")
                        // console.log(error)
                        // console.log(error.response.data)
                        this.setState({
                            isRegistered: false
                        });
                        // console.log(error.response.status) 
                        // console.log(error.response.headers)
                    })

            }
        }

    }
    

    render() {
        const { username, email, password, CPassword, seller } = this.state

        if (this.state.isRegistered === true) {
            return <Redirect to="/login" />
        }

        return (
            <BoxContainer>
                <FormContainer>
                    <Input type="text" placeholder="User Name" name="username" value={username} onChange={this.changeHandler} />
                    <Input type="email" placeholder="Email" name="email" value={email} onChange={this.changeHandler} />
                    <Input type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler} />
                    <Input type="password" placeholder="Confirm Password" name="CPassword" value={CPassword} onChange={this.changeHandler} />
                    
                    <SellerContainer>
                        <SellerText>
                            Are you a seller?
                        </SellerText>
                        <Marginer direction="horizontal" margin={10} />
                        <CheckboxContainer>
                            <input type="checkbox" name="seller" value={seller} onChange={this.clickHandler} />
                        </CheckboxContainer>
                    </SellerContainer>


                </FormContainer>

                <Marginer direction="vertical" margin={10} />
                {/* <MutedLink href="#">Forget your password?</MutedLink> */}
                {/* <Marginer direction="vertical" margin="1.6em" /> */}

                <SubmitButton onClick={this.submitHandler} type="submit">Register</SubmitButton>

                <Marginer direction="vertical" margin="1em" />

                <MutedLink href="#">
                    Already registered?{" "}
                    <BoldLink href="/login">Signin</BoldLink>
                </MutedLink>
            </BoxContainer>
        )
    }
}