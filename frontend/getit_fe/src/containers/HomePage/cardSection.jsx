import React from "react";
import styled from "styled-components";
import { ProductCard } from "../../components/productCard/card_index";

import Cars from "../../static/car.jpg";
import Flowers from "../../static/flowers.jpg";
import Garden from "../../static/garden.jpg";
import Grass from "../../static/grass.jpg";
import Office from "../../static/office.jpg";

const CardSectionContainer = styled.div`
    width: 100%;
    max-width: 1366px;//to alter
    ${'' /* background-color: grey; */}
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


export function CardSection(props) {
     return <CardSectionContainer>
                <CardWrapper>
                    <ProductCard thumbnail={Cars} title="A BMW" seller="RMX Automobiles" rating="5" price="25lac"/>
                    <ProductCard thumbnail={Flowers} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Garden} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Grass} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Office} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Cars} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Flowers} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Garden} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Grass} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Office} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Cars} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Flowers} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Garden} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Grass} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                    <ProductCard thumbnail={Office} title="A BMW" seller="RMX Automobiles" rating="4" price="25lac"/>
                </CardWrapper>
            </CardSectionContainer>
}