import React from "react";
import { PageContainer } from "../../components/pageContainer/pageContainer_index";
import { TopSection } from "./topSection";
import { CardSection } from "./cardSection";
import Slides from "../../components/Slides.jsx"

export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection />
            <Slides />
            <CardSection />

        </PageContainer>
        

    )
}