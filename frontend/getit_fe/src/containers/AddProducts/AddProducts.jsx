import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar/nav_index";
import { ProductForm } from "../../components/ProductForm/ProductFormIndex";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export function AddProducts(props) {
    return(
        <div>
            <Navbar />
            <AppContainer>
                <ProductForm />
            </AppContainer>
        </div>
    )
}