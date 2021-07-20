import {TopSection} from "./topSection";
import {PageContainer} from "../../components/pageContainer/pageContainer_index";
import {Marginer} from "../../components/accountBox/marginer";
import {FooterV2} from "../../components/footer_V2/footer_index";
import React from "react";
import {ProductDetailCard} from "./ProductDetailCard";

export function ProductPage(props) {
    return (

        <PageContainer>
            <TopSection/>
            <Marginer direction="vertical" margin={30}/>
            <ProductDetailCard />
            <Marginer direction="vertical" margin={30}/>
            <FooterV2/>
        </PageContainer>
    )
}