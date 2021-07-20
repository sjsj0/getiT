import {Marginer} from "../../components/accountBox/marginer";
import React from "react";
import card_img from "../../static/car.jpg"
import styled from "styled-components";

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0;
    border: 1px solid #eee;
    box-shadow: 0 0 1px #888888;
`;

const ProductImg = styled.div`
    width: 600px;
    height: 400px;
    display: block;
    object-fit: cover;
    margin: 25px;
    border: 1px solid #eee;
    
    img{
        width: 100%;
        height: 100%
    }
   
`;
const ProductInfoContainer = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
    //border: 1px solid #eee;
    text-align: justify;
`;

const TitlePrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    
    h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    }
    
    span {
    color: crimson;
    }
`;

const CartButton = styled.button`
    background: #2ba679;
    color: white;
    text-decoration: none;
    padding: 10px 25px;
    display: inline-block;
    border: none;
    border-radius: 8px;
    
    &:hover {
        box-shadow: 0 0 10px #ddd;
        background: #248b65;
    }
`;

const SellerName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 16px;
  font-weight: 400;
`;

const QuantityInput = styled.input`
    width: 45px;
    height: 45px;
    margin: 0 10px 0 0;
    text-align: center;
`;

const ShortDescription = styled.p`
  margin: 0;
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 400;
`;

const DetailDescription = styled.p`
  margin: 0;
  color: #a1a1a1;
  font-size: 14px;
  font-weight: 400;
`;

const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: justify;
`;

const AddToCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: justify;
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: justify;
`;

export function ProductDetailCard(props) {
    return (

        <ProductContainer>
            <ProductImg>
                <img src={card_img} alt=""/>
            </ProductImg>

            <ProductInfoContainer>

                <TitleContainer>
                    <SellerName>Tesla India</SellerName>
                    <TitlePrice>
                        <h2>MODEL S</h2>
                        <span>$1000</span>
                    </TitlePrice>
                </TitleContainer>

                <DescriptionContainer>
                    <ShortDescription>UI/UX designing, html css tutorials</ShortDescription>
                    <Marginer direction="vertical" margin={10}/>
                    <DetailDescription>Welcome to our channel Dev AT. Here you can learn web designing, UI/UX
                        designing, html css
                        tutorials, css animations and css effects, javascript and jquery tutorials and related so
                        on.
                    </DetailDescription>
                    <Marginer direction="vertical" margin={30}/>
                </DescriptionContainer>

                <AddToCartContainer>
                    <QuantityInput type="number" placeholder="1"/>
                    <CartButton>ADD TO BASKET</CartButton>
                </AddToCartContainer>

            </ProductInfoContainer>

        </ProductContainer>

    )
}