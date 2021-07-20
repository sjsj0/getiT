import React from "react";
import { Marginer } from "../../components/accountBox/marginer";
import { FooterV2 } from "../../components/footer_V2/footer_index";
import { PageContainer } from "../../components/pageContainer/pageContainer_index";
import { TopSection } from "../HomePage/topSection";
import { CardSearch } from "./cardSearch";

export function SearchPage(props){
    return (
        <PageContainer>
            <TopSection />
            <CardSearch />
            <Marginer direction='vertical' margin={50}/>
            <FooterV2 />
        </PageContainer>
    )
}

