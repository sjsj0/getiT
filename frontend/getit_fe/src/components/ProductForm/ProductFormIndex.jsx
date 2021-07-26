import React, { Component } from "react";
import { BoxContainer, FormContainer, HeaderContainer, Input, SubmitButton, TextLabel } from "./FormCommon";
import { Marginer } from "../accountBox/marginer";

export class ProductForm extends Component{
    render(){

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
                        <Input type="text"  name="quantity" />
                    </FormContainer>

                    <Marginer direction="vertical" margin={5} />
                    <FormContainer>
                        <TextLabel>Photo</TextLabel>
                        <input type="file" id="img" name="img" accept="image/*"/>
                    </FormContainer>

                    <Marginer direction="vertical" margin={15} />
                    <SubmitButton  type="submit">Add</SubmitButton>
                    <Marginer direction="vertical" margin="1em" />
                </BoxContainer>
            </div>
        )
    }
}