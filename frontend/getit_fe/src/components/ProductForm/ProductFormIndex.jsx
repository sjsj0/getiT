import React, { Component } from "react";
import { BoxContainer, FormContainer, HeaderContainer, Input, SubmitButton, TextLabel } from "./FormCommon";
import { Marginer } from "../accountBox/marginer";

export class ProductForm extends Component{

        constructor(props) {
            super(props)
            this.state = {
                title: '',
                about: '',
                description: '',
                category: '',
                price: '',
                quantity: '',
                image: '',
                productadded: false
            }

            this.initialState = this.state;
        }

        changeHandler = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }

        submitHandler = (e) => {
            e.preventDefault()
            console.log(this.state)

            const { title, about, description, category} = this.state;

            const title_length = title.length
            const about_length = about.length
            const desc_length = description.length
            const category_length = category.length
            
            if (title_length === 0) {
                alert("Title can't be blank.")
            }

            else if (about_length === 0) {
                alert("About can't be blank.")
            }

            else if (desc_length === 0) {
                alert("Description can't be blank")
            }

            else if (category_length === 0) {
                alert("Category can't be blank")
            }

            else {
                    this.setState(this.initialState)

                    axios
                        .post('http://127.0.0.1:8000/account/users/', this.state)
                        .then(response => {
                            // console.log("Got response")
                            // console.log(response)
                            this.setState({
                                productadded: true
                            });
                            alert("Product is added !");
                        })
                        .catch(error => {
                            // console.log("Got error")
                            // console.log(error)
                            // console.log(error.response.data)
                            this.setState({
                                productadded: false
                            });
                            alert(error.response.data.email)
                            alert(error.response.data.username)
                        })

            }

        }

    render() {

        return(
            <div>
                <Marginer direction="vertical" margin={10} />
                <HeaderContainer>
                    Add Product Details
                </HeaderContainer>
                
                <BoxContainer>
                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Title</TextLabel>
                        <Input type="text" name="title"  />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>About</TextLabel>
                        <Input type="text"  name="about"  />
                    </FormContainer>
        
                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Description</TextLabel>
                        <Input type="text"  name="description"  />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Category</TextLabel>
                        <Input type="text"  name="category"  />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Price</TextLabel>
                        <Input type="text"  name="price" />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Quantity</TextLabel>
                        <Input type="number"  name="quantity" />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Photo</TextLabel>
                        <input type="file" id="img" name="image" accept="image/*"/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={15} />
                    <SubmitButton  type="submit">Add</SubmitButton>
                    <Marginer direction="vertical" margin="1em" />
                </BoxContainer>
            </div>
        )
    }
}