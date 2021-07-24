import React, { Component } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "./marginer";
import axios from 'axios';
import { Redirect } from "react-router-dom";

export class RegisterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            CPassword: '',
            isRegistered: false
        }

        this.initialState = this.state
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        // console.log(this.state)

        const { username, email, password, CPassword } = this.state;

        const username_length = username.length
        const email_length = email.length
        const pass_length = password.length

        if (username_length === 0) {
            alert("Username can't be blank.")
        }

        else if (email_length === 0) {
            alert("Email can't be blank.")
        }

        else if (pass_length < 5) {
            alert("Password should be at least of 5 characters.")
        }

        else {
            // Password Validation
            if (password !== CPassword) {
                alert("Passwords are not Same ! Try Again");
            }

            else {

                // Retrieving data in the state (Except Confirm Password Field/Key)
                const uname = this.state.username;
                const em = this.state.email;
                const pass = this.state.password;

                this.dataState = {
                    username: uname,
                    email: em,
                    password: pass,
                }
                // updated state with confirm password KEY removed

                //clear state
                this.setState(this.initialState)

                axios
                    .post('http://127.0.0.1:8000/account/users/', this.dataState)
                    .then(response => {
                        // console.log("Got response")
                        // console.log(response)
                        this.setState({
                            isRegistered: true
                        });
                        alert("You are Registered !");
                    })
                    .catch(error => {
                        // console.log("Got error")
                        // console.log(error)
                        // console.log(error.response.data)
                        this.setState({
                            isRegistered: false
                        });
                        alert(error.response.data.email)
                        alert(error.response.data.username)
                        // console.log(error.response.status) 
                        // console.log(error.response.headers)
                    })

            }
        }

    }

    render() {
        const { username, email, password, CPassword } = this.state

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