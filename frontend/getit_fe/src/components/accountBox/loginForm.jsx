import React, { Component } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "./marginer";
import axios from "axios";
import { Redirect } from "react-router-dom";
import swal from 'sweetalert2';
window.Swal = swal;

export class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isAuthenticated: false,
            recievedToken: ''
        }

        this.initialState = this.state
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()

        const uname = this.state.username;
        const pass = this.state.password;

        this.payload = {
            username: uname,
            password: pass,
        }

        //clear state
        this.setState(this.initialState)

        axios
            .post('http://127.0.0.1:8000/account/login/', this.payload)
            .then(response => {
                // console.log("Got response")
                // console.log(response)
                // console.log(response.data.token)
                this.setState({
                    recievedToken: response.data.token,
                    isAuthenticated: true
                });
                swal.fire("You are now Logged in !");

                sessionStorage.setItem("userToken", response.data.token);
                console.log(sessionStorage.getItem("userToken"))
                // console.log(this.state.recievedToken)
                // console.log(this.state.isAuthenticated)

            })
            .catch(error => {
                // console.log("Got error")
                // console.log(error)
                // console.log(error.response.data)
                // console.log(error.response.status)
                this.setState({
                    recievedToken: 'No data from server',
                    isAuthenticated: false
                });
                swal.fire("Enter correct credentials !");
            })

    }

    render() {

        const { username, password } = this.state
        
        if (this.state.isAuthenticated === true) {
            return <Redirect to="/profile" />
        }

        return (

            <BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email" name="username" value={username} onChange={this.changeHandler} />
                    <Input type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler} />
                </FormContainer>

                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em" />

                <SubmitButton onClick={this.submitHandler} type="submit">Signin</SubmitButton>
                <Marginer direction="vertical" margin="1em" />

                <MutedLink href="#">
                    Don't have an account?{" "}
                    <BoldLink href="/register" >Register</BoldLink>
                </MutedLink>
            </BoxContainer>
        )


    }
}