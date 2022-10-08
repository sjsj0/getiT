import React ,  { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Marginer } from "../accountBox/marginer";
import axios from "axios";


const AccessibilityContainer = styled.div`
    display: flex;
`;

const RegisterButton = styled.button`
    border: 0;
    outline: 0;
    padding: 7px 1em;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    border-radius: 20px;
    background-color: #6adf76;
    background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
    background-color: #00c9ff;
    }

    &:not(:last-of-type) {
        margin-right: 7px;
    }
`;

const LoginButton = styled.button`
    border: 0;
    outline: 0;
    padding: 5px 1em;
    color: #222;
    font-size: 13px;
    font-weight: 600;
    border-radius: 20px;
    background-color: transparent;
    border: 2px solid #00c9ff;
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #00c9ff;
    }

    &:not(:last-of-type) {
        margin-right: 7px;
    }
`;

// function Logincomp(props) {

//     const flag= this.state.isAuthenticated;
//     if(flag)
//     {
//         return (
//             <Link to="/login">
//             <LoginButton>Login</LoginButton>
//             </Link>
//         );
//     }
  
//   }

export class Accessibility extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            isAuthenticated: false,
            recievedToken: ''
        }

        this.initialState = this.state
    }

    
    getProfile = (e) => {
        
        axios
            .get('http://127.0.0.1:8000/account/user/', {
                headers: {
                    'Authorization': `Token ${sessionStorage.getItem("userToken")}`
                }
            })
            .then(response => {
                console.log("Got user response")
                console.log(response)
                console.log(response.data)
                // alert("Got user data..user present !");
                this.setState({
                    username: response.data.username,
                    recievedToken: response.data.token,
                    isAuthenticated: true
                });

                sessionStorage.setItem("userToken", response.data.token);
                console.log(sessionStorage.getItem("userToken"))
            })
            .catch(error => {
                // console.log("Got error")
                // console.log(error)
                // console.log(error.response.data)
                this.setState({
                    recievedToken: 'No data from server',
                    isAuthenticated: false
                });
            })

    }


    componentDidMount()
    {
        this.getProfile();
    }
  
    render() {

        // let flag= this.state.isAuthenticated;
        // console.log(flag);
        let logincomp;
        let registercomp;
        let logoutcomp;


        if(this.state.isAuthenticated===false)
            {
                logincomp =  <Link to="/login"><LoginButton>Login</LoginButton></Link>
                registercomp = <Link to="/register">  <RegisterButton>Register</RegisterButton>    </Link>
            }
        
        else
        {
            logoutcomp = <Link to = "/logout"><LoginButton>Logout</LoginButton>  </Link>
        }
        
        return(
        <AccessibilityContainer>
            {/* <Link to="/register">
                <RegisterButton>Register</RegisterButton>
            </Link> */}
            {/* <Marginer direction="horizontal" margin={10} /> */}

            {/* <Logincomp/> */}
            
            {registercomp}
            <Marginer direction="horizontal" margin={10} />
            {logincomp}
            {logoutcomp}
           
{/* 
            <Link to="/login">
                <LoginButton>Login</LoginButton>
            </Link> */}
        </AccessibilityContainer>
        
        )
}
}