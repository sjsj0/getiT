import React, {Component} from "react";
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import {Marginer} from "./marginer";
import axios from 'axios';

export class RegisterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            CPassword: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        const { password, CPassword} = this.state;
        // Password Validation
        if (password !== CPassword) {
            alert("Passwords are not Same ! Try Again");
        }
        
        else{
            
            // Retrieving data in the state (Except Confirm Password Field/Key)
            const uname = this.state.username;
            const em = this.state.email;
            const pass = this.state.password;

            this.state={
                username:uname,
                email:em,
                password:pass,
            } // updated state with confirm password KEY removed

        axios
            .post('http://127.0.0.1:8000/account/users/', this.state)
            .then(response => {
                console.log("Got response")
                console.log(response)
                alert("You are Registered !");
                // Clearing state
                this.state = {
                    username: '',
                    email: '',
                    password: '',
                    CPassword: ''
                }


            })
            .catch(error => {
                console.log("Got error")
                console.log(error)
                console.log(error.response.data) 
                console.log(error.response.status) 
                console.log(error.response.headers)
            })

        }



    }

    // register_func = event => {
    //     console.log("register here");
    //     if (this.state.Password !== this.state.CPassword) {
    //         alert("Password should be same !")
    //     } else {
    //         const registeration_data = this.state;

    //         axios({
    //                 method: 'post',
    //                 url: 'http://127.0.0.1:8000/test_data/',
    //                 data: registeration_data
    //             }
    //         )
    //             .then(response => {
    //                 console.log(response)
    //                 this.setState({articleId: response.data.articleId})
    //                 console.log(this.state)
    //             });
    //     }
    // }


    render() {
        const {username, email, password,CPassword} = this.state
        return (
            <BoxContainer>
                <FormContainer>
                    <Input type="text" placeholder="User Name" name="username" value={username} onChange={this.changeHandler}/>
                    <Input type="email" placeholder="Email" name="email" value={email} onChange={this.changeHandler}/>
                    <Input type="password" placeholder="Password" name="password" value={password}
                           onChange={this.changeHandler}/>
                     <Input type="password" placeholder="Confirm Password" name="CPassword" value={CPassword}
                           onChange={this.changeHandler}/> 
                    
                </FormContainer>
                
                <Marginer direction="vertical" margin={10}/>
                    {/* <MutedLink href="#">Forget your password?</MutedLink> */}
                    {/* <Marginer direction="vertical" margin="1.6em" /> */}

                <SubmitButton onClick={this.submitHandler} type="submit">Register</SubmitButton>

                <Marginer direction="vertical" margin="1em"/>

                <MutedLink href="#">
                    Already registered?{" "}
                    <BoldLink href="/login">Signin</BoldLink>
                </MutedLink>
            </BoxContainer>
        )
    }
}

// export default RegisterForm;