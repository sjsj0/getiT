
import React from "react";
import styled from "styled-components";
import { SearchBar } from "../../components/searchbar/searchbar_index";
import Back from "../../static/Grocery.jpg";

const Photo = styled.div`
    width: 100%;
    height: 300px;
    background: url(${Back});
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(181, 189, 183, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SearchBarSetting = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export function Homeback(props){
    return (
        <Photo>
            <BackgroundFilter>
                {/* <h2>getiT</h2>
                <h3>This is your local Store</h3> */}
                <SearchBarSetting>
                    <SearchBar />
                </SearchBarSetting>
            </BackgroundFilter>
        </Photo>
   )
}