import React, { Component} from 'react';
import { BoxContainer, FormContainer, HeaderContainer, Input, SubmitButton, TextLabel ,ProfilePageContainer, ProfileContainer } from "./common_account";
import { Marginer } from "../accountBox/marginer";
import { Navbar } from "../../components/navbar/nav_index";
import { TopSection } from './topsection';
import axios from "axios";


export class AccountForm extends Component{

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            email: '',
            contact:'',
            isSeller: '',
        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.initialState = this.state;
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
                // seller: response.data.username
                username: response.data.username,
                email: response.data.email,
                isSeller: response.data.is_seller
                });
            })
            .catch(error => {
                // console.log("Got error")
                // console.log(error)
                // console.log(error.response.data)
            })

    }

    componentDidMount(){
        this.getProfile();
        this.forceUpdateHandler();
    }

    forceUpdateHandler(){
        this.forceUpdate();
      };

    render() {
       
        const { username, email, isSeller } = this.state
        
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
                        <Input type="text" name="username" placeholder={username}   />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Email</TextLabel>
                        <Input type="email" name="email" placeholder={email} />
                    </FormContainer>
        
                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Contact</TextLabel>
                        <Input type="text" name="contact"/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Is Seller</TextLabel>
                        <Input type="text" readOnly name="isSeller" placeholder={(isSeller===true) ? 'Yes':'NO'} />
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