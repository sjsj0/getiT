import React from "react";
import { PageContainer } from "../../components/pageContainer/pageContainer_index";
import { TopSection } from "./topSection";
import { CardSection } from "./cardSection";
import Slides from "../../components/Slides.jsx"
import { Marginer } from "../../components/accountBox/marginer";
import { Footer } from "../../components/Footer/footer_index";

export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection />
            <Marginer direction="vertical" margin={30} /> 
            <Slides />
            <Marginer direction="vertical" margin={30} /> 
            <CardSection />
            <Marginer direction="vertical" margin={30} />
            <Footer />
        </PageContainer>
        

    )
}