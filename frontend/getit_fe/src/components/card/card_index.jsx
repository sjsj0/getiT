import React from "react";
import styled from "styled-components";
import card_img from "../../static/card_img.png"

const ItemCardContainer = styled.div`
    text-align: justify;
    max-width: 300px;
    max-height: 500px;
    border: 1px solid #eee;
    overflow: hidden;
    padding: 10px;
    box-shadow: 2px 8px 20px #555;
    margin: 10px;
    transition: 0.3s linear;    
    
    &:hover {
        box-shadow: none;
    }
`;

const ImgContainer = styled.div`
`;

const CardImg = styled.img`
    max-width: 200px;
    width: 100%;
    height: 100%;
    max-height: 300px;
    display: block;
    object-fit: cover;
    margin: auto;
`;

const CardH3 = styled.h3`
    text-transform: uppercase;
    margin: 10px 0;
    
    &:hover{
        color: crimson;
    }
`;

const CardSpan = styled.span`
    color: crimson;
`;

const CardPara = styled.p`
    margin: 10px 0;
`;

const CardButton = styled.button`
    border: none;
    outline: none;
    background: #333;
    color: white;
    width: 100%;
    height: 40px;
    display: block;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 15px 0;
`;


export function ItemCard(props) {
    return (
        <ItemCardContainer>
            <ImgContainer>
                <CardImg src={card_img} alt="Denim Jeans"/>
            </ImgContainer>

            <div className="content">
                <CardH3>
                    Product title
                </CardH3>
                <CardSpan>$19.99</CardSpan>
                <CardPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardPara>
                <CardButton>Add to cart</CardButton>
            </div>
        </ItemCardContainer>
    )
}