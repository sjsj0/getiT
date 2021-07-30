import React, {Component, useState} from "react";
import {BoxContainer, FormContainer, HeaderContainer, Input, SubmitButton, TextLabel} from "./FormCommon";
import {Marginer} from "../accountBox/marginer";
import axios from "axios";

export class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            seller: '',
            title: '',
            about: '',
            description: '',
            category: '',
            price: '',
            quantity: '',
            image: 'default.jpg',
            productadded: false,
        }

        this.initialState = this.state;
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        const {seller, title, about, description, category, image} = this.state;

        // this.setState({seller: 'Piyush'})
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('title', this.state.title);
        form_data.append('about', this.state.about);
        form_data.append('description', this.state.description);
        form_data.append('category', this.state.category);
        form_data.append('seller', this.state.seller);

        const title_length = title.length
        const about_length = about.length
        const desc_length = description.length
        const category_length = category.length


        if (title_length === 0) {
            alert("Title can't be blank.")
        } else if (about_length === 0) {
            alert("About can't be blank.")
        } else if (desc_length === 0) {
            alert("Description can't be blank")
        } else if (category_length === 0) {
            alert("Category can't be blank")
        } else {
            this.setState(this.initialState)

            axios
                .post('http://127.0.0.1:8000/products/data/', form_data, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    console.log("Got response")
                    console.log(response)
                    this.setState({
                        productadded: true
                    });
                    alert("Product is added !");
                })
                .catch(error => {
                    console.log("Got error")
                    console.log(error)
                    console.log(error.response.data)
                    this.setState({
                        productadded: false
                    });
                    // alert(error.response.data.email)
                    // alert(error.response.data.username)
                })

        }

    }

    getUser = (e) => {
        axios
            .get('http://127.0.0.1:8000/account/user/', {
                headers: {
                    'Authorization': `Token ${sessionStorage.getItem("userToken")}`
                }
            })
            .then(response => {
                // console.log("Got user response")
                // console.log(response)
                // console.log(response.data.username)
                // alert("Got user data..user present !");
                this.setState({
                    seller: response.data.username
                });
            })
            .catch(error => {
                // console.log("Got error")
                // console.log(error)
                // console.log(error.response.data)
            })
    }

    componentDidMount() {
        this.getUser();
    }

    loadFile = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    render() {

        const {title, about, description, category, price, quantity, image} = this.state


        return (
            <div>
                <Marginer direction="vertical" margin={10}/>
                <HeaderContainer>
                    Add Product Details
                </HeaderContainer>

                <BoxContainer>
                    <TextLabel>{sessionStorage.getItem("userToken")}</TextLabel>
                    <Marginer direction="vertical" margin={5}/>
                    <FormContainer>
                        <TextLabel>Title</TextLabel>
                        <Input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5}/>
                    <FormContainer>
                        <TextLabel>About</TextLabel>
                        <Input type="text" name="about" value={about} onChange={this.changeHandler}/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5}/>
                    <FormContainer>
                        <TextLabel>Description</TextLabel>
                        <Input type="text" name="description" value={description} onChange={this.changeHandler}/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5}/>
                    <FormContainer>
                        <TextLabel>Category</TextLabel>
                        <Input type="text" name="category" value={category} onChange={this.changeHandler}/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5}/>
                    <FormContainer>
                        <TextLabel>Price</TextLabel>
                        <Input type="number" name="price" value={price} onChange={this.changeHandler}/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5}/>
                    <FormContainer>
                        <TextLabel>Quantity</TextLabel>
                        <Input type="number" name="quantity" value={quantity} onChange={this.changeHandler}/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={5}/>
                    <FormContainer>
                        <TextLabel>Photo</TextLabel>
                        <input type="file" id="img_upload" name="image" accept="image/*"
                               onChange={this.loadFile}/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={15}/>
                    <SubmitButton onClick={this.submitHandler} type="submit">Add</SubmitButton>
                    <Marginer direction="vertical" margin="1em"/>
                </BoxContainer>
            </div>
        )
    }
}