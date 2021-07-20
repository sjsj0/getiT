import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar/nav_index";

const TopSectionContainer = styled.div`
    width: 100%;
    height: 50px;
//   background-color: grey; 
`;

export function TopSection(props) {
     return <TopSectionContainer>
                <Navbar />
            </TopSectionContainer>
}