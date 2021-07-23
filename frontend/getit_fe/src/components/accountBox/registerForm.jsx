import React, {Component} from "react";
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import {Marginer} from "./marginer";
import axios from 'axios';

export class RegisterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Email: '',
            Password: '',
            CPassword: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    register_func = event => {
        console.log("register here");
        if (this.state.Password !== this.state.CPassword) {
            alert("Password should be same !")
        } else {
            const registeration_data = this.state;

            axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/test_data/',
                    data: registeration_data
                }
            )
                .then(response => {
                    console.log(response)
                    this.setState({articleId: response.data.articleId})
                    console.log(this.state)
                });
        }
    }

    render() {
        const {Name, Email, Password, CPassword} = this.state
        return (
            <BoxContainer>
                <FormContainer onSubmit={this.submitHandler}>
                    <Input type="text" placeholder="Full Name" name="Name" value={Name} onChange={this.changeHandler}/>
                    <Input type="email" placeholder="Email" name="Email" value={Email} onChange={this.changeHandler}/>
                    <Input type="password" placeholder="Password" name="Password" value={Password}
                           onChange={this.changeHandler}/>
                    <Input type="password" placeholder="Confirm Password" name="CPassword" value={CPassword}
                           onChange={this.changeHandler}/>
                    <Marginer direction="vertical" margin={10}/>
                    {/* <MutedLink href="#">Forget your password?</MutedLink> */}
                    {/* <Marginer direction="vertical" margin="1.6em" /> */}

                    <SubmitButton onClick={this.register_func} type="submit">Register</SubmitButton>
                </FormContainer>


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